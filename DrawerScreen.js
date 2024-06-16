import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import StackScreen from './StackScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function DrawerScreen() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerLeft: () => (
          <Pressable
            style={styles.drawerButton}
            onPress={props.navigation.toggleDrawer}
          >
            <Ionicons name="menu" size={24} color="black" />
          </Pressable>
        ),
      }}
    >
      <Drawer.Screen name="main" component={StackScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerButton: {
    marginLeft: 16,
  },
});

export default DrawerScreen;
