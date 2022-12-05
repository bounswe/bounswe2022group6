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

const bucket_name = process.env.REACT_APP_S3_BUCKET_NAME
const aws_region = process.env.REACT_APP_AWS_REGION
const aws_key = process.env.REACT_APP_AWS_KEY
const aws_secret = process.env.REACT_APP_AWS_SECRET

const animatedComponents = makeAnimated();
const options = []


const CreatePostForm = (props) => {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        type: "",
        imageURL: "",
        labels: [],
        isNSFW: false
    })

    const [postCreated, setPostCreated] = useState(false);
    
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
                    <h3 style={{color:"#0f7375", marginTop:-15}}><strong>Title</strong></h3>
                    <input style={{width: '100%', background:"lightgoldenrodyellow"}} type="text" name="title" value={formData.title} onChange={handleChange} required />
                    <br/>
                    <h3 style={{color:"#0f7375", marginTop:"5"}}><strong>Description</strong></h3>
                    <textarea style= {{overflow:'hidden', width: '100%', background:"lightgoldenrodyellow" }} name="description" value={formData.description} onChange={handleChange}></textarea>
                    <br/>
                    <h3 style={{color:"#0f7375", marginTop:"5"}}><strong>Post Type</strong></h3>
                    <select name='type' value = {formData.type} onChange = {handleChange} style={{background:"lightgoldenrodyellow", fontSize:"1.5rem", borderRadius:"5px"}} required>
                        <option value="i" >Information </option>
                        <option value="q">Question</option> 
                        <option value="a">Advice</option>
                        <option value="e">Experience</option>
                    </select>
                    <br/><br/>
                    <h3 style={{color:"#0f7375"}}><strong>Labels</strong></h3>
                    <Select 
                        onChange = {handleChange}
                        isMulti
                        name="labels"
                        components={animatedComponents}
                        options={options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                    <br/>
                    {postCreated &&  <div class="buttons text-center"> 
                    <MessageBox data = "Post Created Successfully" style = {{color: "#0f7375", fontSize: "2.5rem"}}> </MessageBox>
                    </div>}
                    <br/>
                    <h3 style={{color:"#0f7375"}}><strong>Attach Image <a style={{ marginLeft: '30rem' }}>Is NSFW?</a></strong></h3>
                    <div style={{display: "inline-flex"}}>
                        <div>
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
                        <div style={{marginLeft:"22.5rem"}}>
                            <input style={{transform:"scale(2.5)"}} type="checkbox" name="isNSFW" checked={formData.isNSFW} onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="buttons text-center">
                        <button className={styles.createpostbutton} style={{marginRight:"100px"}} onClick={props.onCancel}> Cancel</button>
                        <button className={styles.createpostbutton} type="submit"> Create </button>
                </div>
                
            </Form>
            
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