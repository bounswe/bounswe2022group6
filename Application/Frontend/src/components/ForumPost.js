import React, { useEffect,useReducer } from 'react'
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import {useState} from "react"
import {useHistory, Link} from 'react-router-dom'
import styles from "../pages/home.module.css";
import CreatePostForm from "./CreatePostForm";
import contentvote from '../services/Vote_API';
import moment from 'moment'

const ForumPost = (props) => {
  const isGuestUser = window.localStorage.getItem("auth_token") ? false : true
  const isDoctor = props.post.owner.verified_as_doctor ? true : false
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
              {props.post.result_vote}
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
                  <p style={{textAlign:'left', marginRight:'auto'}}>{isDoctor ? props.post.owner.username +" 🩺" : props.post.owner.username}</p>
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
                        backgroundColor: label.labelColor,
                        color: 'white'
                      }}
                    >
                      {label.labelName}
                    </p>
                  ))}
                  <medium style={{ padding: "5px 5px", marginLeft: "15px"}}>
                  {moment(props.post.created_at).format('MMM DD YYYY h:mm a')}
                  </medium>
                </div>
              </div>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end", marginTop:"-1.4rem"}}>
              <medium style={{ padding: "5px 5px", marginLeft: "15px"}}>
                {props.post["location"] ? props.post["location"].replaceAll("/","  -  ") : "-"}
              </medium>
            </div>
            <p style={{ textAlign: "left", fontWeight: "bolder" ,marginTop:"-1rem"}}>
              {props.post.title}
            </p>{" "}
            <p style={{ textAlign: "left" }}>{props.post.description}</p>
          </div>
          <p style={{ textAlign: "right", position:'absolute', bottom:'0', right:'0' }}>{ props.post.comment_count >= 0 && props.post.comment_count + ' comment' + (props.post.comment_count > 1 ? 's' : '')}</p>
        </div>
      </div>
      )}

const Posts = (props) => {

  const [showPostCreate, setPostCreate] = useState(false)

  const isGuestUser = window.localStorage.getItem("auth_token") ? false : true


  

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
          {props.posts && (props.posts).map((post) => 
          <ForumPost
          post= {post}
          onVote = {() => props.setVoted(!props.voted)}
          ></ForumPost> 
          )}
      </div>)
}

export default  Posts
