import { faAddressCard, faCalendarDays, faCamera, faCheck, faCheckSquare, faEye, faFileArrowUp, faFilter, faMagnifyingGlass, faPhone, faPhoneFlip, faSliders, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import { InputField } from '../../../components/inputs/InputField';
import { AddressProof, BankProof, LeadStatus, LeadsData, LeadsDataOnboard } from '../../../assets/data/data';
import { OnBoardCard } from '../../../components/OnBoardCard/OnBoardCard';
import Gstyle from '../../../assets/styles/global';
import { InputFieldDate } from '../../../components/inputs/InputFieldDate';
import { InputFieldUpload } from '../../../components/inputs/InputFieldUpload';
import { InputFieldSelect } from '../../../components/inputs/InputFieldSelect';
import { Button } from '../../../components/buttons/blackButton';

const Header = (props) => {
    const name = props?.name ? props?.name : "Title";
    const required = props?.required ? props?.required : false;
    const hideBottomLine = props?.hideBottomLine ? props?.hideBottomLine : false;
    return (<View style={{
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: '#DDDDDD',
        borderBottomWidth: hideBottomLine ? 0 : 0.8, paddingBottom: hideBottomLine ? 0 : heightPercentageToDP(1), marginBottom: hideBottomLine ? 0 : heightPercentageToDP(2)
    }}>
        <Text style={[Gstyle.h3, { color: '#444' }]}>{name}<Text style={{ color: 'red' }}>{required ? "*" : ""}</Text></Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: widthPercentageToDP(20) }}>
            <TouchableOpacity>
                <FontAwesomeIcon icon={faCamera} size={15} color={"red"} />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesomeIcon icon={faEye} size={15} color={"red"} />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesomeIcon icon={faTrash} size={15} color={"red"} />
            </TouchableOpacity>
        </View>
    </View>)
};
const DriverOnBoarding = (props) => {
    const [data, setData] = useState({});
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: widthPercentageToDP(5), backgroundColor: '#f2f2f2' }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <View style={{ backgroundColor: 'white', padding: widthPercentageToDP(5), width: widthPercentageToDP(90), borderWidth: 0.5, borderColor: '#DDDDDD', marginBottom: heightPercentageToDP(2) }}>
                    <Header
                        name={"Aadhar Card"}
                        required={true}
                    />

                    <InputField
                        lable={"Aadhar Number"}
                        icon={faAddressCard}
                        placeholder="Enter aadhar number"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, aadhar_card: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                    />
                </View>


                <View style={{ backgroundColor: 'white', padding: widthPercentageToDP(5), width: widthPercentageToDP(90), borderWidth: 0.5, borderColor: '#DDDDDD', marginBottom: heightPercentageToDP(2) }}>
                    <Header
                        name={"PAN Card"}
                        required={true}
                    />

                    <InputField
                        lable={"PAN Number"}
                        icon={faAddressCard}
                        placeholder="Enter pan number"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, pan_number: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                    />
                </View>


                <View style={{ backgroundColor: 'white', padding: widthPercentageToDP(5), width: widthPercentageToDP(90), borderWidth: 0.5, borderColor: '#DDDDDD', marginBottom: heightPercentageToDP(2) }}>
                    <Header
                        name={"Driving License"}
                        required={true}
                    />

                    <InputField
                        lable={"Driving License Number"}
                        icon={faAddressCard}
                        placeholder="Enter driving license number"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, driving_license: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                        required={true}
                    />
                    <InputFieldDate
                        lable={"Driving License  Expiry Date"}
                        icon={faCalendarDays}
                        placeholder="Select Date & Time"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, driving_license_expiry_date: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                    />
                </View>
                <View style={{ backgroundColor: 'white', padding: widthPercentageToDP(5), width: widthPercentageToDP(90), borderWidth: 0.5, borderColor: '#DDDDDD', marginBottom: heightPercentageToDP(2) }}>
                    <Header
                        name={"Driver Photo(Selfi)"}
                        hideBottomLine={true}
                    />
                </View>
                <View style={{ backgroundColor: 'white', padding: widthPercentageToDP(5), width: widthPercentageToDP(90), borderWidth: 0.5, borderColor: '#DDDDDD', marginBottom: heightPercentageToDP(2) }}>
                    <Header
                        name={"Police Clearance Certificate"}
                        required={true}
                        hideBottomLine={true}
                    />
                </View>
                <View style={{ backgroundColor: 'white', padding: widthPercentageToDP(5), width: widthPercentageToDP(90), borderWidth: 0.5, borderColor: '#DDDDDD', marginBottom: heightPercentageToDP(2) }}>
                    <Header
                        name={"Court record status"}
                        required={true}
                        hideBottomLine={true}
                    />
                </View>

                <View style={{ backgroundColor: 'white', padding: widthPercentageToDP(5), width: widthPercentageToDP(90), borderWidth: 0.5, borderColor: '#DDDDDD', marginBottom: heightPercentageToDP(2) }}>
                    <InputField
                        lable={"Fathers Name"}
                        icon={faUser}
                        placeholder="Enter fathers name"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, fathers_name: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: heightPercentageToDP(2) }}>
                    <Text style={[Gstyle.h2, Gstyle.redTheme]}>Emergency Contact</Text>
                </View>
                <View style={{ backgroundColor: 'white', padding: widthPercentageToDP(5), width: widthPercentageToDP(90), borderWidth: 0.5, borderColor: '#DDDDDD', marginBottom: heightPercentageToDP(2) }}>
                    <InputField
                        lable={"Name"}
                        icon={faUser}
                        placeholder="Enter name"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, emergency_contact_name: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                        required={true}
                    />
                    <InputField
                        lable={"Mobile Number"}
                        icon={faPhone}
                        placeholder="Enter mobile number"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, emergency_contact_mobile: text }) }}
                        keyboardType="numeric"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                        required={true}
                    />
                    <InputField
                        lable={"Relationship"}
                        icon={faUser}
                        placeholder="Enter relationship"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, emergency_contact_relationship: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                        required={true}
                    />
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={{ color: "#121212" }}>+ Add Emergency Contact</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: heightPercentageToDP(2) }}>
                    <Text style={[Gstyle.h2, Gstyle.redTheme]}>Guarantor Details</Text>
                </View>
                <View style={{ backgroundColor: 'white', padding: widthPercentageToDP(5), width: widthPercentageToDP(90), borderWidth: 0.5, borderColor: '#DDDDDD', marginBottom: heightPercentageToDP(2) }}>
                    <Text style={[Gstyle.h4, Gstyle.black, { marginBottom: heightPercentageToDP(2) }]}>Guarantor 1</Text>
                    <InputField
                        lable={"Name"}
                        icon={faUser}
                        placeholder="Enter name"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, guarantor_contact_name: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                        required={true}
                    />
                    <InputField
                        lable={"Mobile Number"}
                        icon={faPhone}
                        placeholder="Enter mobile number"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, guarantor_contact_mobile: text }) }}
                        keyboardType="numeric"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                        required={true}
                    />
                    <InputField
                        lable={"Relationship"}
                        icon={faUser}
                        placeholder="Enter relationship"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, guarantor_contact_relationship: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                        required={true}
                    />
                    <InputFieldUpload
                        lable={"ID Proof"}
                        icon={faFileArrowUp}
                        placeholder="Upload Document/Image"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, guarantor_contact_relationship: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                        optionInput={" (Aadhar Card, Driving License, Voter ID)"}
                        required={true}
                    />
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={{ color: "#121212" }}>+ Add Guarantor</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: heightPercentageToDP(2) }}>
                    <Text style={[Gstyle.h2, Gstyle.redTheme]}>Current Address</Text>
                </View>
                <View style={{ backgroundColor: 'white', padding: widthPercentageToDP(5), width: widthPercentageToDP(90), borderWidth: 0.5, borderColor: '#DDDDDD', marginBottom: heightPercentageToDP(2) }}>
                    <Text style={[Gstyle.h4, Gstyle.black, { marginBottom: heightPercentageToDP(2) }]}>Current Address</Text>
                    <InputField
                        lable={"Street"}
                        icon={faUser}
                        placeholder="Enter street"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, street: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                        required={true}
                        hideLeftIcon={true}
                    />
                    <InputField
                        lable={"State"}
                        icon={faPhone}
                        placeholder="Enter state"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, state: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                        required={true}
                        hideLeftIcon={true}

                    />
                    <InputField
                        lable={"District"}
                        icon={faUser}
                        placeholder="Enter district"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, district: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                        required={true}
                        hideLeftIcon={true}

                    />
                    <InputField
                        lable={"City"}
                        icon={faUser}
                        placeholder="Enter city"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, city: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                        required={true}
                        hideLeftIcon={true}

                    />
                    <InputField
                        lable={"Pin code"}
                        icon={faUser}
                        placeholder="Enter pin code"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, pin: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                        required={true}
                        hideLeftIcon={true}

                    />
                    <InputFieldSelect
                        onChangeText={(text) => { setData({ ...data, address_proof: text }) }}
                        width={widthPercentageToDP(80)}
                        items={AddressProof}
                        label={"Address Proof"}
                        required={true}
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        placeholder="Upload Document/Image"
                        icon={faFileArrowUp}
                    />

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: heightPercentageToDP(2) }}>
                    <Text style={[Gstyle.h2, Gstyle.redTheme]}>Permanent Address</Text>
                </View>
                <View style={{ backgroundColor: 'white', padding: widthPercentageToDP(5), width: widthPercentageToDP(90), borderWidth: 0.5, borderColor: '#DDDDDD', marginBottom: heightPercentageToDP(2) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start ', marginBottom: heightPercentageToDP(2) }}>
                        <Text style={[Gstyle.h4, Gstyle.black, { marginBottom: heightPercentageToDP(2) }]}>Permanent Address</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                            <TouchableOpacity
                                onPress={() => { setData({ ...data, sendPaymentLink: !data?.sendPaymentLink }) }}
                                style={styles.checkbox}>
                                {data?.sendPaymentLink && <FontAwesomeIcon icon={faCheck} size={20} color={'#C82026'} />}
                            </TouchableOpacity>
                            <Text style={[Gstyle.h4, Gstyle.redTheme]}>Same as current addr</Text>
                        </View>
                    </View>
                    <InputField
                        lable={"Street"}
                        icon={faUser}
                        placeholder="Enter street"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, street: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                        required={true}
                        hideLeftIcon={true}
                    />
                    <InputField
                        lable={"State"}
                        icon={faPhone}
                        placeholder="Enter state"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, state: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                        required={true}
                        hideLeftIcon={true}

                    />
                    <InputField
                        lable={"District"}
                        icon={faUser}
                        placeholder="Enter district"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, district: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                        required={true}
                        hideLeftIcon={true}

                    />
                    <InputField
                        lable={"City"}
                        icon={faUser}
                        placeholder="Enter city"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, city: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                        required={true}
                        hideLeftIcon={true}

                    />
                    <InputField
                        lable={"Pin code"}
                        icon={faUser}
                        placeholder="Enter pin code"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, pin: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                        required={true}
                        hideLeftIcon={true}

                    />
                    <InputFieldSelect
                        onChangeText={(text) => { setData({ ...data, address_proof: text }) }}
                        width={widthPercentageToDP(80)}
                        items={AddressProof}
                        label={"Address Proof"}
                        required={true}
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        placeholder="Upload Document/Image"
                        icon={faFileArrowUp}
                    />

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: heightPercentageToDP(2) }}>
                    <Text style={[Gstyle.h2, Gstyle.redTheme]}>Add bank account</Text>
                </View>
                <View style={{ backgroundColor: 'white', padding: widthPercentageToDP(5), width: widthPercentageToDP(90), borderWidth: 0.5, borderColor: '#DDDDDD', marginBottom: heightPercentageToDP(2) }}>
                    <InputField
                        lable={"Name"}
                        icon={faUser}
                        placeholder="Enter name"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, bank_name: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                        required={true}
                        hideLeftIcon={true}
                    />
                    <InputField
                        lable={"Account Number"}
                        icon={faPhone}
                        placeholder="Enter Account Number"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, bank_acc_no: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                        required={true}
                        hideLeftIcon={true}

                    />
                    <InputField
                        lable={"Bank Name"}
                        icon={faUser}
                        placeholder="Enter bank name"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, bank_bank_name: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                        required={true}
                        hideLeftIcon={true}

                    />
                    <InputField
                        lable={"IFSC Code"}
                        icon={faUser}
                        placeholder="Enter IFSC code"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, bank_ifsc: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(80)}
                        required={true}
                        hideLeftIcon={true}

                    />

                    <InputFieldSelect
                        onChangeText={(text) => { setData({ ...data, address_proof: text }) }}
                        width={widthPercentageToDP(80)}
                        items={BankProof}
                        label={"Attachment"}
                        required={true}
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        placeholder="Upload Document/Image"
                        icon={faFileArrowUp}
                    />

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: heightPercentageToDP(2) }}>
                    <Button
                        onPress={() => {
                        }}
                        color={"#ffffff"}
                        width={widthPercentageToDP(40)}
                        children={"Submit to QC"}
                        borderRadius={10}
                        borderColor={"#dddddd"}
                        textColor={"#000000"}
                        colorStart={"#ffffff"}
                        colorEnd={"#ffffff"}
                    />

                    <Button
                        onPress={() => {
                        }}
                        color={"#C82026"}
                        width={widthPercentageToDP(40)}
                        children={"Save"}
                        borderRadius={10}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default DriverOnBoarding;

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
        marginTop: -0,
        marginLeft: widthPercentageToDP(2)
    },


});


