import React from 'react'
import {useState} from "react"


const MessageBox = (props) => {

return (
    <div> <p style ={props.style}>{props.data}</p></div>
)
}

export default MessageBox