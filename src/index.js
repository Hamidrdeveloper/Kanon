import React from 'react';
import Home from './screen/Home/Home';
import Making from './screen/MakingTest/making'
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import im_exam from '../assets/images/test.png';
import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
const bottomTab = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'آزمون سازی',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={im_exam}
          style={{width: 20, height: 20, color: tintColor}}
          tintColor={tintColor}
        />
      ),
    },
  },
  HoDebugging: {
    screen: Making,
    navigationOptions: {
        tabBarLabel: 'محصول ساز',
        tabBarIcon: ({tintColor}) => (
          <Image
            source={im_exam}
            style={{width: 20, height: 20, color: tintColor}}
            tintColor={tintColor}
          />
        ),
      },
  },
  CreatProduct: {
    screen: Home,
    navigationOptions: {
        tabBarLabel: 'رفع اشکال',
        tabBarIcon: ({tintColor}) => (
          <Image
            source={im_exam}
            style={{width: 20, height: 20, color: tintColor}}
            tintColor={tintColor}
          />
        ),
      },
  },
  CreatExm: {
    screen: Home,
    navigationOptions: {
        tabBarLabel: 'خانه',
        tabBarIcon: ({tintColor}) => (
          <Image
            source={im_exam}
            style={{width: 20, height: 20, color: tintColor}}
            tintColor={tintColor}
          />
        ),
      },
  },
},
);
const homeStack = createStackNavigator({
  exmBuild:{
    screen:Making
  },
  Home:{screen:bottomTab}

},{
  headerMode:'none'
})
export default createAppContainer(homeStack);
