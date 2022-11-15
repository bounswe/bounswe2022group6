import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeFeed from "./HomeFeed";
import HomeHeader from "./HomeHeader";
import PostDetails from "../post/PostDetails";
import CreatePost from "../post/CreatePost";
import Chatbot from "./Chatbot";

const HomeFeedStack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <HomeFeedStack.Navigator initialRouteName='Home Feed'>
      <HomeFeedStack.Screen
        name='Home Feed'
        component={HomeFeed}
        options={{
          header: (props) => <HomeHeader {...props} />
        }}
      />
      <HomeFeedStack.Screen
        name='Post Details'
        component={PostDetails}
        options={{
          headerTitle: 'Post Details',
          animation: 'slide_from_right',
        }}
      />
      <HomeFeedStack.Screen
        name='Create Post'
        component={CreatePost}
        options={{
          headerTitle: 'Create New Post',
          animation: 'fade_from_bottom',
        }}
      />
      <HomeFeedStack.Screen
        name='Chatbot'
        component={Chatbot}
        options={{
          headerTitle: 'Chatbot',
          animation: 'slide_from_right',
        }}
      />
    </HomeFeedStack.Navigator>
  );
};

export default HomeScreen;