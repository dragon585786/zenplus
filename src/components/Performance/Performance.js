import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Gstyle from '../../assets/styles/global';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { PerformanceData } from '../../assets/data/data';


const Performance = () => {


    return (
        <View style={styles.slide}>
            <Text style={[Gstyle.h2, Gstyle.black, { fontWeight: "bold", textAlign: 'left', alignSelf: "flex-start" }]}>PERFORMANCE</Text>
            <View style={{ backgroundColor: '#BCBCBC', width: widthPercentageToDP(80), height: 1, marginVertical: 10 }} />
            {PerformanceData.map((item, key) => {
                return <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: widthPercentageToDP(80), borderBottomWidth: key !== PerformanceData.length - 1 ? 1 : 0, borderBottomColor: "#BCBCBC", marginBottom: key !== PerformanceData.length - 1 ? 10 : 0, paddingBottom: key !== PerformanceData.length - 1 ? 10 : 0 }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <FontAwesomeIcon icon={item.icon} size={20} color={"#C82026"} style={{ marginRight: 20 }} />
                        <View style={{ flexDirection: "column" }}>
                            <Text style={[Gstyle.h3, { color: "black" }]}>{item.title}</Text>
                            <Text style={{ color: "#7E7F81" }}>{item.subTitle}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={[Gstyle.h3, { color: "#666666", fontWeight: 'bold', marginRight: 10 }]}>{item.number}</Text>
                        <FontAwesomeIcon icon={faChevronRight} size={20} color={"#C8C8C8"} style={{}} />
                    </View>


                </TouchableOpacity>
            })}

        </View>
    );
};

export default Performance;

const styles = StyleSheet.create({
    slide: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 15,
        paddingHorizontal: 20,
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 9.84,
        elevation: 5,
        width: widthPercentageToDP(90),
        paddingVertical: 20
    },

});

