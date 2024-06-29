import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UserContext} from '../users/UserContext';
import UserNavigation from '../users/UserNavigation';
import NewsNavigation from '../news/NewsNavigation';

const AppNavigation = () => {
  const {user} = useContext(UserContext);

  return (
    <NavigationContainer>
      {user ? <NewsNavigation /> : <UserNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
