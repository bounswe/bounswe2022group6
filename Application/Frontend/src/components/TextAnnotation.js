import React, { useEffect, useRef } from 'react'
import { Recogito } from '@recogito/recogito-js';
import '@recogito/recogito-js/dist/recogito.min.css';
import {createAnnotation, deleteAnnotation} from '../services/Annotation_API';

function TextAnnotation(props){
    const textRef = useRef()

    useEffect(() => {
      if(textRef.current){
        const recogito = new Recogito({ content: textRef.current, readOnly: props.isGuestUser})
        if(props.contentType === "comment") {
            console.log(props)
        }
        recogito.setAnnotations(props.annotations)

        //Event handlers
        recogito.on('createAnnotation', annotation => {
          createAnnotation('text', props.contentType, props.contentId, JSON.stringify(annotation))
        })
    
        recogito.on('deleteAnnotation', annotation => {
          deleteAnnotation(annotation.id, "text")
        })
    
        recogito.setAuthInfo({
          id: '1',
          displayName: window.localStorage.getItem("username")
        })
      }
    }, [])
    
  
    return (
      <div style={{wordWrap:'break-word'}}>
        <div ref= {textRef}>{props.text}</div>
      </div>
      )
}

export default TextAnnotation