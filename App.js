import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Home from "./screens/Home";
import News from "./screens/News";

const App = createDrawerNavigator(
  {
    "Home": {
      path: '/',
      screen: Home,
      navigationOptions: ({ navigation }) => {
        let id = navigation.state.id = 1234;
        return {
          id
          // params: {
          //   id: 123456,
          //   name: "blurgghhh"
          // }
        }
      }
    },
    "Latest News": {
      path: '/',
      screen: News,
      navigationOptions: ({ navigation }) => {
        let id = navigation.state.id = 1234;
        return {
          id
          // params: {
          //   id: 123456,
          //   name: "blurgghhh"
          // }
        }
      }
    },
    "Home3": {
      path: '/',
      screen: Home,
      navigationOptions: ({ navigation }) => {
        let id = navigation.state.id = 1234;
        return {
          id
          // params: {
          //   id: 123456,
          //   name: "blurgghhh"
          // }
        }
      }
    }
  },
  {
    initialRouteName: "Home",
    drawerPosition: 'left'

  }
);

export default createAppContainer(App);