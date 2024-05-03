import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from '@/navigation/BottomTabNavigator';
import { NonAuthStack } from '@/navigation/NonAuthStack';
import { UserContext, UserProvider } from './src/contextAPI/context';
import { MainNavigation } from './src/navigation/mainNavigation';


const App = () => {
  return (
    <UserProvider >
    <NavigationContainer>
    <MainNavigation />
    </NavigationContainer>
    </UserProvider>
  );
};

export default App;
