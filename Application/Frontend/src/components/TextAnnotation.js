import React, { useEffect, useRef } from 'react'
import { Recogito } from '@recogito/recogito-js';
import '@recogito/recogito-js/dist/recogito.min.css';

const annotations = [{
    "@context": "http://www.w3.org/ns/anno.jsonld",
    "type": "Annotation",
    "body": [
        {
            "type": "TextualBody",
            "value": "text annotation",
            "purpose": "commenting",
            "creator": {
                "id": "1",
                "name": "tollen"
            },
            "created": "2022-12-23T14:48:30.744Z",
            "modified": "2022-12-23T14:48:38.590Z"
        }
    ],
    "target": {
        "selector": [
            {
                "type": "TextQuoteSelector",
                "exact": "Annotations"
            },
            {
                "type": "TextPositionSelector",
                "start": 14,
                "end": 25
            }
        ]
    },
    "id": "#5519fef0-7376-4630-96f8-4b6407419c13"
}]

function TextAnnotation(props){
    const textRef = useRef()
  
    useEffect(() => {
      if(textRef.current){
        const recogito = new Recogito({ content: textRef.current})
    
        recogito.setAnnotations(annotations)

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