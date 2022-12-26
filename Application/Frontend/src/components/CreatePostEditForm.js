import {useState, useEffect} from "react"
import React from "react";
import styles from "../pages/home.module.css";
import { UploadToS3 } from 'react-upload-to-s3'
import create_post from "../services/Create_Post_API"
import get_labels from "../services/Label_API"
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import MessageBox from './MessageBox'
import Form from "react-bootstrap/Form"
import editPost from '../services/EditPost_API';

const bucket_name = process.env.REACT_APP_S3_BUCKET_NAME
const aws_region = process.env.REACT_APP_AWS_REGION
const aws_key = process.env.REACT_APP_AWS_KEY
const aws_secret = process.env.REACT_APP_AWS_SECRET

const animatedComponents = makeAnimated();
const options = []


const CreatePostEditForm = (props) => {

    const [formData, setFormData] = useState({
        title: props.title,
        description: props.description,
        type: props.type,
        imageURL: "",
        labels: [],
        isNSFW: props.isNSFW
    })

    const [postCreated, setPostCreated] = useState(false);
    const [isSuccessfull, setSuccessfull] = useState(false)
    
    const handleSubmit = (event) => {
        event.preventDefault();
        create_post(formData).then(res => {
            if (res === null) {
                setPostCreated(true)
                setTimeout(() => {
                    window.location.reload();
                }, "1000")
            }
        })
    }

    const handleChange = (event) => {
        // If label event
        if (event.type === undefined) {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    ["labels"]: event
                }
            })
        } else {
            if (event.target.name === "isNSFW"){
                setFormData(prevFormData => {
                    return {
                        ...prevFormData,
                        ["isNSFW"]: !prevFormData["isNSFW"]
                    }
                })
            } else {
                const { name, value } = event.target
                setFormData(prevFormData => {
                    return {
                        ...prevFormData,
                        [name]: value
                    }
                })
            }
        }
    }
    const handleEdit2 = event => {
        event.preventDefault();
        editPost(formData,props.id).then(
            res => {
                
                if(res===null){
                    setSuccessfull(true)
                }else {
                    setSuccessfull(false)
                }
            }
        )
    }

    const photoUpload = (result) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                ["imageURL"]: result["url"]
            }
        })
    }

    useEffect( ()=>   {
        get_labels().then(res=> {
            for (let index = 0; index < res["labels"].length; index++) {
                options[index] = {
                    value: res["labels"][index]["labelID"],
                    label: res["labels"][index]["labelName"]
                }
            }
        })
    }, []);



    return (
        <div> 
            <Form style = {formStyle} onSubmit={handleSubmit}>
                <div style={{textAlign: 'left'}}>
                    <h4 style={{color:"#0f7375", marginTop:-15}}><strong>Title</strong></h4>
                    <input style={{width: '100%', background:"lightgoldenrodyellow"}} type="text" name="title" defaultValue={props.title} onChange={handleChange} required />
                    <br/>
                    <h4 style={{color:"#0f7375", marginTop:"5"}}><strong>Description</strong></h4>
                    <textarea style= {{overflow:'hidden', width: '100%', background:"lightgoldenrodyellow" }} name="description" defaultValue={props.description} onChange={handleChange}></textarea>
                    <br/>
                    
                    
                </div>
                <br/>
                <div class="buttons text-center">
                        <button className={styles.createpostbutton} style={{marginRight:"100px"}} onClick={props.onCancel}> Cancel</button>
                        <button className={styles.createpostbutton} type="submit" onClick={handleEdit2}> Edit </button>
                </div>
                
            </Form>
            
        </div>
    )

}

const formStyle = {
    backgroundColor: "#dde296",
    width: "80%",
    heigth: "10%",
    border: "1p",
    borderColor: "#0f7375",
    borderRadius: "5px"
}

export default CreatePostEditForm