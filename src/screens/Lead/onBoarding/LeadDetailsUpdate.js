import { faAddressCard, faCheck, faCheckCircle, faEye, faFileArrowUp, faMicrophone, faMicrophoneLines, faMicrophoneSlash, faPenToSquare, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Button } from '../../../components/buttons/blackButton';
import { documentData, historyData, paymentData } from '../../../assets/data/data';
import { InputField } from '../../../components/inputs/InputField';
import Gstyle from '../../../assets/styles/global';
import { StatusIndicatorOnboard } from '../../../components/Label/Label';

const LeadDetailsUpdate = (props) => {
    const [data, setData] = useState({});
    console.log("routeData==>", props.route?.params?.status)
    const renderHistoryItem = ({ item }) => (
        <View style={styles.historyItem}>
            <FontAwesomeIcon icon={item.icon} size={20} color={item.color} />
            <Text style={[Gstyle.h5, Gstyle.black, { width: widthPercentageToDP(20) }]}>{item.date}</Text>
            <Text style={[Gstyle.h5, Gstyle.black, { width: widthPercentageToDP(20) }]}>{item.agent}</Text>
            <Text style={[Gstyle.h5, Gstyle.black, { width: widthPercentageToDP(35) }]}>{item.description}</Text>

        </View>
    );
    const renderPaymentItem = ({ item }) => (
        <View style={styles.historyItem}>
            <Text style={[Gstyle.h5, Gstyle.black, { width: widthPercentageToDP(20) }]}>{item.date}</Text>
            <Text style={[Gstyle.h5, Gstyle.black, { width: widthPercentageToDP(20) }]}>{item.amount}</Text>
            <Text style={[Gstyle.h5, Gstyle.black, { width: widthPercentageToDP(20) }]}>{item.mode}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: widthPercentageToDP(25) }}>
                <FontAwesomeIcon icon={item.icon} size={20} color={item.color} />
            </View>
        </View>
    );
    const renderDocumentItem = ({ item }) => (
        <View style={styles.historyItem}>
            <FontAwesomeIcon icon={faCheckCircle} size={20} color={"green"} style={{ color: "black", marginRight: widthPercentageToDP(5) }} />
            <Text style={[Gstyle.black, Gstyle.h5, { width: widthPercentageToDP(30) }]}>{item.document}</Text>
            <Text style={[Gstyle.black, Gstyle.h5, { width: widthPercentageToDP(20) }]}>{item.description}</Text>
            <Text style={[Gstyle.black, Gstyle.h5, { width: widthPercentageToDP(20) }]}>{item.date}</Text>
            <FontAwesomeIcon icon={item.icon} size={20} color={item.color} />
        </View>
    );
    const status = props.route?.params?.status
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: widthPercentageToDP(5), backgroundColor: '#f2f2f2' }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                alwaysBounceVertical={true}
            >
                {/* personal info  */}
                <View style={{ backgroundColor: 'white', padding: widthPercentageToDP(5), width: widthPercentageToDP(90), borderWidth: 0.5, borderColor: '#DDDDDD', marginBottom: heightPercentageToDP(2) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        <StatusIndicatorOnboard status={status} />
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('LeadDetailsPersonalInfo', { title: `${props.route?.params?.title}` })}
                        >
                            <FontAwesomeIcon icon={faPenToSquare} size={20} color={"#C82026"} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Text style={[Gstyle.h2, Gstyle.redTheme]}>Personal Info</Text>

                    </View>
                    <View style={{ marginTop: heightPercentageToDP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: 'gray' }}>Name</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>Manoj Sharma</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'gray' }}>Mobile Number</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>8181818181</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: heightPercentageToDP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: 'gray' }}>Driving License  Number</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>MH12 12345678901</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'gray' }}>PAN Number</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>ABCDE1234F</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: heightPercentageToDP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: 'gray' }}>Aadhar Number</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>1234 5678 1111</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'gray' }}>Uber Status</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>Active</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: heightPercentageToDP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: 'gray' }}>Scheme</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>60-40 Scheme</Text>
                        </View>

                    </View>
                </View>

                {status !== 'Initial Payment' && <View style={{ backgroundColor: 'white', padding: widthPercentageToDP(5), width: widthPercentageToDP(90), borderWidth: 0.5, borderColor: '#DDDDDD', marginBottom: heightPercentageToDP(2) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Text style={[Gstyle.h2, Gstyle.redTheme]}>Guarantor Info</Text>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('PersonalInfo')}
                        >
                            <FontAwesomeIcon icon={faPenToSquare} size={20} color={"#C82026"} />
                        </TouchableOpacity>
                    </View>
                    <Text style={[Gstyle.h3, Gstyle.black, { marginVertical: heightPercentageToDP(1) }]}>Emergency Contact</Text>

                    <View style={{ marginTop: heightPercentageToDP(1), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: 'gray' }}>Name</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>Anshu Dhaliwal </Text>
                        </View>
                        <View>
                            <Text style={{ color: 'gray' }}>Mobile Number</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>8181818181</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: heightPercentageToDP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: 'gray' }}>Relationship</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>Brother</Text>
                        </View>
                    </View>
                    <Text style={[Gstyle.h3, Gstyle.black, { marginVertical: heightPercentageToDP(1) }]}>Guarantor Details</Text>

                    <View style={{ marginTop: heightPercentageToDP(1), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: 'gray' }}>Name</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>Anshu Dhaliwal </Text>
                        </View>
                        <View>
                            <Text style={{ color: 'gray' }}>Mobile Number</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>8181818181</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: heightPercentageToDP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: 'gray' }}>Relationship</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>Brother</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'gray' }}>ID Proof</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>111732.jpg</Text>
                        </View>
                    </View>
                </View>}


                {/* payment info  */}
                {status == "Initial Payment" && <View style={{ backgroundColor: 'white', padding: widthPercentageToDP(5), width: widthPercentageToDP(90), borderWidth: 0.5, borderColor: '#DDDDDD', marginBottom: heightPercentageToDP(2) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Text style={[Gstyle.h2, Gstyle.redTheme]}>Payment Info</Text>
                    </View>
                    <View style={{ marginTop: heightPercentageToDP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: 'gray' }}>Deposit</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>3000.00</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'gray' }}>Received Amt</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>1700.00</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: heightPercentageToDP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={[{ color: 'gray' }]}>Due Amount</Text>
                            <Text style={[Gstyle.h4, Gstyle.black]}>1300.00</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.checkboxContainer} onPress={() => { setData({ ...data, sendPaymentLink: !data?.sendPaymentLink }) }}>
                        <View style={styles.checkbox}>
                            {data?.sendPaymentLink && <FontAwesomeIcon icon={faCheck} size={20} color={'#C82026'} />}
                        </View>
                        <Text style={[Gstyle.h4, Gstyle.redTheme]}>Send Payment Link to Operator</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <InputField
                            lable={"Amount"}
                            icon={faAddressCard}
                            placeholder="Enter amount"
                            defaultValue="3000"
                            onChangeText={(text) => { setData({ ...data, amount: text }) }}
                            keyboardType="default"
                            returnKeyType="done"
                            placeholderTextColor="#838383"
                            iconColor="gray"
                            labelColor="#444"
                            width={widthPercentageToDP(35)}
                            hideLeftIcon={true}
                        />
                        <View style={{ paddingBottom: heightPercentageToDP(1) }}>
                            <Button
                                onPress={() => {
                                }}
                                color={"#C82026"}
                                width={widthPercentageToDP(35)}
                                children={"Send Link"}
                                borderRadius={10}
                            />
                        </View>
                    </View>
                </View>}
                {/* DocumentS table  */}
                {
                    status !== "Initial Payment" && <View style={{ width: widthPercentageToDP(90), marginBottom: heightPercentageToDP(2) }}>
                        <View style={{ flexDirection: 'row', marginBottom: 5, justifyContent: 'space-between', alignItems: 'center', }}>
                            <Text style={[Gstyle.h2, Gstyle.redTheme]}>Documents</Text>
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: '#262626', paddingVertical: heightPercentageToDP(1), paddingHorizontal: widthPercentageToDP(1), width: widthPercentageToDP(90) }}>
                            <Text style={[Gstyle.h5, { color: 'white', width: widthPercentageToDP(10) }]}></Text>
                            <Text style={[Gstyle.h5, { color: 'white', width: widthPercentageToDP(30) }]}>Document</Text>
                            <Text style={[Gstyle.h5, { color: 'white', width: widthPercentageToDP(20) }]}>Description</Text>
                            <Text style={[Gstyle.h5, { color: 'white', width: widthPercentageToDP(20) }]}>Expiry Date</Text>
                            <Text style={[Gstyle.h5, { color: 'white', width: widthPercentageToDP(10) }]}></Text>

                        </View>
                        {status == "QC Rejected" && <View style={styles.historyItem}>
                            <FontAwesomeIcon icon={faFileArrowUp} size={20} color={"#C82026"} style={{ marginRight: widthPercentageToDP(5) }} />
                            <Text style={[Gstyle.h5, { width: widthPercentageToDP(30) }]}>{"Driver Photo"}<Text>no proper light on face reupload</Text></Text>
                            <Text style={[Gstyle.h5, { width: widthPercentageToDP(20) }]}>{''}</Text>
                            <Text style={[Gstyle.h5, { width: widthPercentageToDP(20) }]}>{''}</Text>
                            <FontAwesomeIcon icon={faEye} size={20} color={"#C82026"} />
                        </View>}
                        <FlatList
                            data={documentData}
                            renderItem={renderDocumentItem}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                }

                {/* payment table  */}
                <View style={{ width: widthPercentageToDP(90), marginBottom: heightPercentageToDP(2) }}>
                    <View style={{ flexDirection: 'row', marginBottom: 5, justifyContent: 'space-between', alignItems: 'center', }}>
                        <Text style={[Gstyle.h2, Gstyle.redTheme]}>Payment Info</Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: '#262626', paddingVertical: heightPercentageToDP(1), paddingHorizontal: widthPercentageToDP(1), width: widthPercentageToDP(90) }}>
                        <Text style={[Gstyle.h5, { color: 'white', width: widthPercentageToDP(20) }]}>Date</Text>
                        <Text style={[Gstyle.h5, { color: 'white', width: widthPercentageToDP(20) }]}>Paid Amount</Text>
                        <Text style={[Gstyle.h5, { color: 'white', width: widthPercentageToDP(20) }]}>Pay Mode</Text>
                        <Text style={[Gstyle.h5, { color: 'white', width: widthPercentageToDP(20) }]}>Receipt</Text>
                    </View>
                    <FlatList
                        data={paymentData}
                        renderItem={renderPaymentItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                {/* history  */}
                <View style={{ width: widthPercentageToDP(90), marginBottom: heightPercentageToDP(2) }}>
                    <View style={{ flexDirection: 'row', marginBottom: 5, justifyContent: 'space-between', alignItems: 'center', }}>
                        <Text style={[Gstyle.h2, Gstyle.redTheme]}>History</Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: '#262626', paddingVertical: heightPercentageToDP(1), paddingHorizontal: widthPercentageToDP(1), width: widthPercentageToDP(90) }}>
                        <Text style={[Gstyle.h5, { color: 'white', width: widthPercentageToDP(10) }]}></Text>
                        <Text style={[Gstyle.h5, { color: 'white', width: widthPercentageToDP(20) }]}>Date</Text>
                        <Text style={[Gstyle.h5, { color: 'white', width: widthPercentageToDP(20) }]}>Agent Name</Text>
                        <Text style={[Gstyle.h5, { color: 'white', width: widthPercentageToDP(30) }]}>Description</Text>
                    </View>
                    <FlatList
                        data={historyData}
                        renderItem={renderHistoryItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', width: widthPercentageToDP(90) }}>
                    {
                        (status == "Training Pending" || status == "Training Completed" || status == "Initial Payment") && <TouchableOpacity
                            onPress={() => props.navigation.navigate('DriverOnBoarding')}
                            style={{ padding: widthPercentageToDP(2), borderRadius: 10, borderWidth: 1, borderColor: 'grey', marginVertical: 5, paddingVertical: heightPercentageToDP(2) }}>
                            <Text style={{ color: 'black' }}>Driver Onboarding</Text>
                        </TouchableOpacity>
                    }

                    {(status == "QC Pending" || status == "Initial Payment") && <TouchableOpacity
                        onPress={() => { props.navigation.navigate("DriverTrainingSchedule") }}
                        style={{ padding: widthPercentageToDP(2), borderRadius: 10, borderWidth: 1, borderColor: 'grey', marginVertical: 5, paddingVertical: heightPercentageToDP(2) }}>
                        <Text style={{ color: 'black' }}>Driver Training</Text>
                    </TouchableOpacity>}



                    {
                        (status == "QC Rejected") && <TouchableOpacity style={{ padding: widthPercentageToDP(2), borderRadius: 10, borderWidth: 1, borderColor: 'grey', marginVertical: 5, paddingVertical: heightPercentageToDP(2) }}>
                            <Text style={{ color: 'black' }}>Reupload</Text>
                        </TouchableOpacity>
                    }
                    {(status == "QC Rejected" || status == "Initial Payment" || status == "Training Completed" || status == "Training Pending") && <TouchableOpacity style={{ padding: widthPercentageToDP(2), borderRadius: 10, borderWidth: 1, borderColor: 'grey', marginVertical: 5, paddingVertical: heightPercentageToDP(2) }}>
                        <Text style={{ color: 'black' }}>Refund Request</Text>
                    </TouchableOpacity>
                    }
                    {
                        status == "QC Pending" && <TouchableOpacity style={{ padding: widthPercentageToDP(2), borderRadius: 10, borderWidth: 1, borderColor: 'grey', marginVertical: 5, paddingVertical: heightPercentageToDP(2) }}>
                            <Text style={{ color: 'black' }}>Driver Document</Text>
                        </TouchableOpacity>
                    }

                    {status == "QC Pending" && <TouchableOpacity style={{ padding: widthPercentageToDP(2), borderRadius: 10, borderWidth: 1, borderColor: 'grey', marginVertical: 5, paddingVertical: heightPercentageToDP(2) }}>
                        <Text style={{ color: 'black' }}>Guarantor Info</Text>
                    </TouchableOpacity>}
                    {
                        status == "QC Pending" && <TouchableOpacity style={{ padding: widthPercentageToDP(2), borderRadius: 10, borderWidth: 1, borderColor: 'grey', marginVertical: 5, paddingVertical: heightPercentageToDP(2) }}>
                            <Text style={{ color: 'black' }}>Reject</Text>
                        </TouchableOpacity>
                    }

                </View>
            </ScrollView>

        </View>
    );
};

export default LeadDetailsUpdate;
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
        borderColor: '#DDDDDD',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },

});
