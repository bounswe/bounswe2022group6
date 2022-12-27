import AsyncStorage from '@react-native-async-storage/async-storage';
import {BACKEND_URL} from '@env'

export const handleCreatePost = async ( title, type, description, location, imageUrl, is_marked_nsfw ) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token " + await AsyncStorage.getItem("token"));
    
    var formdata = new FormData();
    formdata.append("title", title);
    formdata.append("type", type);
    formdata.append("description", description);
    formdata.append("location", location);
    formdata.append("imageURL", imageUrl);
    formdata.append("is_marked_nsfw", is_marked_nsfw);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    

    console.log(BACKEND_URL)

    return fetch(BACKEND_URL +"contmgr/post", requestOptions)
      .then(response => response.text())
      .then(result => result)
      .catch(error => console.log('error', error));
}

export const editPostRequest = async (changedData, postID) => {
  // Add token to header
  const token = await AsyncStorage.getItem("token")
  var myHeaders = new Headers()
  myHeaders.append("Authorization", "Token " + token);

  var formdata = new FormData(); // Form data (required for POST method)

  // Append each property of changedData to formdata
  Object.keys(changedData).forEach((key) => {
      formdata.append(key, (changedData[key]))
  });

  // Request options (POST request)
  const requestOptions = {
      method: 'PUT',
      body: formdata,
      headers: myHeaders,
  };
  
  // Send request
  try {
      const response = await fetch(BACKEND_URL + "contmgr/post?id=" + postID, requestOptions)
      const json = await response.json()
      return json
  } catch (error) {
      console.log("Error: ", error)
  }
}