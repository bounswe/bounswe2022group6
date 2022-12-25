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
import get_location from "../services/Location_API";

const bucket_name = process.env.REACT_APP_S3_BUCKET_NAME
const aws_region = process.env.REACT_APP_AWS_REGION
const aws_key = process.env.REACT_APP_AWS_KEY
const aws_secret = process.env.REACT_APP_AWS_SECRET

const animatedComponents = makeAnimated();
const options = []
var countries = []
var states = []
var cities = []
var locationIndex = null


const CreatePostForm = (props) => {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        type: "",
        imageURL: "",
        labels: [],
        country: "",
        state: "",
        city: "",
        isNSFW: false
    })

    const [postCreated, setPostCreated] = useState(false);
    // Dropdown was not able to use the data in formData so I created states instead.
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    
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
        // If label or location event
        if (event.type === undefined) {
            // If label event
            if (Number.isInteger(event.length)){
                setFormData(prevFormData => {
                    return {
                        ...prevFormData,
                        ["labels"]: event
                    }
                })
            } else{
                // If country
                if (locationIndex === 0){
                    setFormData(prevFormData => {
                        return {
                            ...prevFormData,
                            ["country"]: event["value"]
                        }
                    });
                    states = []
                    cities = []
                    setSelectedState(null)
                    setSelectedCity(null)
                    get_location(event["value"],"").then(res=> {
                        for (let index = 0; index < res.length; index++) {
                            states[index] = {
                                value: res[index],
                                label: res[index]
                            }
                        }
                    })
                  // If state
                } else if (locationIndex === 1){
                    setFormData(prevFormData => {
                        return {
                            ...prevFormData,
                            ["state"]: event["value"]
                        }
                    });
                    cities = []
                    setSelectedCity(null)
                    get_location(formData.country,event["value"]).then(res=> {
                        for (let index = 0; index < res.length; index++) {
                            cities[index] = {
                                value: res[index],
                                label: res[index]
                            }
                        }
                    })
                  // If city
                } else if (locationIndex === 2){
                    setFormData(prevFormData => {
                        return {
                            ...prevFormData,
                            ["city"]: event["value"]
                        }
                    });
                  // Error
                } else{
                    return
                }
            }
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

    useEffect( ()=>   {
        get_location().then(res=> {
            for (let index = 0; index < res.length; index++) {
                countries[index] = {
                    value: res[index],
                    label: res[index]
                }
            }
        })
    }, []);


    return (
        <div> 
            <Form style = {formStyle} onSubmit={handleSubmit}>
                <div style={{textAlign: 'left'}}>
                    <div style={{marginTop:"-1.5rem"}}>
                        <h3 style={{color:"#0f7375", display:"inline"}}><strong>Title</strong></h3>
                        <h3 style={{color:"#0f7375", display:"inline", marginLeft:"47.6rem"}}><strong>Post Type</strong></h3> 
                    </div>
                    <input style={{width: '70%', background:"lightgoldenrodyellow", marginTop:"-1.5rem", display:"inline"}} type="text" name="title" value={formData.title} onChange={handleChange} required />
                    <select name='type' value = {formData.type} onChange = {handleChange} style={{background:"lightgoldenrodyellow", fontSize:"1.5rem", borderRadius:"5px", marginTop:"0.2rem", marginLeft:"5rem", display:"inline"}} required>
                        <option value="i">Information </option>
                        <option value="q">Question</option> 
                        <option value="a">Advice</option>
                        <option value="e">Experience</option>
                    </select>
                    <h3 style={{color:"#0f7375", marginTop:"0.4rem"}}><strong>Description</strong></h3>
                    <textarea style= {{overflow:'hidden', width: '100%', background:"lightgoldenrodyellow", marginTop:"-0.4rem"}} name="description" value={formData.description} onChange={handleChange}></textarea>
                    <br/>
                    
                    <h3 style={{color:"#0f7375", marginTop:"5"}}><strong>Location</strong></h3>
    
                    <Select 
                        name='country' 
                        placeholder="Please select a country"
                        value = {selectedCountry} 
                        onChange = {(e) => { locationIndex=0; setSelectedCountry(e); handleChange(e)}} 
                        options = {countries} 
                        style={{background:"lightgoldenrodyellow", fontSize:"1.5rem", marginLeft:"1.5rem", marginTop:"0.6rem", borderRadius:"5px"}} 
                    />

                    <Select 
                        name='state' 
                        placeholder="Please select a country first"
                        value = {selectedState} 
                        onChange = {(e) => { locationIndex=1; setSelectedState(e) ;handleChange(e)}} 
                        options = {states} 
                        style={{background:"lightgoldenrodyellow", fontSize:"1.5rem", marginLeft:"1.5rem", marginTop:"0.6rem", borderRadius:"5px"}} 
                    />

                    <Select 
                        name='city' 
                        placeholder="Please select a country and a State/Province first"
                        value = {selectedCity} 
                        onChange = {(e) => { locationIndex=2; setSelectedCity(e); handleChange(e)}} 
                        options = {cities} 
                        style={{background:"lightgoldenrodyellow", fontSize:"1.5rem", marginLeft:"1.5rem", marginTop:"0.6rem", borderRadius:"5px"}} 
                    />

                    <br/>
                    <h3 style={{color:"#0f7375", marginTop:"-1rem"}}><strong>Labels</strong></h3>
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
                    <h3 style={{color:"#0f7375", marginTop:"-2.3rem"}}><strong>Attach Image <a style={{ marginLeft: '30rem' }}>Is NSFW?</a></strong></h3>
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
                        <div style={{marginLeft:"22rem"}}>
                            <input style={{transform:"scale(2.5)"}} type="checkbox" name="isNSFW" checked={formData.isNSFW} onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="buttons text-center">
                        <button className={styles.createpostbutton} style={{marginRight:"100px", marginTop:"-2.2rem"}} onClick={(e)=>{ cities=[];states=[]; props.onCancel(e);}}> Cancel</button>
                        <button className={styles.createpostbutton} style={{marginTop:"-2.2rem"}} type="submit"> Create </button>
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