import { faAddressCard, faCheck, faMicrophone, faMicrophoneLines, faMicrophoneSlash, faPenToSquare, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Gstyle from '../../assets/styles/global';
import { InputField } from '../../components/inputs/InputField';
import { historyData } from '../../assets/data/data';
import { Button } from '../../components/buttons/blackButton';
import { APIService } from '../../API/Service';
import moment from 'moment';

const LeadDetails = (props) => {
    const [data, setData] = useState({});
    const [history, setHistory] = useState({});
    const [leadInfo, setLeadInfo] = useState({});
    console.log("props.route.params.item--->", props?.route?.params?.item);
    const item = props?.route?.params?.item
    useEffect(() => {
        const callHistoryDetails = async () => {
            const response = await APIService.historyLead(item?.leadId)
           if(!response?.data?.success){
            Alert.alert('Error',response?.data?.message)
           }
           setHistory(response?.data?.payload)
        }
        callHistoryDetails()
        const callPersonalDetails = async () => {
            const response = await APIService.leadPersonalDetails(item?.leadId)
           if(!response?.data?.success){
            Alert.alert('Error',response?.data?.message)
           }
           setLeadInfo(response?.data?.payload)
        }
        callPersonalDetails()
    }, [])

    const renderHistoryItem = ({ item }) => (
        <View style={styles.historyItem}>
            <View style={{width:widthPercentageToDP(10)}}>
            <FontAwesomeIcon icon={faMicrophone} size={20} color={'#C82026'} />
            </View>
            <Text style={[Gstyle.h5, { width: widthPercentageToDP(20) }]}>{moment(item.logDate).format('DD/MM/YYYY')}</Text>
            <Text style={[Gstyle.h5, { width: widthPercentageToDP(20) }]}>{item.firstName}</Text>
            <Text style={[Gstyle.h5, { width: widthPercentageToDP(30) }]}>{item.logDescription}</Text>
        </View>
    );
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: widthPercentageToDP(5), backgroundColor: '#f2f2f2' }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                alwaysBounceVertical={true}
            >

                <View style={{ backgroundColor: 'white', padding: widthPercentageToDP(5), width: widthPercentageToDP(90), borderWidth: 0.5, borderColor: '#DDDDDD', marginBottom: heightPercentageToDP(2) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Text style={[Gstyle.h2, Gstyle.redTheme]}>Personal Info</Text>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('PersonalInfo',{item:leadInfo})}
                        >
                            <FontAwesomeIcon icon={faPenToSquare} size={20} color={"#C82026"} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightPercentageToDP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: 'gray' }}>Name</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>{item?.leadName}</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'gray' }}>Mobile Number</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>{item?.leadMobileNo}</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: heightPercentageToDP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: 'gray' }}>Driving License  Number</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>{item?.leadContactDLNumber}</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'gray' }}>PAN Number</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>{item?.leadPanNumber}</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: heightPercentageToDP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: 'gray' }}>Aadhar Number</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>{item?.leadAadharNumber}</Text>
                        </View>

                    </View>
                </View>

                <View style={{ backgroundColor: 'white', padding: widthPercentageToDP(5), width: widthPercentageToDP(90), borderWidth: 0.5, borderColor: '#DDDDDD', marginBottom: heightPercentageToDP(2) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Text style={[Gstyle.h2, Gstyle.redTheme]}>Lead Info</Text>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('LeadInfo',{item:leadInfo})}
                        >
                            <FontAwesomeIcon icon={faPenToSquare} size={20} color={"#C82026"} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightPercentageToDP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: 'gray' }}>Scheme</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>{item?.leadSchemeName}</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'gray' }}>Lead Status</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>{item?.leadStatus}</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: heightPercentageToDP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: 'gray' }}>Uber Status</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>{item?.leadUberStatus}</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'gray' }}>Lead Source</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>{item?.leadSource}</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: heightPercentageToDP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: 'gray' }}>Referral Code</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>{item?.leadReferalCode}</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'gray' }}>Lead Channel</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>{item?.leadChannel}</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: heightPercentageToDP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: 'gray' }}>Remarks</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>{}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ backgroundColor: 'white', padding: widthPercentageToDP(5), width: widthPercentageToDP(90), borderWidth: 0.5, borderColor: '#DDDDDD', marginBottom: heightPercentageToDP(2) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Text style={[Gstyle.h2, Gstyle.black]}>Payment Info</Text>
                    </View>
                    <View style={{ marginTop: heightPercentageToDP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: 'gray' }}>Deposit</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>{item?.leadDepositAmount}</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'gray' }}>Received Amt</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>{item?.leadDepositReceievedAmount}</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: heightPercentageToDP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={[{ color: 'gray' }]}>Due Amount</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>{item?.leadDepositDueAmount}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.checkboxContainer} onPress={() => { setData({ ...data, sendPaymentLink: !data?.sendPaymentLink }) }}>
                        <View style={styles.checkbox}>
                            {item?.isPaymentLinkSent && <FontAwesomeIcon icon={faCheck} size={20} color={'#C82026'} />}
                        </View>
                        <Text style={[Gstyle.h4, Gstyle.redTheme]}>Send Payment Link to Operator</Text>
                    </TouchableOpacity>
                    <InputField
                        lable={"Amount"}
                        icon={faAddressCard}
                        placeholder="Enter amount"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, amount: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="gray"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                    />
                </View>
                <View style={{  width: widthPercentageToDP(90), marginBottom: heightPercentageToDP(2) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Text style={[Gstyle.h2, Gstyle.redTheme]}>History</Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: '#262626', paddingVertical: heightPercentageToDP(1), paddingHorizontal: widthPercentageToDP(1), width: widthPercentageToDP(90) }}>
                        <Text style={[Gstyle.h5, { color: 'white', width: widthPercentageToDP(10) }]}></Text>
                        <Text style={[Gstyle.h5, { color: 'white', width: widthPercentageToDP(20) }]}>Date</Text>
                        <Text style={[Gstyle.h5, { color: 'white', width: widthPercentageToDP(20) }]}>Agent Name</Text>
                        <Text style={[Gstyle.h5, { color: 'white', width: widthPercentageToDP(30) }]}>Description</Text>
                    </View>
                    <FlatList
                        data={history}
                        renderItem={renderHistoryItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <Button
                    onPress={() => {
                    }}
                    color={"#ffffff"}
                    width={widthPercentageToDP(90)}
                    children={"Send payment link"}
                    borderRadius={10}
                    borderColor={"#999999"}
                    textColor={"#000000"}
                    colorStart={"#ffffff"}
                    colorEnd={"#ffffff"}
                />
            </ScrollView>

        </View>
    );
};

export default LeadDetails;
const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: widthPercentageToDP(90),
        marginVertical: heightPercentageToDP(2)
    },
    checkbox: {
        width: 24,
        height: 24,
        // borderRadius: 12,
        borderWidth: 2,
        borderColor: '#C82026',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    historyHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: heightPercentageToDP(2),
    },
    historyItem: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: widthPercentageToDP(1),
        width: widthPercentageToDP(90),
        borderColor: 'grey',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },

});
