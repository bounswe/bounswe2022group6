import React from 'react'

import { useState, useEffect } from 'react'
    
const MessageBox = (props) => {
  const [show, setShow] = useState(true)

  // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShow(false)
    }, 3000)

    return () => {
      clearTimeout(timeId)
    }
  }, []);

  // If show is false the component will return null and stop here
  if (!show) {
    return null;
  }

  // If show is true this will be returned
  return (
    <div> <p style ={props.style}>{props.data}</p></div>
  )
}

MessageBox.defaultPros = {
  variant: 'info',
}


export default MessageBox