from django.test import TestCase, Client
from .models import *
import json

# This function is here to set up some test classes.
# This function registers some users, and returns tokens of them.
def registerUsers(client):
# This function helps to login and acquire token of specific user
    def login_helper(user, passwd):
        response_login = client.post('/login/', { "useridentifier": user, "password": passwd})
        response_login_content = json.loads(response_login.content)
        return response_login_content["token"]
    client.post('/register/', { "username": "markine", "email": "markine@facadeledger.com",
            "password": "passpass", "gender":"f", "birth_day":"06", "birth_month":"10", "birth_year":"1970"})
    client.post('/register/', { "username": "john", "email": "john@facadeledger.com",
            "password": "passpass", "gender":"m", "birth_day":"02", "birth_month":"8", "birth_year":"1976"})
    client.post('/register/', { "username": "nancy", "email": "nancy@facadeledger.com",
            "password": "passpass", "gender":"o", "birth_day":"26", "birth_month":"11", "birth_year":"1980"})
    client.post('/register/', { "username": "mary", "email": "mary@facadeledger.com",
            "password": "passpass", "gender":"o", "birth_day":"26", "birth_month":"11", "birth_year":"1980"})
    return [login_helper(_user, "passpass") for _user in ["markine", "john", "nancy", "mary"]]
    
class PostsTest(TestCase):

    databases = ['default', 'annotation']

    def setUp(self):
        self.client = Client()
        self.tokens = registerUsers(self.client)

    def test_posts(self):
        # Create post
        response = self.client.post('/contmgr/post/', { "title": "Headache", "type": "q",
                "description": "Constant headache while sleeping"}, HTTP_AUTHORIZATION=f"Token {self.tokens[0]}")
        content_post = json.loads(response.content)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(content_post["info"], "post creation successful")

        # Other users should not be able to update this post
        response = self.client.put(f'/contmgr/post?id={content_post["postID"]}', json.dumps({"description": "I should remove this section!"}),
                content_type='application/json', HTTP_AUTHORIZATION=f"Token {self.tokens[1]}")
        content = json.loads(response.content)
        self.assertEqual(response.status_code, 403)
        self.assertEqual(content, {"info": "post update failed", "error": "not post owner"})

        # Update post
        response = self.client.put(f'/contmgr/post?id={content_post["postID"]}', json.dumps({"mentioned_users": ["nancy", "john"]}),
                content_type='application/json', HTTP_AUTHORIZATION=f"Token {self.tokens[0]}")
        content = json.loads(response.content)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(content["info"], "post update successful")

        # Test GET method and check if resulting data is valid
        response = self.client.get(f'/contmgr/post?id={content_post["postID"]}')
        content = json.loads(response.content)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(content["description"], 'Constant headache while sleeping')
        self.assertEqual(content["owner"]["username"], 'markine')
        self.assertEqual(content["result_vote"], 0)
        self.assertCountEqual([ment_user["username"] for ment_user in content["mentioned_users"]], ["nancy", "john"])
        self.assertEqual(content["title"], 'Headache')
        self.assertEqual(content["type"], 'q')

class CommentsTest(TestCase):

    databases = ['default', 'annotation']

    def setUp(self):
        self.client = Client()
        self.tokens = registerUsers(self.client)
        response = self.client.post('/contmgr/post/', { "title": "Headache", "type": "q",
                "description": "Constant headache while sleeping"}, HTTP_AUTHORIZATION=f"Token {self.tokens[0]}")
        self.postID = json.loads(response.content)["postID"]

    def test_comments(self):
        # Create comment
        response = self.client.post('/contmgr/comment/', { "parent_post_id": self.postID,
                "description": "Sorry mate!"}, HTTP_AUTHORIZATION=f"Token {self.tokens[0]}")
        content_comment = json.loads(response.content)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(content_comment["info"], "comment creation successful")
        
        # Other users should not be able to update this comment
        response = self.client.put(f'/contmgr/comment?id={content_comment["commentID"]}', json.dumps({"description": "I should remove this section!"}),
                content_type='application/json', HTTP_AUTHORIZATION=f"Token {self.tokens[1]}")
        content = json.loads(response.content)
        self.assertEqual(response.status_code, 403)
        self.assertEqual(content, {"info": "comment update failed", "error": "not comment owner"})

        # Update comment
        response = self.client.put(f'/contmgr/comment?id={content_comment["commentID"]}', json.dumps({"mentioned_users": ["nancy", "john"]}),
                content_type='application/json', HTTP_AUTHORIZATION=f"Token {self.tokens[0]}")
        content = json.loads(response.content)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(content["info"], "comment update successful")

        # Create another comment for this comment
        response = self.client.post('/contmgr/comment/', { "parent_comment_id": content_comment["commentID"],
                "description": "Thanks"}, HTTP_AUTHORIZATION=f"Token {self.tokens[0]}")
        content = json.loads(response.content)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(content["info"], "comment creation successful")

        # Test GET method and check if resulting data is valid
        post_response = self.client.get(f'/contmgr/post?id={self.postID}')
        post_content = json.loads(post_response.content)
        self.assertEqual(post_response.status_code, 200)
        comment_response = self.client.get(f'/contmgr/comment?id={content_comment["commentID"]}')
        comment_content = json.loads(comment_response.content)
        self.assertEqual(comment_response.status_code, 200)
        # Check if post includes the comment
        self.assertEqual(post_content["comments"][0]["commentID"], comment_content["commentID"])

        self.assertEqual(post_content["description"], 'Constant headache while sleeping')
        self.assertEqual(post_content["owner"]["username"], 'markine')
        self.assertEqual(post_content["result_vote"], 0)
        self.assertCountEqual([ment_user["username"] for ment_user in comment_content["mentioned_users"]], ["nancy", "john"])
        self.assertEqual(post_content["title"], 'Headache')
        self.assertEqual(post_content["type"], 'q')
        self.assertEqual(comment_content["description"], "Sorry mate!")
        self.assertEqual(comment_content["comments"][0]["description"], "Thanks")

class VoteTest(TestCase):

    def setUp(self):
        def postCreate(number):
            response = self.client.post('/contmgr/post/', { "title": f"title {number}", "type": "q",
                    "description": "Constant headache while sleeping"}, HTTP_AUTHORIZATION=f"Token {self.tokens[number]}")
            return json.loads(response.content)["postID"]
        self.client = Client()
        self.tokens = registerUsers(self.client)
        self.postID = [postCreate(_num) for _num in range(3)]
    
    def test_votes(self):
        # Test vote
        response = self.client.post('/contmgr/postvote/', { "id": self.postID[0], "vote": "up"}, 
                HTTP_AUTHORIZATION=f"Token {self.tokens[0]}")
        content = json.loads(response.content)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(content["info"], "Upvote added to post for user")

        # Test vote change
        response = self.client.post('/contmgr/postvote/', { "id": self.postID[0], "vote": "down"}, 
                HTTP_AUTHORIZATION=f"Token {self.tokens[0]}")
        content = json.loads(response.content)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(content["info"], "Downvote added to post for user")

        # Check vote
        response = self.client.get(f'/contmgr/postvote?id={self.postID[0]}', 
                HTTP_AUTHORIZATION=f"Token {self.tokens[0]}")
        content = json.loads(response.content)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(content["voted"], "down")
        
        # Remove vote
        response = self.client.post('/contmgr/postvote/', { "id": self.postID[0], "vote": "down"}, 
                HTTP_AUTHORIZATION=f"Token {self.tokens[0]}")
        content = json.loads(response.content)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(content["info"], "Downvote removed from post for user")

class LabelsTest(TestCase):

    def setUp(self):
        self.client = Client()
        Label.objects.create(labelName="test", labelType="c", labelColor="#000000", parentLabel=None)

    def test_labels(self):
        response = self.client.get('/contmgr/labels/')
        response_content = json.loads(response.content)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response_content, {"labels": [{"labelID": 1, "labelName": "test", "labelType": "c", "labelColor": "#000000", "parentLabel": None}]})


class SearchPostTest(TestCase):

    databases = ['default', 'annotation']

    def setUp(self):
        self.client = Client()
        self.client.post('/register/', { "username": "markine", "email": "markine@facadeledger.com",
                "password": "markineworld", "gender":"f", "birth_day":"12", "birth_month":"3", "birth_year":"1988"})
        label1 = Label.objects.create(labelName="Pediatry", labelType="f", labelColor="#000000", parentLabel=None)
        label2 = Label.objects.create(labelName="Gynecology", labelType="f", labelColor="#000000", parentLabel=None)
        label3 = Label.objects.create(labelName="Neurology", labelType="f", labelColor="#000000", parentLabel=None)
        label4 = Label.objects.create(labelName="Ophthalmology", labelType="c", labelColor="#000000", parentLabel=label3)

        post1 = Post.objects.create(
            owner=RegisteredUser.objects.get(username="markine"),
            description="Hey just wondering if anyone has any ideas as I’m concerned for my 2 year old daughter. She has these episodes daily where her eyes roll upwards for 1-2 seconds, and you can only see the white of her eyes. Sometimes they come in clusters where it can happen 10 times in a row. Sometimes it doesn’t bother her or other times she gets a bit dazed/ is out of it after it happens, and stops what she’s doing, but doesnt collapse if she is standing.  We have seen 2x neuros, she’s had a clear CT, bloods, 3 EEGs, metabolic urine screening. They do not know what is happening.  Please any help or ideas?",
            title="2 year old daughter - eyes rolling in back of head",
            type="q")

        post1.labels.add(label1)
        post1.labels.add(label3)

        post2 = Post.objects.create(
            owner=RegisteredUser.objects.get(username="markine"),
            description="Hello, I'm wondering if anyone had experienced this or has any clue of what is happening. So, my last period ended on the 21st of november and the next is due on the 12th of december. Yesterday, on the 1st of december, 3 days after my ovulation, I got menstrual like bleeding and Im still experiencing it. The bleeding is not light nor its heavy. The colour of the blood is bright red and Im feeling bloated and having cramps. Also, I have been experiencing pain during intercourse.",
            title="Bleeding inbetween periods",
            type="q")

        post2.labels.add(label2)

        post3 = Post.objects.create(
            owner=RegisteredUser.objects.get(username="markine"),
            description="I have been feeing dizziness for around 2 months now, and it had recently been extremely bad the moment I wake up. Everything will be spinning and I’m extremely tired and after I get out of bed it lingers but to a much lesser extent. Anyone know what this might be? I went to an ENT doctor last month and she didn’t think it was vertigo, but I have a test on the 19th to rule out if it’s a vestibular issue. Was wondering if anyone has had similar issues and if there are any ways of getting some relief. Thanks.",
            title="Constant dizziness",
            type="e")

        post3.labels.add(label3)

        post4 = Post.objects.create(
            owner=RegisteredUser.objects.get(username="markine"),
            description="yesterday at around 5 I had this weird spot on my lower cheek and it burned abs stung really bad but it went away in like 10 mins. But then at around 12 I had really bad neck pain behind and under my ear. And when I woke up this morning I now have a sore throat and really sore armpits. Is this something bad?? I have super bad health anxiety and freak abt everything",
            title="Armpit pain and dizziness and neck pain all of the sudden",
            type="e")

        post4.labels.add(label3)

        post5 = Post.objects.create(
            owner=RegisteredUser.objects.get(username="markine"),
            description="For a few years now whenever I get up from the couch after watching TV I feel really dizzy, I just thought this was normal. But just recently I got up and my eyesight git really bad (almost blind) and I heard this ringing for about 30-40 seconds. Should I be concerned?",
            title="partial blindness and dizziness",
            type="e")

        post5.labels.add(label4)

    # This test alone tests the search function completely

    def test_search(self):

        response = self.client.get("/contmgr/searchpost?label=Neurology&keyword=dizziness")
        response_content = json.loads(response.content)
        posts = response_content["posts"]
        postIDs = [post["postID"] for post in posts]
        self.assertEqual(postIDs, [3, 4])

class AnnotationTest(TestCase):

    databases = ["default", "annotation"]

    def setUp(self):
        def postCreate(number):
            response = self.client.post('/contmgr/post/', { "title": f"title {number}", "type": "q",
                    "description": "Constant headache while sleeping"}, HTTP_AUTHORIZATION=f"Token {self.tokens[number]}")
            return json.loads(response.content)["postID"]
        self.client = Client()
        self.tokens = registerUsers(self.client)
        self.postID = [postCreate(_num) for _num in range(3)]

    def test_text_annotation(self):
        response = self.client.post('/contmgr/annotations/', { "annotation_type": "text",
                                                                "content_type": "post",
                                                                "content_id": 1,
                                                                "jsonld": '{"@context":"http://www.w3.org/ns/anno.jsonld","type":"Annotation","body":[{"type":"TextualBody","value":"text annotation","purpose":"commenting","creator":{"id":"1","name":"tollen"},"created":"2022-12-23T14:48:30.744Z","modified":"2022-12-23T14:48:38.590Z"}],"target":{"selector":[{"type":"TextQuoteSelector","exact":"Annotations"},{"type":"TextPositionSelector","start":14,"end":25}]},"id":"#5519fef0-7376-4630-96f8-4b6407419c13"}'}, HTTP_AUTHORIZATION=f"Token {self.tokens[0]}")
        
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {
            "info": "annotation creation successful",
            "annotation_id": "#5519fef0-7376-4630-96f8-4b6407419c13"
        })

    def test_image_annotation(self):
        response = self.client.post('/contmgr/annotations/', { "annotation_type": "image",
                                                                "content_type": "post",
                                                                "content_id": 1,
                                                                "jsonld": '{"@context":"http://www.w3.org/ns/anno.jsonld","type":"Annotation","body":[{"type":"TextualBody","value":"image annotation","purpose":"commenting","creator":{"id":1,"name":"tollen"},"created":"2022-12-23T14:55:40.253Z","modified":"2022-12-23T14:55:41.743Z"}],"target":{"source":"https://myuploads-medishare38.s3.amazonaws.com/image_1671788232333.png","selector":{"type":"FragmentSelector","conformsTo":"http://www.w3.org/TR/media-frags/","value":"xywh=pixel:68,76,194,196"}},"id":"#48d7b458-fead-45af-b317-db2d9ddf4c38"}'
        }, HTTP_AUTHORIZATION=f"Token {self.tokens[0]}")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {
            "info": "annotation creation successful",
            "annotation_id": "#48d7b458-fead-45af-b317-db2d9ddf4c38"
        })

    def test_bad_request(self):
        response = self.client.post('/contmgr/annotations/', { "annotation_type": "video",
                                                                "content_type": "post",
                                                                "content_id": 1,
                                                                "jsonld": '{"@context":"http://www.w3.org/ns/anno.jsonld","type":"Annotation","body":[{"type":"TextualBody","value":"image annotation","purpose":"commenting","creator":{"id":1,"name":"tollen"},"created":"2022-12-23T14:55:40.253Z","modified":"2022-12-23T14:55:41.743Z"}],"target":{"source":"https://myuploads-medishare38.s3.amazonaws.com/image_1671788232333.png","selector":{"type":"FragmentSelector","conformsTo":"http://www.w3.org/TR/media-frags/","value":"xywh=pixel:68,76,194,196"}},"id":"#48d7b458-fead-45af-b317-db2d9ddf4c38"}'
        }, HTTP_AUTHORIZATION=f"Token {self.tokens[0]}")

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.content), {
            "info": "annotation creation failed",
            "error": "annotation_type is invalid"
        })