import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Gstyle from '../../assets/styles/global';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { onBoardingDashboardData, PerformanceData } from '../../assets/data/data';


const OnBoardingDashboard = () => {


    return (
        <View style={styles.slide}>
            <Text style={[Gstyle.h2, Gstyle.black, { fontWeight: "bold", textAlign: 'left', alignSelf: "flex-start", marginBottom: 10 }]}>ONBOARDING</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "center" }}>
                {onBoardingDashboardData.map((item, index) => {
                    return <View style={{ width: widthPercentageToDP(43), marginBottom: 10, backgroundColor: "white", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10, borderRadius: 15 }}>
                        <View>
                            <Text style={[Gstyle.h2, { color: "black", fontWeight: "bold" }]}>{item.number}</Text>
                            <Text style={{ color: "#666666" }}>{item.title}</Text>
                        </View>
                        <FontAwesomeIcon icon={item.icon} size={20} color={"#C82026"} style={{}} />
                    </View>
                }
                )}
            </View>
        </View>
    );
};

export default OnBoardingDashboard;

const styles = StyleSheet.create({
    slide: {
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-between',
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 15,
        paddingHorizontal: 0,
        width: widthPercentageToDP(90),
        paddingVertical: 10
    },

});

