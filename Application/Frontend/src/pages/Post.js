import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import logout from "../services/Logout_API";
import { useParams } from 'react-router-dom';
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import Comment from '../components/Comment';
import '../App.css'
import getPost from "../services/Post_API";
import contentvote from '../services/Vote_API';


const Post = () => {
    const id = useParams()?.postId

    let history = useHistory();
    const[post, setPost] = useState()
    const isGuestUser = window.localStorage.getItem("auth_token") ? false : true
    const [isLoggedout, setLoggedout] = useState(false);
    const [voted, setVoted] = useState(false)

    //send request to backend for post details.
    useEffect(() => {
      getPost(id).then(res => {
        console.log(res)
        setPost(res);
      });
    }, [voted]);

    //backend endpoint
    const vote = (direction) => {
      if(isGuestUser){
          alert("You need to be logged in")
          return
      }
      console.log("voting post")
      contentvote(id, direction, true).then(() => setVoted(!voted))
    };


    function handleClick(event) {
        event.preventDefault();
        logout().then((res) => {
          if (res === null) {
            setLoggedout(true);
            setTimeout(() => {
              history.push("/");
            }, "500");
          }
        });
      }

    return (
      <div>
      <Link to="/home">
    <button className={styles.mybutton} style = {{position: "absolute", top: "20px", right: "245px"}}>home</button>
    </Link>
        {
 isGuestUser ? 
    <div>
    <Link to="/login">
    <button className={styles.mybutton}>log in</button>
    </Link>
    <Link to="/register">
    <button 
    className={styles.mybutton}
    style = {{position: "absolute", top: "20px", right: "5px"}}
    >register</button>
    </Link>
    </div> 
    : 
    <div><Link to="/profile">
    <button className={styles.mybutton}>Profile</button>
  </Link>
  <Link to="/">
    <button
      className={styles.mybutton}
      style={{ position: "absolute", top: "20px", right: "5px" }}
      onClick={handleClick}
    >
      Log out
    </button>
  </Link>
  </div>
  }
  <h5 className="main-title home-page-title">MEDI SHARE</h5>
  {post && <div>
      <div className={styles.mypostpage}>
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
            post.voted === "up" ? styles.upvoteactive : styles.upvote
          }
          onClick={() => vote('up')}
        />
        <h3
          style={{
            padding: "7px 0px",
          }}
        >
          {post.vote_count}
        </h3>
        <ImArrowDown
          className={
            post.voted === "down"
              ? styles.downvoteactive
              : styles.downvote
          }
          onClick={() => vote('down')}
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {post.labels && post["labels"].map((label) => (
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
              ))}

              <small style={{ padding: "3px 5px", marginLeft: "15px" }}>
                {post["created_at"] + " minute before"}
              </small>
            </div>
          </div>
        </div>
        <div style={{heigth: "fit-content"}}>
          <p style={{ textAlign: "left", fontWeight: "bolder" }}>
            {post["title"]}
          </p>{" "}
          <p style={{ textAlign: "left" }}>{post["description"]}</p>
        </div>
      </div>
    </div>
  </div> }
  {post &&
  <div>
  {post.comments && post["comments"].map((comment) =>
  <Comment
  comment = {comment}
  onVote = {() => setVoted(!voted)}
  ></Comment>
  )}
  </div>
}
</div>         
    )
}

export default Post
