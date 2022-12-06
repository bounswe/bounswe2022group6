import React, { useEffect,useReducer } from 'react'
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import {useState} from "react"
import {useHistory, Link} from 'react-router-dom'
import styles from "../pages/home.module.css";
import CreatePostForm from "./CreatePostForm";
import getPostById, {getAllPosts} from "../services/Post_API";
import contentvote from '../services/Vote_API';
import moment from 'moment'

const ForumPost = (props) => {
  const isGuestUser = window.localStorage.getItem("auth_token") ? false : true
  let history = useHistory()
  console.log(props)
    const vote = (direction) => {
        if(isGuestUser){
            alert("You need to be logged in")
            return
        }
        console.log("voting post")
        contentvote(props.post.postID, direction, true).then(() => props.onVote())
      };

    const onClick = () => {
      setTimeout(() => {
        history.push('/post/'+props.post.postID);
      }, "100")
    }

      return(
        
        <div>
          <div className={styles.mypost}>
          <div className={styles.mypostright}>
            <ImArrowUp
              className={
                props.post.upvoted_users.some((user) => user.username === window.localStorage.getItem("username")) ? styles.upvoteactive : styles.upvote
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
                props.post.downvoted_users.some((user) => user.username === window.localStorage.getItem("username")) ? styles.downvoteactive : styles.downvote
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
                  <p style={{textAlign:'left', marginRight:'auto'}}>{props.post.owner.username}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {props.post.labels && props.post.labels.map((label) => (
                    <p
                      style={{
                        borderRadius: "5px",
                        border: "1px solid lightgray",
                        padding: "3px 5px",
                        marginRight: "5px",
                        backgroundColor: "lightgoldenrodyellow",
                        fontSize: "small",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      {label.labelName}
                    </p>
                  ))}
                  <medium style={{ padding: "5px 5px", marginLeft: "15px"}}>
                    {DateFormatter(props.post.created_at_date, props.post.created_at_time)}
                  </medium>
                </div>
              </div>
            </div>
            <p style={{ textAlign: "left", fontWeight: "bolder" }}>
              {props.post.title}
            </p>{" "}
            <p style={{ textAlign: "left" }}>{props.post.description}</p>
          </div>
          <p style={{ textAlign: "right", position:'absolute', bottom:'0', right:'0' }}>{ props.post.comments && props.post.comments.length + (props.post.comments.length > 1 ? ' comments'  : ' comment')}</p>
        </div>
      </div>
      )}


const DateFormatter = (date, time) => {
  let x = date.split(".").reverse().join("-") + "T" + time.replaceAll(".", ":")
  return moment.utc(x).utcOffset(180).format("MMM DD YYYY hh:mm")
  
}

const Posts = () => {

  const [showPostCreate, setPostCreate] = useState(false)

  const isGuestUser = window.localStorage.getItem("auth_token") ? false : true

  const [posts, setPosts] = useState([]);
  const [voted, setVoted] = useState(false)

  useEffect(() => {
    getAllPosts().then(res => {
      setPosts(res);
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
          ></ForumPost> 
          )}
      </div> )
}

export default  Posts
