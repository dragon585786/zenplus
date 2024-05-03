import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Button } from '../components/buttons/blackButton';
import { UserContext } from '../contextAPI/context';

const Profile = () => {
  const { loggedIn, setLoggedIn } = useContext(UserContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Text>Profile</Text>
    </View>
  );
};

export default Profile;
