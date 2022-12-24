import React, { useEffect, useRef } from 'react'
import { Recogito } from '@recogito/recogito-js';
import '@recogito/recogito-js/dist/recogito.min.css';


function TextAnnotation(props){
    const textRef = useRef()
    useEffect(() => {
      if(textRef.current){
        const recogito = new Recogito({ content: textRef.current, readOnly: props.isGuestUser})
    
        recogito.setAnnotations(props.annotations)

        //Event handlers
        recogito.on('createAnnotation', annotation => {
          //backend endpoint
          console.log('annotation created', JSON.stringify(annotation))
        })
    
        recogito.on('deleteAnnotation', annotation => {
          //backend endpoint
          console.log("annotation deleted", annotation)
        })
    
        recogito.setAuthInfo({
          id: '1',
          displayName: window.localStorage.getItem("username")
        })
      }
    }, [])
    
  
    return (
      <div>
        <div ref= {textRef}>{props.text}</div>
      </div>
      )
}

export default TextAnnotation