import React from 'react'
import styles from "../pages/home.module.css";
import { useHistory } from "react-router-dom";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import contentvote from '../services/Vote_API';
import moment from 'moment'
import TextAnnotation from './TextAnnotation';
import delete_comment from '../services/Delete_comment_API';
import Button from 'react-bootstrap/Button'

const Comment = (props) => {

  let history = useHistory();

  const isGuestUser = window.localStorage.getItem("auth_token") ? false : true

    //backend endpoint for vote comment
    const vote = (direction) => {

        if(isGuestUser){
            alert("You need to be logged in")
            return
        }
        contentvote(props.comment.commentID, direction, false).then(() => props.onVote())
    };

    const handleDelete = () => {
      delete_comment(props.comment.commentID).then(() => props.onDelete())
  }

    return (
      <div style = {{marginTop: '8px'}}>
      <div className={styles.mycomment} style={{position:'relative'}}>
      <div className={styles.mypostright}
      >
        <ImArrowUp
          className={
            props.comment.upvoted_users.some((user) => user.username === window.localStorage.getItem("username")) ? styles.upvoteactive : styles.upvote
          }
          onClick={() => vote("up")}
        />
        <h3
          style={{
            padding: "7px 0px",
          }}
        >
          {props.comment["result_vote"]}
        </h3>
        <ImArrowDown
          className={
            props.comment.downvoted_users.some((user) => user.username === window.localStorage.getItem("username")) ? styles.downvoteactive : styles.downvote
          }
          onClick={() => vote("down")}
        />
      </div>

      <div style={{ width: "80%", margin: "auto" }}>
        <div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
              <p style={{textAlign:'left', marginRight:'auto', cursor:"pointer"}} onClick={()=>{history.push('/view_profile/'+props.comment.owner.username)}}> <u>{props.comment.owner.verified_as_doctor ? props.comment.owner.username +" 🩺" :props.comment.owner.username}</u></p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
            <medium style={{ padding: "5px 5px", marginLeft: "15px"}}>
                    {moment(props.comment.created_at).format('MMM DD YYYY h:mm a')}
                  </medium>
            </div>
          </div>
        </div>
        <div style={{heigth: "fit-content", textAlign:'left'}}>
          <p style={{ textAlign: "left", fontWeight: "bolder" }}>
          </p>{" "}
          <TextAnnotation
          text = {props.comment.description}
          annotations = {props.comment.text_annotations}
          isGuestUser = {isGuestUser}
          contentType = "comment"
          contentId = {props.comment.commentID}
          />
        </div>
      </div>
      {props.comment.owner.username === window.localStorage.getItem("username") &&
      <Button onClick={handleDelete} style={{width:"5%", marginLeft:'10px', position:'absolute', top:'10px', right:'0', backgroundColor:'red' }}>Delete</Button>
      }
    </div>
  </div>
      )
}

export default Comment