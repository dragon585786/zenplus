import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '@/screens/Auth/SignInScreen';
import OtpScreen from '@/screens/Auth/OtpScreen';
import { Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { globalScreenOptions } from './globalScreenOption';

const Stack = createStackNavigator();
export const NonAuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
      }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Otp"
        component={OtpScreen}
        options={({ navigation, route }) => ({
          ...globalScreenOptions,
          headerTitle:"Enter OTP",
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 20 }}
              onPress={() => navigation.goBack()}
            >
              <FontAwesomeIcon icon={faArrowLeft} color="white" size={25} />
            </TouchableOpacity>
          ),
          headerShown:false
         
        })}
      />
    </Stack.Navigator>
  );
};


