from django.test import TestCase, Client
from .models import *
import json

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

