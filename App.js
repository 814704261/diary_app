import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen'
import checkUpdate from './src/utils/checkUpdate'

// 路由
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

//组件
import HomeScreen from './src/pages/home';
import StatisticalScreen from './src/pages/statistical';
import ProfileScreen from './src/pages/profile';
import EditScreen from "./src/pages/edit";
import DiaryDetailScreen from "./src/pages/diaryDetail";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { RootSiblingParent } from 'react-native-root-siblings';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default class App extends Component{

  componentDidMount(){
    SplashScreen.hide() //关闭启动屏幕
    // checkUpdate()       //检查更新
  }

  render() {
    return (
        <RootSiblingParent>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Tabs"
                            component={MyTabs}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Edit"
                            component={EditScreen}
                            options={{headerShown: false}}
                        />
                        <Stack.Screen
                            name="DiaryDetail"
                            component={DiaryDetailScreen}
                            options={{headerShown: false}}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </RootSiblingParent>
    )
  }
}


function MyTabs() {
  return (
      <Tab.Navigator
          initialRouteName="Home"
          backBehavior="initialRoute"
          shifting={true}
          activeColor="#ffffff"
          inactiveColor="#999999"
      >
          <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                  tabBarLabel:"首页",
                  tabBarIcon:({focused, color})=>{
                      return <MaterialCommunityIcons name="home" color={color} size={26} />
                  },
                  tabBarColor:"#03A9F4"
              }}
          />
          <Tab.Screen
              name="Statistical"
              component={StatisticalScreen}
              options={{
                  tabBarLabel:"统计分析",
                  tabBarIcon:({focused, color})=>{
                      return <MaterialCommunityIcons name="chart-line" color={color} size={26} />
                  },
                  tabBarColor:"#E91E63"
              }}
          />
          <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                  tabBarLabel: "个人中心",
                  tabBarIcon:({focused, color})=>{
                      return <MaterialCommunityIcons name="account-circle-outline" color={color} size={26} />
                  },
                  tabBarColor:"#7C4DFF"
              }}
          />
      </Tab.Navigator>
  );
}