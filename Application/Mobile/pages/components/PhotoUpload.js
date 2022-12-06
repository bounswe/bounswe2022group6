import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const options = {
    selectionLimit: 1
};

function S3StorageUpload({ setPhotoUrl }) {


    let photo = "";
    let url = ""
    const openPicker = async () => {
        await launchImageLibrary(options, (response) => {
            photo = response.assets ? response.assets[0] : null
        });
        if (photo) {

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

            fetch("https://thumbsnap.com/api/upload", requestOptions)
                .then(response => response.text())
                .then(result => { url = JSON.parse(result).data.media; setPhotoUrl(JSON.parse(result).data.media) })
                .catch(error => console.log('error', error));

        }
    }
    return (
        <View  >
            <Button color="#0f7375" onPress={openPicker} title="Open image picker"></Button>
            {url && <Image
                source={{ uri: url }}
                style={{ height: 50, width: 50 }} />}
        </View>
    )
}

export default S3StorageUpload; 