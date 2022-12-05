import {useState} from "react"
import React from "react";
import styles from "../pages/home.module.css";
import { UploadToS3 } from 'react-upload-to-s3'
import create_post from "../services/Create_Post_API"

const bucket_name = process.env.REACT_APP_S3_BUCKET_NAME
const aws_region = process.env.REACT_APP_AWS_REGION
const aws_key = process.env.REACT_APP_AWS_KEY
const aws_secret = process.env.REACT_APP_AWS_SECRET


const CreatePostForm = (props) => {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        type: "",
        imageURL: ""
    })
    
    //create post endpoint
    const handleSubmit = (event) => {
        event.preventDefault();
        create_post(formData)
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

    const photoUpload = (result) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                ["imageURL"]: result["url"]
            }
        })
    }

    return (
        <div> 
            <form style = {formStyle} onSubmit={handleSubmit}>
                <div style={{textAlign: 'left'}}>
                    <h3 style={{color:"#0f7375"}}><strong>Title</strong></h3>
                    <input style={{width: '100%', background:"lightgoldenrodyellow"}} type="text" name="title" value={formData.title} onChange={handleChange} required />
                    <br/><br/>
                    <h3 style={{color:"#0f7375"}}><strong>Description</strong></h3>
                    <textarea style= {{overflow:'hidden', width: '100%', background:"lightgoldenrodyellow" }} name="description" value={formData.description} onChange={handleChange}></textarea>
                    <br/><br/>
                    <h3 style={{color:"#0f7375"}}><strong>Post Type</strong></h3>
                    <select name='type' value = {formData.type} onChange = {handleChange} style={{background:"lightgoldenrodyellow", fontSize:"1.5rem", borderRadius:"5px"}} required>
                        <option value="i" >Information </option>
                        <option value="q">Question</option> 
                        <option value="a">Advice</option>
                        <option value="e">Experience</option>
                    </select>
                    <br/><br/>
                    <h3 style={{color:"#0f7375"}}><strong>Attach Image</strong></h3>
                    <UploadToS3 
                        bucket={bucket_name}
                        awsRegion={aws_region}
                        awsKey={aws_key}
                        awsSecret={aws_secret}
                        type="image"
                        mediaConvertRole="mediaconvert_role"
                        showNewUpload={false}
                        onResult={photoUpload} />
                </div>
                <br/>
                <div class="buttons text-center">
                        <button className={styles.createpostbutton} style={{marginRight:"100px"}} onClick={props.onCancel}> Cancel</button>
                        <button className={styles.createpostbutton} type="submit"> Create </button>
                </div>
                
            </form>
            
        </div>
    )

}

const formStyle = {
    backgroundColor: "#dde296",
    width: "98%",
    heigth: "50%",
    border: "1p",
    borderColor: "#0f7375",
    borderRadius: "5px"
}

export default CreatePostForm