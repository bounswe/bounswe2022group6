import React, { useEffect,useReducer } from 'react'
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import {useState} from "react"
import {useHistory, Link} from 'react-router-dom'
import styles from "../pages/home.module.css";
import CreatePostForm from "./CreatePostForm";
import getPost from "../services/Post_API";
import contentvote from '../services/Vote_API';


//used as mock data get post details from backend
const mockPosts = [
  {
    id: 1,
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
    title: "Fatih",
    date: "12",
    description:
      "I am 17 and a week ago I almost passed out because I got up from bed too quickly, 2 days ago I had bright blood in stool, yesterday I had the same but with more blood... ",
    score: "6",
    labels: ["Digestion/Stomach/Bowels", "Question", "Help"],
    voted: "",
  },
  {
    id: 3,
    title: "Fatma",
    date: "20",
    description:
      "I took parol pills  Hello everyone. I took parol pills at midnight and it’s like 6am. I’m not even tired. Why am I not tired?I’ve just lost touch with reality... ",
    score: "3",
    labels: ["Other"],
    voted: "",
  },
  {
    id: 4,
    title: "Mert",
    date: "40",
    description:
      "Overtaking 45mg Mirtazapine for 6 months straight So I have been prescribed 1 45mg Mirtazapine a night I am 22 now, for the last 6 months I have been taking 3 of ...      ",
    score: "3",
    labels: ["Medication", "Question", "Help"],
    voted: "",
  },
  {
    id: 5,
    title: "İhsan ",
    date: "50",
    description:
      "Misdiagnosed tennis elbow?So i've had this lingering elbow ache/soreness/discomort for around 3 months and a few weeks back I finally decided to get it checked out.  ...",
    score: "2",
    labels: ["Bones/Joints/Ligaments", "Question", "Help"],
    voted: "",
  },
  {
    id: 6,
    title: "Murat",
    date: "55",
    description:
      "Odd eye spasm when trying to sleep  this has been happening to me for years and I don’t think it’s anything serious it’s just odd. I cant find anything g online either! when ...    ",
    score: "1",
    labels: ["Eyes", "Question", "Help"],
    voted: "",
  },
  {
    id: 7,
    title: "Berk",
    date: "59",
    description:
      "Still have a have a fever 2 weeks after recovering from possible scarlet fever..please help (23M) Hey so on October 15th I woke up with a 105° fever and all symptoms of covid I remember ... ",
    score: "-1",
    labels: ["Other"],
    voted: "",
  },
];


const ForumPost = (props) => {
  console.log(props.post)

  const isGuestUser = window.localStorage.getItem("auth_token") ? false : true
  let history = useHistory()

    const vote = (direction) => {
        if(isGuestUser){
            alert("You need to be logged in")
            return
        }
        console.log("voting post")
        contentvote(props.post.id, direction, true).then(() => props.onVote())
      };

    const onClick = () => {
      setTimeout(() => {
        history.push('/post/'+props.post.id);
      }, "100")
    }

      return(
        
        <div>
          <div className={styles.mypost}>
          <div
            style={{
              width: "10%",
              backgroundColor: "#f0feff",
              color: "#bdbfbd",
              alignItems: "center",
              paddingTop: "25px",
            }}
          >
            <ImArrowUp
              className={
                props.post.voted === "up" ? styles.upvoteactive : styles.upvote
              }
              onClick={() => vote("up")}
            />
            <h3
              style={{
                padding: "7px 0px",
              }}
            >
              {props.post.vote_count}
            </h3>
            <ImArrowDown
              className={
                props.post.voted === "down"
                  ? styles.downvoteactive
                  : styles.downvote
              }
              onClick={() => vote("down")}
            />
          </div>
          <div onClick={onClick} style={{ width: "80%", margin: "auto", cursor: "pointer" }}>
            <div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {/* {props.post.labels && props.post.labels.map((label) => (
                    <p
                      style={{
                        borderRadius: "5px",
                        border: "1px solid lightgray",
                        padding: "3px 5px",
                        marginRight: "5px",
                        backgroundColor: "lightgoldenrodyellow",
                        fontSize: "x-small",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      {label}
                    </p>
                  ))} */}
                  <small style={{ padding: "3px 5px", marginLeft: "15px" }}>
                    {props.post.created_at}
                  </small>
                </div>
              </div>
            </div>
            <p style={{ textAlign: "left", fontWeight: "bolder" }}>
              {props.post.title}
            </p>{" "}
            <p style={{ textAlign: "left" }}>{props.post.description}</p>
          </div>
        </div>
      </div>
      )
}


const getAllPosts = () => {

  let allPosts = [1,2]
  let post;
  getPost(1).then(res => {
      console.log(res)
      post = res
      allPosts.push(3)
    });

    console.log(post)
}





const Posts = () => {

  const [showPostCreate, setPostCreate] = useState(false)

  const isGuestUser = window.localStorage.getItem("auth_token") ? false : true

  const [posts, setPosts] = useState([]);
  const [voted, setVoted] = useState(false)

  useEffect(() => {
    getPost(2).then(res => {
      console.log(res)
      setPosts([res]);
    });
  }, [voted]);
  

  const handleClick = () => {
    setPostCreate(!showPostCreate)
  }

    return (
    <div
        className="mypost"
        style={{
          width: "60%",
          marginLeft: "5%",
          marginRight: "3%",
          marginTop: "1%",
          height: "700px",
          overflow: "auto",
        }}
      >
        {!isGuestUser && !showPostCreate && <div className={styles.createpost} onClick = {handleClick}>Create Post</div>}
        {showPostCreate && <CreatePostForm
          onCancel = {() => setPostCreate(false) }
          >
          </CreatePostForm>}
          {posts && posts.map((post) => 
          <ForumPost
          post= {post}
          onVote = {() => setVoted(!voted)}
          ></ForumPost> )}
        
      </div>)
}

export default  Posts