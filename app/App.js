import React from 'react';
import {StyleSheet, StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SearchScreen from './screens/SearchScreen';
import LibraryScreen from './screens/LibraryScreen';
import DetailedScreen from './screens/DetailedScreen';
import {Icon} from '@rneui/themed';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#FFC700',
            tabBarInactiveTintColor: 'grey',
            tabBarIcon: ({color, size}) => {
              let iconName;

              if (route.name === 'Search') {
                iconName = 'search';
              } else if (route.name === 'Library') {
                iconName = 'bookmark';
              } else if (route.name === 'DetailedScreen') {
                iconName = 'home';
              }

              return <Icon name={iconName} color={color} size={30} />;
            },
            tabBarStyle: {
              backgroundColor: '#0B0B0B',
              borderTopColor: '#0B0B0B',
            },
            headerShown: false,
          })}>
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              title: 'Search',
              headerStyle: {
                backgroundColor: '#FFC700',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Tab.Screen
            name="Library"
            component={LibraryScreen}
            options={{
              title: 'Library',
              headerStyle: {
                backgroundColor: '#FFC700',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Tab.Screen
            name="DetailedScreen"
            component={DetailedScreen}
            options={{
              title: 'Details',
              headerStyle: {
                backgroundColor: '#FFC700',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
  },
});
