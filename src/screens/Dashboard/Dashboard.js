import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable, ScrollView, StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import MyCarousel from '../../components/Carousal/Carousal';
import { onBoardingDashboardData, PerformanceData, SliderData } from '../../assets/data/data';
import Performance from '../../components/Performance/Performance';
import Gstyle from '../../assets/styles/global';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import DashboardButton from '../../components/DashboardButton/DashboardButton';
import OnBoardingDashboard1 from '../../components/OnBoardingDashboard/OnBoardingDashboard';





const DashBoard = () => {
  const [active, setActive] = useState('Week');

  const handlePress = (time) => {
    setActive(time);
  };
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: widthPercentageToDP(5), backgroundColor: "#f2f2f2" }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: widthPercentageToDP(90), backgroundColor: '#ffffff', paddingHorizontal: widthPercentageToDP(5), paddingVertical: widthPercentageToDP(1), borderRadius: 50 }}>
          <DashboardButton time='Today' active={active} handlePress={handlePress} />
          <DashboardButton time='Week' active={active} handlePress={handlePress} />
          <DashboardButton time='Month' active={active} handlePress={handlePress} />
          <DashboardButton time='Custom' active={active} handlePress={handlePress} />
        </View>
        <View style={{ marginVertical: heightPercentageToDP(1) }} />
        <MyCarousel entries={SliderData} sliderWidth={widthPercentageToDP(90)} itemWidth={widthPercentageToDP(90)} />
        <View style={{ marginVertical: heightPercentageToDP(1) }} />
        <Performance />
        <View style={{ marginVertical: heightPercentageToDP(1) }} />
        <OnBoardingDashboard1 />
      </View>
    </ScrollView>
  );
};



export default DashBoard;

// make it optimse and different component when i click on today it should be in this #C82026
// or which ever is active because of on press it should be #C82026 rest will be white and text black

