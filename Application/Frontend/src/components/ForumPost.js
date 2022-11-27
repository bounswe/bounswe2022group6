import { ImArrowUp, ImArrowDown } from "react-icons/im";
import {useState} from "react"
import {useHistory} from 'react-router-dom'
import styles from "../pages/home.module.css";
import CreatePostForm from "./CreatePostForm";

const ForumPost = (props) => {

    const isGuestUser = window.localStorage.getItem("auth_token") ? true : false
    const [score, setScore] = useState(props.score);
    let history = useHistory()

    //instead of this use backend endpoint
    const vote = (direction) => {
        if(isGuestUser){
            alert("You need to be logged in")
            return
        }

        if (props.voted === "" && direction === "up") {
            props.voted = "up";
            props.score++;
        } else if (props.voted === "up" && direction === "up") {
            props.voted = "";
            props.score--;
        } else if (props.voted === "down" && direction === "up") {
            props.voted = "up";
            props.score++;
            props.score++;
        } else if (props.voted === "" && direction === "down") {
            props.voted = "down";
            props.score--;
        } else if (props.voted === "up" && direction === "down") {
            props.voted = "down";
            props.score--;
            props.score--;
        } else if (props.voted === "down" && direction === "down") {
            props.voted = "";
            props.score++;
        }
        setScore(props.score);
        console.log(props.voted);
      };

    const onClick = () => {
      setTimeout(() => {
        history.push('/post/'+props.id);
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
                props.voted === "up" ? styles.upvoteactive : styles.upvote
              }
              onClick={() => vote("up")}
            />
            <h3
              style={{
                padding: "7px 0px",
              }}
            >
              {props.score}
            </h3>
            <ImArrowDown
              className={
                props.voted === "down"
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
                  {props.labels.map((label) => (
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
                    {props.date + " minute before"}
                  </small>
                </div>
              </div>
            </div>
            <p style={{ textAlign: "left", fontWeight: "bolder" }}>
              {props.title}
            </p>{" "}
            <p style={{ textAlign: "left" }}>{props.description}</p>
          </div>
        </div>
      </div>
      )
}

const Posts = (props) => {
    return (
    <div
        className="mypost"
        style={{
          width: "40%",
          marginLeft: "15%",
          marginRight: "3%",
          height: "700px",
          overflow: "auto",
        }}
      >
        {props.showPostCreateForm && <CreatePostForm></CreatePostForm>}
        {props.posts.map((post) => ForumPost(post))}
        
      </div>)
}


export default  Posts