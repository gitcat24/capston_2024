// StackScreen.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ChatScreen from './main';
import PhoneBook from './PhoneBook';
import Profile from './Profile';
import Ser from './server';
import RQ20 from './RQ20';
import Sign from './SignUp';
import info from './MyInfo';
import LogIn from './Login';
import DeleteAccount from './DeleteAccount';

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen name="main" component={ChatScreen} />
        <Stack.Screen name="PB" component={PhoneBook} />
        <Stack.Screen name="PF" component={Profile} />
        <Stack.Screen name="server" component={Ser} />
        <Stack.Screen name="RQ20" component={RQ20} />
        <Stack.Screen name="SignUp" component={Sign} />
        <Stack.Screen name="Myinfo" component={info} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Delete_A" component={DeleteAccount} />
    </Stack.Navigator>
  );
}

export default StackScreen;
