import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import LoadingDisplay from './LoadingDisplay';

const options = {
    selectionLimit: 1
};

function S3StorageUpload({ setPhotoUrl }) {

    let photo = "";
    let url = ""

    const [loading, setLoading] = useState(false);

    const openPicker = async () => {
        setLoading(true)
        await launchImageLibrary(options, (response) => {
            photo = response.assets[0]
        });

        await sendPicture()

    }

    const sendPicture = async () => {
        var formdata = new FormData();
        formdata.append("key", "00002649a409accae5c195b75ab1d39f");
        formdata.append("media", {
            name: photo.fileName,
            type: photo.type,
            uri: Platform.OS === 'ios' ?
                photo.uri.replace('file://', '')
                : photo.uri,
        });

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        await fetch("https://thumbsnap.com/api/upload", requestOptions)
            .then(response => response.text())
            .then(result => { url = JSON.parse(result).data.media; console.log("****", JSON.parse(result).data.media); setLoading(false); setPhotoUrl("https://thumbsnap.com/i/NNL4NH3k.jpg") })
            .catch(error => console.log('error', error));

        setLoading(false)
    }
    return (
        <View>
            {loading ? <LoadingDisplay /> :
                <Button color="#0f7375" onPress={openPicker} title="Open image picker"></Button>
            }
        </View>
    )
}

export default S3StorageUpload; 