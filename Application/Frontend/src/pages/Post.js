import React from 'react'
import { useParams } from 'react-router-dom';
import '../App.css'

//used as mock data
const posts = [
    {
      id: 1,
      author: "Zehra",
      title: "Hi I’m 23F, last night I was drinking parol ",
      date: "5",
      description:
        "Hi I’m 23F, last night I was drinking parol and probably had 4 parol drinks total. This is not out of the ordinary for me. I was feeling good and then all of a sudden I was having muscle...",
      score: "11",
      labels: ["Bones/Joints/Ligaments", "Question", "Help"],
      voted: "",
    },
    {
      id: 2,
      author: "Fatih",
      title: "Title test",
      date: "12",
      description:
        "I am 17 and a week ago I almost passed out because I got up from bed too quickly, 2 days ago I had bright blood in stool, yesterday I had the same but with more blood... ",
      score: "6",
      labels: ["Digestion/Stomach/Bowels", "Question", "Help"],
      voted: "",
    },
    {
      id: 3,
      author: "Fatma",
      title: "Just testing",
      date: "20",
      description:
        "I took parol pills  Hello everyone. I took parol pills at midnight and it’s like 6am. I’m not even tired. Why am I not tired?I’ve just lost touch with reality... ",
      score: "3",
      labels: ["Other"],
      voted: "",
    },
    {
      id: 4,
      author: "Mert",
      title: "Some title",
      date: "40",
      description:
        "Overtaking 45mg Mirtazapine for 6 months straight So I have been prescribed 1 45mg Mirtazapine a night I am 22 now, for the last 6 months I have been taking 3 of ...      ",
      score: "3",
      labels: ["Medication", "Question", "Help"],
      voted: "",
    },
    {
      id: 5,
      author: "İhsan ",
      title: "some other title",
      date: "50",
      description:
        "Misdiagnosed tennis elbow?So i've had this lingering elbow ache/soreness/discomort for around 3 months and a few weeks back I finally decided to get it checked out.  ...",
      score: "2",
      labels: ["Bones/Joints/Ligaments", "Question", "Help"],
      voted: "",
    },
    {
      id: 6,
      author: "Murat",
      title: "another title",
      date: "55",
      description:
        "Odd eye spasm when trying to sleep  this has been happening to me for years and I don’t think it’s anything serious it’s just odd. I cant find anything g online either! when ...    ",
      score: "1",
      labels: ["Eyes", "Question", "Help"],
      voted: "",
    },
    {
      id: 7,
      author: "Berk",
      title: "completely different title",
      date: "59",
      description:
        "Still have a have a fever 2 weeks after recovering from possible scarlet fever..please help (23M) Hey so on October 15th I woke up with a 105° fever and all symptoms of covid I remember ... ",
      score: "-1",
      labels: ["Other"],
      voted: "",
    },
  ];

const Post = () => {
    const id = useParams().postId

    //send request to backend for post details.


    return (

            <div class="center">
                <div class="text-center m-5-auto">
                    <h2 class="yellow-font">Post Page test</h2>
                </div>
                <h2 class="yellow-font">This is post with id {id}</h2>
            </div>
        

    )
}

export default Post
