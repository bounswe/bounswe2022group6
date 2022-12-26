import {useState, useEffect} from "react"
import React from "react";
import styles from "../pages/home.module.css";
import create_post from "../services/Create_Post_API"
import makeAnimated from 'react-select/animated';
import MessageBox from './MessageBox'
import Form from "react-bootstrap/Form"
import editPost from '../services/EditPost_API';

const animatedComponents = makeAnimated();
const options = []


const CreatePostEditForm = (props) => {

    const [formData, setFormData] = useState({
        title: props.title,
        description: props.description,
    })

    const [isSuccessfull, setSuccessfull] = useState(false)

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
                const { name, value } = event.target
                setFormData(prevFormData => {
                    return {
                        ...prevFormData,
                        [name]: value
                    }
                })
            }
        }
    
    const handleEdit2 = event => {
        event.preventDefault();
        editPost(formData,props.id).then(
            res => {
                if(res===null){
                    setSuccessfull(true)
                    props.onCancel()
                }else {
                    setSuccessfull(false)
                }
            }
        )
    }

    return (
        <div> 
            <Form style = {formStyle}>
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