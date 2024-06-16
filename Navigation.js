import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerScreen from './DrawerScreen';

function Navigation() {
  return (
    <NavigationContainer>
      <DrawerScreen />
    </NavigationContainer>
  );
}

export default Navigation;
