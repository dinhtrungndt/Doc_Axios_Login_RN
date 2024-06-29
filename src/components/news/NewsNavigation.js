import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreens from './screens/Home';
import AddScreens from './screens/Add';
import SearchScreens from './screens/Search';

const Tab = createBottomTabNavigator();

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {},
  tabBarLabel: ({focused, color, size}) => {},
});

const NewsNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreens} />
      <Tab.Screen name="Add" component={AddScreens} />
      <Tab.Screen name="Search" component={SearchScreens} />
    </Tab.Navigator>
  );
};

export default NewsNavigation;
