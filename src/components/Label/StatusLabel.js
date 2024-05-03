import React, { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Gstyle from '../../assets/styles/global';


export const StatusLabel = () => {
    return (<View style={{
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
        width: widthPercentageToDP(90),
        marginBottom: heightPercentageToDP(2)
    }}>
        <TouchableOpacity style={{
            paddingHorizontal: widthPercentageToDP(2),
            flexDirection: 'row',
            justifyContent: "flex-start",
            alignItems: "center",
            marginVertical:heightPercentageToDP(1)
        }}>
            <View style={{
                width: 16,
                height: 16,
                borderRadius: 50,
                backgroundColor: "#E5F2EB",
                borderWidth: 2,
                borderColor: "#1B8346",
                marginRight: widthPercentageToDP(1)
            }} />
            <Text style={[Gstyle.h5, {
                color: "#1B8346",
                fontWeight: 'bold'
            }]}>Intrested</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
            paddingHorizontal: widthPercentageToDP(2),
            flexDirection: 'row',
            justifyContent: "flex-start",
            alignItems: "center",
            marginVertical:heightPercentageToDP(1)
        }}>
            <View style={{
                width: 16,
                height: 16,
                borderRadius: 50,
                backgroundColor: "#FFE2E3",
                borderWidth: 2,
                borderColor: "#C82026",
                marginRight: widthPercentageToDP(1)
            }} />
            <Text style={[Gstyle.h5, {
                color: "#C82026",
                fontWeight: 'bold'
            }]}>Not Interested</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
            paddingHorizontal: widthPercentageToDP(2),
            flexDirection: 'row',
            justifyContent: "flex-start",
            alignItems: "center",
            marginVertical:heightPercentageToDP(1)
        }}>
            <View style={{
                width: 16,
                height: 16,
                borderRadius: 50,
                backgroundColor: "#FFF5E3",
                borderWidth: 2,
                borderColor: "#FFA200",
                marginRight: widthPercentageToDP(1)
            }} />
            <Text style={[Gstyle.h5, {
                color: "#FFA200",
                fontWeight: 'bold'
            }]}>Follow Up</Text>
        </TouchableOpacity>
    </View>);
}
export const StatusLabelOnBoard = () => {
    return (<View style={{
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
        width: widthPercentageToDP(90),
        marginBottom: heightPercentageToDP(2),
        flexWrap:'wrap'
    }}>
        <TouchableOpacity style={{
            paddingHorizontal: widthPercentageToDP(2),
            flexDirection: 'row',
            justifyContent: "flex-start",
            alignItems: "center",
            marginVertical:heightPercentageToDP(1)
        }}>
            <View style={{
                width: 16,
                height: 16,
                borderRadius: 50,
                backgroundColor: "#E5F2EB",
                borderWidth: 2,
                borderColor: "#1B8346",
                marginRight: widthPercentageToDP(1)
            }} />
            <Text style={[Gstyle.h5, {
                color: "#1B8346",
                fontWeight: 'bold'
            }]}>Initial Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
            paddingHorizontal: widthPercentageToDP(2),
            flexDirection: 'row',
            justifyContent: "flex-start",
            alignItems: "center",
            marginVertical:heightPercentageToDP(1)
        }}>
            <View style={{
                width: 16,
                height: 16,
                borderRadius: 50,
                backgroundColor: "#FFE2E3",
                borderWidth: 2,
                borderColor: "#C82026",
                marginRight: widthPercentageToDP(1)
            }} />
            <Text style={[Gstyle.h5, {
                color: "#C82026",
                fontWeight: 'bold'
            }]}>Incomplete Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
            paddingHorizontal: widthPercentageToDP(2),
            flexDirection: 'row',
            justifyContent: "flex-start",
            alignItems: "center",
            marginVertical:heightPercentageToDP(1)
        }}>
            <View style={{
                width: 16,
                height: 16,
                borderRadius: 50,
                backgroundColor: "##C9E6FF",
                borderWidth: 2,
                borderColor: "#4B7EFF",
                marginRight: widthPercentageToDP(1)
            }} />
            <Text style={[Gstyle.h5, {
                color: "#4B7EFF",
                fontWeight: 'bold'
            }]}>Training Pending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
            paddingHorizontal: widthPercentageToDP(2),
            flexDirection: 'row',
            justifyContent: "flex-start",
            alignItems: "center",
            marginVertical:heightPercentageToDP(1)
        }}>
            <View style={{
                width: 16,
                height: 16,
                borderRadius: 50,
                backgroundColor: "#FFF5E3",
                borderWidth: 2,
                borderColor: "#FFA200",
                marginRight: widthPercentageToDP(1)
            }} />
            <Text style={[Gstyle.h5, {
                color: "#FFA200",
                fontWeight: 'bold'
            }]}>Refund & Rejected</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
            paddingHorizontal: widthPercentageToDP(2),
            flexDirection: 'row',
            justifyContent: "flex-start",
            alignItems: "center",
            marginVertical:heightPercentageToDP(1)
        }}>
            <View style={{
                width: 16,
                height: 16,
                borderRadius: 50,
                backgroundColor: "#FFF5E3",
                borderWidth: 2,
                borderColor: "#017AAD",
                marginRight: widthPercentageToDP(1)
            }} />
            <Text style={[Gstyle.h5, {
                color: "#017AAD",
                fontWeight: 'bold'
            }]}>QC Pending</Text>
        </TouchableOpacity>
    </View>);
}