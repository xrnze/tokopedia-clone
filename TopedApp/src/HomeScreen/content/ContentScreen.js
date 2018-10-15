import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, ScrollableTab, Content } from 'native-base';
import {createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation';

import HomeContent from './ContentList/HomeContent';
import FeedContent from './ContentList/FeedContent';
import FavoritContent from './ContentList/FavoritContent';
import HotListContent from './ContentList/HotListContent';

const ContentScreen = createMaterialTopTabNavigator({
  Home: HomeContent ,
  Feed: FeedContent,
  Favorit: FavoritContent,
  HotList:{
    screen: HotListContent,
    navigationOptions:{
      title: 'Hot List'
    }
  }
},{
  tabBarOptions: {
    style: {
      backgroundColor: '#42b549',
    },
    indicatorStyle:{
      backgroundColor: 'white',
    }
  }
})

export default ContentScreen;