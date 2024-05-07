import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import Gstyle from '../../assets/styles/global';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { PerformanceData } from '../../assets/data/data';


const DashboardButton = ({ time, active, handlePress }) => {
    const backgroundColor = active === time ? '#C82026' : 'white';
    const textColor = active === time ? 'white' : 'black';


    return (
        <View style={{ margin: widthPercentageToDP(2), backgroundColor, padding: 5, paddingHorizontal: widthPercentageToDP(3), borderRadius: 50 }}>
            <Pressable style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }} onPress={() => handlePress(time)}>
                <Text style={{ color: textColor }}>{time}</Text>
            </Pressable>
        </View>
    );
};

export default DashboardButton;


