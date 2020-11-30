import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {Text} from 'react-native'

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabFourParamList, TabOneParamList, TabThreeParamList, TabTwoParamList } from '../types';
import mockData from '../fetchRequests/feed'
import { UserType } from '../global';
import ProfilePicture from '../components/ProfileComponent';
import assets from '../constants/assets'
import GlobalState from "../contexts/GlobalState";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors.currentTheme.tabsColor,style:{backgroundColor:Colors.currentTheme.bottomNavBackgroundColor,borderWidth:0,borderTopColor: Colors.currentTheme.bottomNavBackgroundColor,} }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-search" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="TabThree"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-notifications-outline" color={color} />,
        }}
      />
        <BottomTab.Screen
        name="TabFour"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-mail" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  const [user,setUser] = React.useState<UserType>({
    name:"",
    username:"",
    profilePic:"", 
  });
  const [globalState,setGlobalState] = React.useContext(GlobalState);

  React.useEffect(() => {
    // get the current user
    const fetchUser = async () => {
     setUser({name:globalState.googleUser.name,username:globalState.discordUser.username,profilePic:globalState.googleUser.photoUrl})
    }
    fetchUser();
    console.log("Global" + JSON.stringify(globalState));
    console.log(user);
  }, [])

  React.useEffect(() => {
    console.log(user);
  }, [user])

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
        animationEnabled: false ,
        headerRightContainerStyle: {
          marginRight: 15,
        },
        headerLeftContainerStyle: {
          marginLeft: 15,
        },
        headerTitle:" ",
        headerLeft: () => (
           <ProfilePicture size={40} image={assets.acmLogo}/>
         // <Text style={{color:"white",fontFamily:"billabong",fontSize:32,letterSpacing:2,marginTop:25}}>Acm Internal</Text>
        ),
        headerRight: () => (
          <ProfilePicture size={40} image={user?.profilePic} />
        ),
        headerStyle:{
          backgroundColor:Colors.currentTheme.topHeaderBackground,
        }
      }}
      />
    </HomeStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{}}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{}}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="TabFourScreen"
        component={TabThreeScreen}
        options={{}}
      />
    </TabFourStack.Navigator>
  );
}
