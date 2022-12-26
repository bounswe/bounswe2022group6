import React, { useEffect} from 'react'
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import logout from "../services/Logout_API";
import { useParams } from 'react-router-dom';
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import Button from 'react-bootstrap/Button'
import Comment from '../components/Comment';
import '../App.css'
import getPostById from "../services/Post_API";
import contentvote from '../services/Vote_API';
import Logo from '../assets/fav.png'
import Image from 'react-bootstrap/Image'
import moment from 'moment'
import createComment from '../services/Create_Comment_API';
import editPost from '../services/EditProfile_API';
import CreatePostEditForm from "../components/CreatePostEditForm";
import TextAnnotation from '../components/TextAnnotation';
import ImageAnnotation from '../components/ImageAnnotation';

const Post = () => {
    const id = useParams()?.postId

    let history = useHistory();
    const[post, setPost] = useState()
    const isGuestUser = window.localStorage.getItem("auth_token") ? false : true
    const [isLoggedout, setLoggedout] = useState(false);
    const [voted, setVoted] = useState(false)
    const [flag, setFlag] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState(
      { 
        description: "",
      }
    )
    const [showPostEdit, setPostEdit] = useState(false)

    //send request to backend for post details.
    useEffect(() => {
      getPostById(id).then(res => {
        console.log(res)
        setPost(res);
      });
    }, [voted, submitted, showPostEdit]);

    useEffect(() => {
      window.localStorage.removeItem('show_nsfw')
    },[])

    const handleNSFW = () => {
      window.localStorage.setItem("show_nsfw", true)
      setFlag(!flag)
    }

    const handleSubmit = event => {
      console.log('creating comment')
      if(formData.description !== '') {
        createComment(formData, id).then(() => {
          setSubmitted(!submitted)
          setFormData({description:''})
        }
        )
      }
    }

    const handleChange = (event) => {
      const { name, value } = event.target
      setFormData(prevFormData => {
          return {
              ...prevFormData,
              [name]: value
          }
      })
  }

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
    const handleEdit = () => {
        setPostEdit(!showPostEdit)
    }
    return (
      <div className= {styles.body}>
          <Link to="/home">
        <button className={styles.mybutton} style = {{position: "absolute", top: "20px", right: "245px"}}>home</button>
        </Link>
          {isGuestUser ?  <div>
          <Link to="/login">
          <button className={styles.mybutton}>log in</button>
          </Link>
          <Link to="/register">
          <button 
          className={styles.mybutton}
          style = {{position: "absolute", top: "20px", right: "5px"}}
          >register</button>
          </Link></div> 
          : 
          <div>
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
          </div>}
        <h5 className="main-title home-page-title" style={{textShadow: "1px 1px #000000 "}}>
        <Image src={Logo} style={{width:"70px"}}></Image>
        <span style={{color:"#dde296"}}>Medi</span><span style={{color:"#9FcFb0"}}>Share</span></h5>  
        {post && <div>
      <div className={styles.mypostpage}>
          <div className={styles.mypostright} >
            <ImArrowUp
              className={
                post.upvoted_users.some((user) => user.username === window.localStorage.getItem("username")) ? styles.upvoteactive : styles.upvote
              }
              onClick={() => vote('up')}
            />
            <h3
              style={{
                padding: "7px 0px",
              }}
            >
              {post.result_vote}
            </h3>
            <ImArrowDown
              className={
                post.downvoted_users.some((user) => user.username === window.localStorage.getItem("username")) ? styles.downvoteactive : styles.downvote
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
            <p style={{textAlign:'left', marginRight:'auto'}}>{post.owner.verified_as_doctor ? post.owner.username +" 🩺" :post.owner.username}</p>
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
                    backgroundColor: label.labelColor,
                    color: 'white',
                    fontSize: "medium",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  {label.labelName}
                </p>
              ))}
                <medium style={{ padding: "5px 5px", marginLeft: "15px"}}>
                    {moment(post.created_at).format('MMM DD YYYY h:mm a')}
                  </medium>
                 

            </div>
          </div>
        </div>



        <div style={{display: "flex", justifyContent: "flex-end", marginTop:"-1.4rem"}}>
            <medium style={{ padding: "5px 5px", marginLeft: "15px"}}>
              {post["location"] ? post["location"].replaceAll("/","  -  ") : <br/>}
            </medium>
          </div>

        <div style={{heigth: "fit-content", textAlign:"left"}}>
          <div>
            <p style={{ fontWeight: "bolder", display:"inline"}}>
              {post["title"]}
            </p>
          </div>
          <br/>
          <TextAnnotation
          text = {post.description}
          annotations = {post.text_annotations}
          isGuestUser = {isGuestUser}
          contentType = "post"
          contentId = {post.postID}
          />

        </div>
        { post.imageURL && 
          <div style={{ position:'relative' }}>
            <div style={{ filter: !window.localStorage.getItem("show_nsfw") && post.is_marked_nsfw ? 'blur(25px)' : '' }}>
              <ImageAnnotation 
              source = {"https://" + post.imageURL} 
              annotations = {post.image_annotations}
              isGuestUser = {isGuestUser}
              contentType = "post"
              contentId = {post.postID}
              ></ImageAnnotation>
            </div>
          { !window.localStorage.getItem("show_nsfw")  && post.is_marked_nsfw &&
          <button className={styles.mybutton} onClick = {handleNSFW} style={{position:'absolute', top: '50%', left:'50%', transform:'translate(-50%, -50%)'}}> 
          See NSFW content
          </button>}
        </div>
        }
        
      </div>
      {post.owner.username === window.localStorage.getItem("username") && <Button onClick={handleEdit}style={{width:"50px", marginLeft:'10px' }}>Edit</Button>}
    </div>
   
  </div> }
   
  {showPostEdit && post.owner.username === window.localStorage.getItem("username") && <CreatePostEditForm id={post["postID"]}  description={post["description"]} title={post["title"]} onCancel = {() => setPostEdit(false)}> </CreatePostEditForm>}
  {post &&
  <div>
  {post.comments && post["comments"].map((comment) =>
  <Comment
  comment = {comment}
  onVote = {() => setVoted(!voted)}
  ></Comment>
  )}
    <br/>
  </div>
}


  {!isGuestUser &&
  <div className={styles.mypostpage} style= {{width:'72%', marginLeft:'18%'}}>
   <input type='text' style= {{overflow:'hidden', width: '100%' }} name="description" placeholder= 'Type your comment' value={formData.description} onChange={handleChange}></input>

  <Button className={styles.createcomment} type = 'button' onClick={handleSubmit}>Comment</Button>
  </div>
}
<br/><br/><br/>
</div>         
    )
}

export default Post
