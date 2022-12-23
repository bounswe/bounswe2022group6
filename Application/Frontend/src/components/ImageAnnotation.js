import { useEffect, useRef, useState } from 'react';
import { Annotorious } from '@recogito/annotorious';

import '@recogito/annotorious/dist/annotorious.min.css';

const annotations = [{
    "@context": "http://www.w3.org/ns/anno.jsonld",
    "type": "Annotation",
    "body": [
        {
            "type": "TextualBody",
            "value": "image annotation",
            "purpose": "commenting",
            "creator": {
                "id": 1,
                "name": "tollen"
            },
            "created": "2022-12-23T14:55:40.253Z",
            "modified": "2022-12-23T14:55:41.743Z"
        }
    ],
    "target": {
        "source": "https://myuploads-medishare38.s3.amazonaws.com/image_1671788232333.png",
        "selector": {
            "type": "FragmentSelector",
            "conformsTo": "http://www.w3.org/TR/media-frags/",
            "value": "xywh=pixel:68,76,194,196"
        }
    },
    "id": "#48d7b458-fead-45af-b317-db2d9ddf4c38"
}]


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
        image: imgEl.current
      });

      annotorious.setAnnotations(annotations)

      // Attach event handlers here
      annotorious.on('createAnnotation', annotation => {
        console.log('created', JSON.stringify(annotation));
      });

      annotorious.on('deleteAnnotation', annotation => {
        console.log('deleted', annotation);
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