import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import logout from "../services/Logout_API";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import MessageBox from "../components/MessageBox";
import  Posts from "../components/ForumPost";
import { BsSearch, BsFilter } from "react-icons/bs";
import { FiDelete } from "react-icons/fi";

//used as mock data get post details from backend
const posts = [
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

const labels = [
  { name: "Medication", backgroundColor: "red", color: "white" },
  { name: "Other", backgroundColor: "Black", color: "white" },
  { name: "Article", backgroundColor: "Blue", color: "white" },
  { name: "Healthy Life", backgroundColor: "Green", color: "yellow" },
  { name: "Wound Care", backgroundColor: "yellow", color: "black" },
  { name: "Injury", backgroundColor: "lightblue", color: "black" },
  { name: "Mental Health", backgroundColor: "gray", color: "white" },
  { name: "Parasite Concern", backgroundColor: "orange", color: "white" },
  { name: "Rabies Concern", backgroundColor: "purple", color: "white" },
  { name: "Pregnancy", backgroundColor: "lightgreen", color: "white" },
  {
    name: "Skin issues/Rashes/Freckles/Moles",
    backgroundColor: "darkgray",
    color: "white",
  },
  { name: "Cardiac", backgroundColor: "darkgreen", color: "white" },
  {
    name: "Mouth/Gums/Throat/Cheeks",
    backgroundColor: "Salmon",
    color: "white",
  },
  { name: "Eyes", backgroundColor: "Lime", color: "white" },
  { name: "Illness", backgroundColor: "pink", color: "indigo" },
  { name: "Digestion/Stomach/Bowels", backgroundColor: "teal", color: "white" },
  {
    name: "Bones/Joints/Ligaments",
    backgroundColor: "SkyBlue",
    color: "white",
  },
  { name: "Help", backgroundColor: "palegreen", color: "white" },
  { name: "Advice", backgroundColor: "PaleTurquoise", color: "white" },
];


export default function Home() {
  let history = useHistory();

  const isGuestUser = window.localStorage.getItem("auth_token") ? true : false

  const [isLoggedout, setLoggedout] = useState(false);
  const [dummy, setdummy] = useState(0);
  const [addedlabels, setaddedlabels] = useState([]);

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

  const addlabel = (label) => {
    if (addedlabels.indexOf(label) < 0) {
      addedlabels.push(label);
      setdummy(dummy + 1);
    }
  };



  const clearfilters = () => {
    setaddedlabels([]);
  };
  const removeLabel = (mylabel) => {
    const index = addedlabels.indexOf(mylabel);
    if (index > -1) {
      // only splice array when item is found
      addedlabels.splice(index, 1); // 2nd parameter means remove one item only
      setdummy(dummy + 1);
    }
  };

  return (
    <div className="text-center">
     {
     isGuestUser ? <div>
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
      </Link></div>
      }
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
        <Posts
        posts = {posts}
        >  
        </Posts>
        <div
          className="rightSide"
          style={{ width: "30%", height: "700px", backgroundColor: "" }}
        >
          <div
            className="searchBar"
            style={{
              backgroundColor: "white",
              marginBlockEnd: "20px",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              borderRadius: "5px",
            }}
          >
            <input
              type="text"
              placeholder="Search For Post.."
              style={{
                border: "1px solid gray",
                width: "60%",
                height: "40px",
                fontSize: "19px",
                borderRadius: "5px 0px 0px 5px",
              }}
            />
            <BsSearch
              className={styles.BsSearch}
              style={{
                border: "1px solid gray",
                height: "40px",
                borderLeft: "0px",
                padding: "0px 3px",
                width: "25px",
                borderRadius: "0px 5px 5px 0px",
              }}
            />
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>Sort By</button>
              <div className={styles.dropdowncontent}>
                <p href="#">Time</p>
                <p href="#">Rating</p>
                <p href="#">Relevance</p>
              </div>
            </div>
          </div>

          <div
            className="labelsSide"
            style={{
              display: "inline-block",
              padding: "10px",
              backgroundColor: "white",
              width: "100%",
              borderRadius: "5px",
            }}
          >
            <h3
              style={{
                display: "flex",
                alignContent: "left",
                color: "#383838",
              }}
            >
              Labels
            </h3>
            <input
              type="text"
              placeholder="Search For Label.."
              style={{
                border: "1px solid gray",
                marginBlockEnd: "5px",
                width: "100%",
              }}
            />
            <div
              style={{
                height: "100px",
                overflow: "auto",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {labels.map((label) => (
                <div onClick={() => addlabel(label)}>
                  <p
                    className={styles.filter}
                    style={{
                      background: label.backgroundColor,
                      color: label.color,
                      display: "inline-block",
                      padding: "2px 10px",
                      borderRadius: "5px",
                      margin: "2px",
                    }}
                  >
                    {" "}
                    {label.name}
                  </p>
                </div>
              ))}
            </div>
            <hr style={{ margin: "5px" }} />
            <div style={{ textAlign: "left" }}>
              {addedlabels.length === 0 && (
                <div style={{ fontStyle: "italic", color: "gray" }}>
                  {" "}
                  add label to filter
                </div>
              )}
              {addedlabels.length > 0 && (
                <div style={{ color: "gray" }}>Added Labels</div>
              )}

              {addedlabels.map((label) => (
                <div
                  className={styles.filter}
                  style={{ display: "flex0,justify-content: space-between;" }}
                  onClick={() => removeLabel(label)}
                >
                  <p
                    style={{
                      background: label.backgroundColor,
                      color: label.color,
                      display: "block",
                      padding: "2px 10px",
                      borderRadius: "5px",
                      margin: "2px",
                      float: "left",
                    }}
                  >
                    {label.name}
                    <small
                      style={{
                        fontSize: "11px",
                        alignItems: "center",
                        filter: "brightness(1.3)",
                        background: label.backgroundColor,
                        borderRadius: "10px",
                        padding: "0px 3px",
                        position: "relative",
                        bottom: "3px",
                        left: "5px",
                      }}
                    >
                      x
                    </small>
                  </p>
                </div>
              ))}
              <div style={{ float: "right", display: "flex" }}>
                <div
                  className={styles.filter}
                  style={{
                    background: "palegreen",
                    color: "#333333",
                    border: "1px solid gray",
                    padding: "2px 10px",
                    borderRadius: "5px",
                    margin: " 3px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "larger",
                  }}
                >
                  Filter <BsFilter />
                </div>
                <div
                  className={styles.filter}
                  style={{
                    background: "PaleTurquoise",
                    border: "1px solid gray",
                    color: "#333333",
                    padding: "2px 10px",
                    borderRadius: "5px",
                    margin: " 3px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "larger",
                  }}
                  onClick={clearfilters}
                >
                  Clear
                  <FiDelete />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
