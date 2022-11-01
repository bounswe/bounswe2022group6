/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

export default class MessagesScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      calls: [
        {id:1,  name: "Vanessa Henry",    status:"active", image:"https://bootdey.com/img/Content/avatar/avatar3.png"},
        {id:2,  name: "Tammy Ramirez",   status:"last seen: today at 12:37", image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
        {id:3,  name: "Nathan Brown",  status:"last seen: Sat at 22:13", image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
        {id:4,  name: "Clara Oneill",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar8.png"} ,
        {id:5,  name: "Justin Welch",   status:"last seen: 21 Sep 2022", image:"https://bootdey.com/img/Content/avatar/avatar7.png"} ,
        {id:6,  name: "Anthony Fox", status:"last seen: yesterday at 21:44", image:"https://bootdey.com/img/Content/avatar/avatar2.png"} ,
        {id:8,  name: "Patrick Vang", status:"last seen: today at 13:05", image:"https://bootdey.com/img/Content/avatar/avatar1.png"} ,
        {id:9,  name: "Oscar Wilkerson",    status:"active", image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
      ]
    };
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.row}>
          <Image source={{ uri: item.image }} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
              <Text style={styles.mblTxt}></Text>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.status}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }} >
        <FlatList
          extraData={this.state}
          data={this.state.calls}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
    width: 170,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
});