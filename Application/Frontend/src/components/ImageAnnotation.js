import { useEffect, useRef, useState } from 'react';
import { Annotorious } from '@recogito/annotorious';
import '@recogito/annotorious/dist/annotorious.min.css';
import {createAnnotation, deleteAnnotation} from '../services/Annotation_API';



function ImageAnnotation(props) {

  // Ref to the image DOM element
  const imgEl = useRef();

  // The current Annotorious instance
  const [ anno, setAnno ] = useState();

  // Init Annotorious when the component
  // mounts, and keep the current 'anno'
  // instance in the application state
  useEffect(() => {
    let annotorious = null;

    if (imgEl.current) {
      // Init
      annotorious = new Annotorious({
        image: imgEl.current,
        readOnly: props.isGuestUser
      });

      annotorious.setAnnotations(props.annotations)

      // Attach event handlers here
      annotorious.on('createAnnotation', annotation => {
        console.log('created', JSON.stringify(annotation))
        createAnnotation('image', props.contentType, props.contentId, JSON.stringify(annotation))
      });

      annotorious.on('deleteAnnotation', annotation => {
        console.log('deleted', annotation);
        deleteAnnotation(annotation.id, "image")
      });

      annotorious.setAuthInfo({
        id:1,
        displayName: window.localStorage.getItem('username')
      })

    }

    // Keep current Annotorious instance in state
    setAnno(annotorious);

    // Cleanup: destroy current instance
    return () => annotorious.destroy();
  }, []);

  return (
    <div>
      <img 
        width='100%'
        height='100%'
        ref={imgEl} 
        src={props.source}
        alt="Hallstatt Town Square" />
    </div>
  );
}

export default ImageAnnotation;