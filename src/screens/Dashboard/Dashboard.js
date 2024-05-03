import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const DashBoard = () => {
  const [active, setActive] = useState('Week');

  const handlePress = (time) => {
    setActive(time);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center',padding:widthPercentageToDP(5),backgroundColor:"#f2f2f2" }}>
      <View style={{flexDirection:'row',justifyContent:'space-between',width:widthPercentageToDP(90),backgroundColor:'#ffffff',paddingHorizontal:widthPercentageToDP(5),paddingVertical:widthPercentageToDP(1),borderRadius:50}}>
        <DashboardButton time='Today' active={active} handlePress={handlePress} />
        <DashboardButton time='Week' active={active} handlePress={handlePress} />
        <DashboardButton time='Month' active={active} handlePress={handlePress} />
        <DashboardButton time='Custom' active={active} handlePress={handlePress} />
      </View>
    </View>
  );
};

const DashboardButton = ({ time, active, handlePress }) => {
  const backgroundColor = active === time ? '#C82026' : 'white';
  const textColor = active === time ? 'white' : 'black';

  return (
    <View style={{margin:widthPercentageToDP(2),backgroundColor,padding:5,paddingHorizontal:widthPercentageToDP(3),borderRadius:50}}>
      <Pressable style={{flexDirection:"row",justifyContent:'center',alignItems:'center'}} onPress={() => handlePress(time)}>
        <Text style={{color:textColor}}>{time}</Text>
      </Pressable>
    </View>
  );
};

export default DashBoard;

// make it optimse and different component when i click on today it should be in this #C82026
// or which ever is active because of on press it should be #C82026 rest will be white and text black
