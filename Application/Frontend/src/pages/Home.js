import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import logout from "../services/Logout_API";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import MessageBox from "../components/MessageBox";
import  Posts from "../components/ForumPost";
import { BsSearch, BsFilter } from "react-icons/bs";
import { FiDelete } from "react-icons/fi";
import Logo from '../assets/fav.png'
import Image from 'react-bootstrap/Image'
import get_labels from "../services/Label_API";
import ChatbotIcon from '../assets/chatbot-icon.png';
import ChatBotForm from '../components/ChatBotForm';
import search_post from "../services/Search_API";
import {getAllPosts} from "../services/Post_API";

// const labels = [
//   { name: "Medication", backgroundColor: "red", color: "white" },
//   { name: "Other", backgroundColor: "Black", color: "white" },
//   { name: "Article", backgroundColor: "Blue", color: "white" },
//   { name: "Healthy Life", backgroundColor: "Green", color: "yellow" },
//   { name: "Wound Care", backgroundColor: "yellow", color: "black" },
//   { name: "Injury", backgroundColor: "lightblue", color: "black" },
//   { name: "Mental Health", backgroundColor: "gray", color: "white" },
//   { name: "Parasite Concern", backgroundColor: "orange", color: "white" },
//   { name: "Rabies Concern", backgroundColor: "purple", color: "white" },
//   { name: "Pregnancy", backgroundColor: "lightgreen", color: "white" },
//   {
//     name: "Skin issues/Rashes/Freckles/Moles",
//     backgroundColor: "darkgray",
//     color: "white",
//   },
//   { name: "Cardiac", backgroundColor: "darkgreen", color: "white" },
//   {
//     name: "Mouth/Gums/Throat/Cheeks",
//     backgroundColor: "Salmon",
//     color: "white",
//   },
//   { name: "Eyes", backgroundColor: "Lime", color: "white" },
//   { name: "Illness", backgroundColor: "pink", color: "indigo" },
//   { name: "Digestion/Stomach/Bowels", backgroundColor: "teal", color: "white" },
//   {
//     name: "Bones/Joints/Ligaments",
//     backgroundColor: "SkyBlue",
//     color: "white",
//   },
//   { name: "Help", backgroundColor: "palegreen", color: "white" },
//   { name: "Advice", backgroundColor: "PaleTurquoise", color: "white" },
// ];


export default function Home() {
  let history = useHistory();

  let isGuestUser = window.localStorage.getItem("auth_token") ? false : true
  const [isLoggedout, setLoggedout] = useState(false);
  const [dummy, setdummy] = useState(0);
  const [addedlabels, setaddedlabels] = useState([]);
  const [labels, setLabels] = useState([])
  const [showChatbot, setShowChatbot] = useState(false)

  const [posts, setPosts] = useState([]);
  const [voted, setVoted] = useState(false)

  useEffect(() => {
    getAllPosts().then(res => {
      console.log(res)
      setPosts(res);
    });
  }, [voted]);


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

  useEffect(() => {
    get_labels().then(res => {
      console.log(res.labels)
      setLabels(res.labels);
    });
  }, []);

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

  const openChatbot = () => {
    setShowChatbot(!showChatbot)
  }

  return (
    <div className={styles.body} >
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
      
      <h5 className="main-title home-page-title" style={{textShadow: "1px 1px #000000 "}}>
      <Image src={Logo} style={{width:"70px"}}></Image>
        <span style={{color:"#dde296"}}>Medi</span><span style={{color:"#9FcFb0"}}>Share</span></h5>
      
      <div>
        {" "}
        {isLoggedout && (
          <MessageBox
            data="Logout Successful!"
            style={{color: "#c2cd23", fontSize: "2rem"}}
          >
            {" "}
          </MessageBox>
        )}
      </div>

      <div style={{ display: "flex" }}>
        <Posts posts={posts} setPosts={setPosts} voted={voted} setVoted={setVoted}>
        </Posts>
        <div
          className="rightSide"
          style={{ width: "30%", height: "700px", backgroundColor: "" }}
        >
          <div
            className="searchBar"
            style={{
              backgroundColor: "#dde296",
              marginTop:"15px",
              marginBlockEnd: "20px",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              borderRadius: "5px",

            }}
          >
            <input
              type="text"
              id="searchtext"
              placeholder="Search For Post.."
              style={{
                border: "1px solid gray",
                width: "90%",
                height: "40px",
                fontSize: "19px",
                borderRadius: "5px 0px 0px 5px",
                background:"lightgoldenrodyellow"
              }}
            />
            <BsSearch
              className={styles.BsSearch}
              onClick={()=>{
                search_post(document.getElementById('searchtext').value).then(res =>{
                  setPosts(res["posts"]);
                })
              }}
              style={{
                border: "1px solid gray",
                height: "40px",
                borderLeft: "0px",
                padding: "0px 3px",
                width: "10%",
                borderRadius: "0px 5px 5px 0px",
              }}
            />
          </div>

          {!showChatbot &&    <div
            className={styles.labelsSide}
          >
            <h3
              style={{
                display: "flex",
                alignContent: "left",
              }}
            >
              Labels
            </h3>
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
                      background: label.labelColor,
                      color: 'white',
                      display: "inline-block",
                      padding: "2px 10px",
                      borderRadius: "5px",
                      margin: "2px",
                    }}
                  >
                    {" "}
                    {label.labelName}
                  </p>
                </div>
              ))}
            </div>
            <hr style={{ margin: "5px" }} />
            <div style={{ textAlign: "left" }}>
              {addedlabels.length === 0 && (
                <div style={{ fontStyle: "italic",opacity:"0.5"  }}>
                  {" "}
                  add label to filter
                </div>
              )}
              {addedlabels.length > 0 && (
                <div style={{ }}>Added Labels</div>
              )}

              {addedlabels.map((label) => (
                <div
                  className={styles.filter}
                  style={{ display: "flex0,justify-content: space-between;" }}
                  onClick={() => removeLabel(label)}
                >
                  <p
                    style={{
                      background: label.labelColor,
                      color: 'white',
                      display: "block",
                      padding: "2px 10px",
                      borderRadius: "5px",
                      margin: "2px",
                      float: "left",
                    }}
                  >
                    {label.labelName}
                    <small
                      style={{
                        fontSize: "11px",
                        alignItems: "center",
                        filter: "brightness(1.3)",
                        background: label.labelColor,
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
                    background: "#95c3b3",
                    color: "#0f7375",
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
                    background: "#95c3b3",
                    border: "1px solid gray",
                    color: "#0f7375",
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
          </div>}
          {showChatbot && <ChatBotForm></ChatBotForm>}
          <div style={{display:'flex', alignItems:'center', background:'#dde296', marginTop:"10px", borderRadius: '5px', color:"#0f7375" , fontSize:'0.8vw'}}>
            <p>Have a question? Ask our ChatBot</p>
            <Image src={ChatbotIcon} onClick = {openChatbot} style={{width:"70px", marginLeft:'150px' }}></Image>
          </div>
          
        </div>
      </div>
    </div>
  );
}
