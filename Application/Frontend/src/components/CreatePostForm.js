import {useState} from "react"

const CreatePostForm = (props) => {
    
    //create post endpoint
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
    }
    //modify as what backend needs
    const [formData, setFormData] = useState({
        title: "",
        description: "",
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (
        <div> 
            <form style = {formStyle} onSubmit={handleSubmit}>
                <div style={{textAlign: 'left'}}>
                    <label><strong>Title</strong></label>
                    <input style={{width: '100%'}} type="text" name="title" value={formData.title} onChange={handleChange} required />
                    <br/><br/>
                    <label><strong>Description</strong></label>
                    <textarea style= {{overflow:'hidden', width: '100%' }} name="description" value={formData.description} onChange={handleChange}></textarea>
                </div>
                <div class="buttons text-center">
                        <button class="primary-button" style={{width: '30%'}} onClick={props.onCancel}> <span>Cancel </span></button>
                        <button class="primary-button" style={{width: '30%'}}> <span>Create  </span></button>
                </div>
                
            </form>
            
        </div>
    )

}

const formStyle = {
    width: "98%",
    heigth: "50%"
}

export default CreatePostForm