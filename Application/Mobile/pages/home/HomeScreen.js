import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeFeed from "./HomeFeed";
import HomeHeader from "./HomeHeader";
import PostDetails from "../post/PostDetails";
import CreatePost from "../post/CreatePost";
import Chatbot from "./Chatbot";
import SearchScreenHeader from "../search/SearchScreenHeader";
import SearchScreen from "../search/SearchScreen";
import EditPost from "../post/EditPost";
import Post_ChatbotHeader from "./BasicHeader";

const HomeFeedStack = createNativeStackNavigator();

const HomeScreen = (props) => {
  return (
    <HomeFeedStack.Navigator initialRouteName='Home Feed' screenOptions={{header: (props2) => <Post_ChatbotHeader {...props2}/>}}>
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
        initialParams={{...props.route.params}}
      />
      {props.route.params.username &&
        <HomeFeedStack.Screen
          name='Create Post'
          component={CreatePost}
          options={{
            headerTitle: 'Create New Post',
            animation: 'fade_from_bottom',
          }}
        />
      }
      <HomeFeedStack.Screen
        name='Chatbot'
        component={Chatbot}
        options={{
          headerTitle: 'Chatbot',
          animation: 'slide_from_right',
        }}
      />
      <HomeFeedStack.Screen
        name='Search'
        component={SearchScreen}
        options={{
          headerTitle: 'Search',
          animation: 'fade',
          header: (props) => <SearchScreenHeader {...props} />
        }}
        initialParams={{
          searchQuery: null,
          filtersVisible: false,
          filters: null
        }}
      />
      <HomeFeedStack.Screen
        name='Edit Post'
        component={EditPost}
        options={{
          headerTitle: 'Edit Post',
          animation: 'slide_from_right',
        }}
      />
    </HomeFeedStack.Navigator>
  );
};

export default HomeScreen;