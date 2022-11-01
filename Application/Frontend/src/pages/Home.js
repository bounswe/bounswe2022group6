import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import logout from "../services/Logout_API";
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import MessageBox from "../components/MessageBox";

const posts = [
  {
    name: "Mehmet Ali",
    date: "5",
    description:
      "Hi I’m 23F, last night I was drinking parol and probably had 4 parol drinks total. This is not out of the ordinary for me. I was feeling good and then all of a sudden I was having muscle...",
      score: "11",
      labels: ["Bones/Joints/Ligaments", "Question","Help"],
  },
  {
    name: "Fatih",
    date: "12",
    description:
      "I am 17 and a week ago I almost passed out because I got up from bed too quickly, 2 days ago I had bright blood in stool, yesterday I had the same but with more blood... ",
      score: "6",
      labels: ["Digestion/Stomach/Bowels", "Question","Help"],
  },
  {
    name: "Fatma",
    date: "20",
    description:
      "I took parol pills  Hello everyone. I took parol pills at midnight and it’s like 6am. I’m not even tired. Why am I not tired?I’ve just lost touch with reality... ",
      score: "3",
      labels: ["Other"],
  },
  {
    name: "Mert",
    date: "40",
    description:
      "Overtaking 45mg Mirtazapine for 6 months straight So I have been prescribed 1 45mg Mirtazapine a night I am 22 now, for the last 6 months I have been taking 3 of ...      ",
      score: "3",
      labels: ["Medication", "Question","Help"],
  },
  {
    name: "İhsan ",
    date: "50",
    description:
      "Misdiagnosed tennis elbow?So i've had this lingering elbow ache/soreness/discomort for around 3 months and a few weeks back I finally decided to get it checked out.  ...",
      score: "2",
      labels: ["Bones/Joints/Ligaments", "Question","Help"],
  },
  {
    name: "Murat",
    date: "55",
    description:
      "Odd eye spasm when trying to sleep  this has been happening to me for years and I don’t think it’s anything serious it’s just odd. I cant find anything g online either! when ...    ",
      score: "1",
      labels: ["Eyes", "Question","Help"],
  },
  {
    name: "Berk",
    date: "59",
    description:
      "Still have a have a fever 2 weeks after recovering from possible scarlet fever..please help (23M) Hey so on October 15th I woke up with a 105° fever and all symptoms of covid I remember ... ",
      score: "-1",
      labels: ["Other"],
  },
];

export default function Home() {

  let history = useHistory()

  const [isLoggedout, setLoggedout] = useState(false)

  function handleClick(event) {
    event.preventDefault()
    logout().then(res => {
        if (res === null) {
            setLoggedout(true)
            setTimeout(() => {
                history.push('/');
            }, "1500")

        }
    })
  }

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
      <div> {isLoggedout && <MessageBox data="Logout Successful!" style={{ color: "#222", fontSize: "2.5rem", textTransform: "capitalize" }}> </MessageBox>}
            </div>
      <div style={{ display: "flex" }}>
        <div
          className="posts"
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
              <div style={{ width: "10%", backgroundColor: "#f0feff" }}>
                <h1>+</h1> <h3>1</h3> <h1>-</h1>
              </div>

              <div style={{ width: "80%", margin: "auto" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>{post.name}</p>{" "}
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {post.labels.map((label) => (
                      <p
                        style={{
                          borderRadius: "5px",
                          border: "1px solid lightgray",
                          padding: "3px 5px",
                          marginRight: "5px",
                          backgroundColor: "lightgoldenrodyellow",
                        }}
                      >
                        {label}
                      </p>
                    ))}

                    <small style={{ marginLeft: "15px" }}>
                      {post.date + " minute before"}
                    </small>
                  </div>
                </div>

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
