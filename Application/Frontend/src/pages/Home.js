import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import logout from "../services/Logout_API";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import MessageBox from "../components/MessageBox";
import { ImArrowUp, ImArrowDown } from "react-icons/im";

const posts = [
  {
    title:
      "Hi I’m 23F, last night I was drinking parol ",
    date: "5",
    description:
      "Hi I’m 23F, last night I was drinking parol and probably had 4 parol drinks total. This is not out of the ordinary for me. I was feeling good and then all of a sudden I was having muscle...",
    score: "11",
    labels: ["Bones/Joints/Ligaments", "Question", "Help"],
    voted: "",
  },
  {
    title: "Fatih",
    date: "12",
    description:
      "I am 17 and a week ago I almost passed out because I got up from bed too quickly, 2 days ago I had bright blood in stool, yesterday I had the same but with more blood... ",
    score: "6",
    labels: ["Digestion/Stomach/Bowels", "Question", "Help"],
    voted: "",
  },
  {
    title: "Fatma",
    date: "20",
    description:
      "I took parol pills  Hello everyone. I took parol pills at midnight and it’s like 6am. I’m not even tired. Why am I not tired?I’ve just lost touch with reality... ",
    score: "3",
    labels: ["Other"],
    voted: "",
  },
  {
    title: "Mert",
    date: "40",
    description:
      "Overtaking 45mg Mirtazapine for 6 months straight So I have been prescribed 1 45mg Mirtazapine a night I am 22 now, for the last 6 months I have been taking 3 of ...      ",
    score: "3",
    labels: ["Medication", "Question", "Help"],
    voted: "",
  },
  {
    title: "İhsan ",
    date: "50",
    description:
      "Misdiagnosed tennis elbow?So i've had this lingering elbow ache/soreness/discomort for around 3 months and a few weeks back I finally decided to get it checked out.  ...",
    score: "2",
    labels: ["Bones/Joints/Ligaments", "Question", "Help"],
    voted: "",
  },
  {
    title: "Murat",
    date: "55",
    description:
      "Odd eye spasm when trying to sleep  this has been happening to me for years and I don’t think it’s anything serious it’s just odd. I cant find anything g online either! when ...    ",
    score: "1",
    labels: ["Eyes", "Question", "Help"],
    voted: "",
  },
  {
    title: "Berk",
    date: "59",
    description:
      "Still have a have a fever 2 weeks after recovering from possible scarlet fever..please help (23M) Hey so on October 15th I woke up with a 105° fever and all symptoms of covid I remember ... ",
    score: "-1",
    labels: ["Other"],
    voted: "",
  },
];

export default function Home() {
  let history = useHistory();

  const [isLoggedout, setLoggedout] = useState(false);
  const [mert, setMert] = useState(0);

  function handleClick(event) {
    event.preventDefault();
    logout().then((res) => {
      if (res === null) {
        setLoggedout(true);
        setTimeout(() => {
          history.push("/");
        }, "1500");
      }
    });
  }
  const vote = (mypost, direction) => {
    if (mypost.voted === "" && direction === "up") {
      mypost.voted = "up";
      mypost.score++;
    } else if (mypost.voted === "up" && direction === "up") {
      mypost.voted = "";
      mypost.score--;
    } else if (mypost.voted === "down" && direction === "up") {
      mypost.voted = "up";
      mypost.score++;
      mypost.score++;
    } else if (mypost.voted === "" && direction === "down") {
      mypost.voted = "down";
      mypost.score--;
    } else if (mypost.voted === "up" && direction === "down") {
      mypost.voted = "down";
      mypost.score--;
      mypost.score--;
    } else if (mypost.voted === "down" && direction === "down") {
      mypost.voted = "";
      mypost.score++;
    }
    setMert(mert + 1);
    console.log(mypost.voted);
  };

  return (
    <div className="text-center">
      <Link to="/profile">
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
      <h5 className="main-title home-page-title">MEDI SHARE</h5>
      <div>
        {" "}
        {isLoggedout && (
          <MessageBox
            data="Logout Successful!"
            style={{
              color: "#222",
              fontSize: "2.5rem",
              textTransform: "capitalize",
            }}
          >
            {" "}
          </MessageBox>
        )}
      </div>

      <div style={{ display: "flex" }}>
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
          {posts.map((post) => (
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
                    post.voted === "up" ? styles.upvoteactive : styles.upvote
                  }
                  onClick={() => vote(post, "up")}
                />
                <h3
                  style={{
                    padding: "7px 0px",
                  }}
                >
                  {post.score}
                </h3>
                <ImArrowDown
                  className={
                    post.voted === "down"
                      ? styles.downvoteactive
                      : styles.downvote
                  }
                  onClick={() => vote(post, "down")}
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
                      {post.labels.map((label) => (
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
                        {post.date + " minute before"}
                      </small>
                    </div>
                  </div>
                </div>
                <p style={{ textAlign: "left", fontWeight: "bolder" }}>
                  {post.title}
                </p>{" "}
                <p style={{ textAlign: "left" }}>{post.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{ width: "30%", height: "700px", backgroundColor: "white" }}
        >
          <h3>Search + Filters + Create Post </h3>
        </div>
      </div>
    </div>
  );
}
