import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

/*const postStyle ={
        backgroundColor: "white",
        width: "98%",
        margin: "auto",
        height: "150px",
        marginBlockEnd: "20px",
        display: "flex",
        borderRadius: "5px",
        border: "1px solid lightgray",
        overflow: "hidden",
       
  };*/

const posts = [
  {
    name: "mert",
    date: "10",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface ",
    labels: ["Article", "Post", "Advice"],
  },
  {
    name: "mert",
    date: "10",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface ",
    labels: ["Article", "Post", "Advice"],
  },
  {
    name: "mert",
    date: "10",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface ",
    labels: ["Article", "Post", "Advice"],
  },
  {
    name: "mert",
    date: "10",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface ",
    labels: ["Article", "Post", "Advice"],
  },
  {
    name: "mert",
    date: "10",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface ",
    labels: ["Article", "Post", "Advice"],
  },
  {
    name: "mert",
    date: "10",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface ",
    labels: ["Article", "Post", "Advice"],
  },
  {
    name: "mert",
    date: "10",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface ",
    labels: ["Article", "Post", "Advice"],
  },
];

export default function Home() {
  return (
    <div className="text-center">

        <Link to="/login">
        <button
          className={styles.mybutton}
        >
          Profile
        </button>
      </Link>
      <Link to="/">
        <button
          className={styles.mybutton}
          style={{ position: "absolute", top: "20px", right: "5px" }}
        >
          Log out
        </button>
      </Link>
      <h5 className="main-title home-page-title">MEDI SHARE</h5>

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
