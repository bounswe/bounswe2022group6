import { AsyncStorage } from 'react-native';
import { handleLogoutRequest } from './authAPI';
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
    
    return fetch(BACKEND_URL +"/contmgr/post", requestOptions)
      .then(response => response.text())
      .then(result => result)
      .catch(error => console.log('error', error));
}