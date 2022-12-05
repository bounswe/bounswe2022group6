import React from 'react'
import styles from "../pages/home.module.css";
import { useState } from "react";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import contentvote from '../services/Vote_API';
import moment from 'moment'

const Comment = (props) => {

  const isGuestUser = window.localStorage.getItem("auth_token") ? false : true

    //backend endpoint for vote comment
    const vote = (direction) => {

        if(isGuestUser){
            alert("You need to be logged in")
            return
        }
        console.log("voting comment")
        //change hardcoded 1
        contentvote(props.comment.commentID, direction, false).then(() => props.onVote())
    };

    return (
      <div style = {{marginTop: '8px'}}>
      <div className={styles.mycomment}>
      <div className={styles.mypostright}
      >
        <ImArrowUp
          className={
            props.comment.upvoted_users.includes(window.localStorage.getItem("username")) ? styles.upvoteactive : styles.upvote
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
            props.comment.downvoted_users.includes(window.localStorage.getItem("username")) ? styles.downvoteactive : styles.downvote
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
              <p style={{textAlign:'left', marginRight:'auto'}}>{props.comment.owner}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
            <medium style={{ padding: "5px 5px", marginLeft: "15px"}}>
                    {moment(props.comment.created_at).format('MMM DD YYYY hh:mm')}
                  </medium>
            </div>
          </div>
        </div>
        <div style={{heigth: "fit-content"}}>
          <p style={{ textAlign: "left", fontWeight: "bolder" }}>
            {props.comment["author"]}
          </p>{" "}
          <p style={{ textAlign: "left" }}>{props.comment["description"]}</p>
        </div>
      </div>
    </div>
  </div>
      )
}

export default Comment