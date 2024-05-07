import React, { useState, useContext, useEffect } from 'react';
import { View, Text, CheckBox, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Button } from '../../components/buttons/blackButton';
import { globalScreenStyles } from '../../styles';
import { UserContext } from '../../contextAPI/context';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Gstyle from '../../assets/styles/global';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAddressCard, faArrowRight, faArrowRightFromBracket, faCalendarDays, faCheck, faCommentDots, faMicrophone, faPhone, faSitemap, faUser } from '@fortawesome/free-solid-svg-icons';
import { StepTitle } from '../../components/StepByStep/StepByStep';
import { InputField } from '../../components/inputs/InputField';
import { InputFieldSelectMulti } from '../../components/inputs/InputFieldSelectMulti';
import { InputFieldSelect } from '../../components/inputs/InputFieldSelect';
import { LeadChannel, LeadSource, LeadStatus, Status, UberStatus, schemeItems } from '../../assets/data/data';
import { InputFieldDate } from '../../components/inputs/InputFieldDate';
import { APIService } from '../../API/Service';
import { LocalStorage } from '../../Utils/LocalStorage';
import { useFocusEffect } from '@react-navigation/native';
import moment from 'moment';
const CreateLead = (props) => {
    const [stepTitle, setStepTitle] = useState(1);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async () => {
                try {
                    const [leadStatusRes, leadChannelRes, schemeItemsRes, leadSourceRes] = await Promise.all([
                        APIService.leadStatus(),
                        APIService.leadChannel(),
                        APIService.scheme(),
                        APIService.leadSource(),
                    ]);
                    setData({
                        leadStatus: leadStatusRes?.data?.payload,
                        leadChannel: leadChannelRes?.data?.payload,
                        schemeItems: schemeItemsRes?.data?.payload,
                        leadSource: leadSourceRes?.data?.payload,
                    });
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchData();

            return () => {
                setData({});
                setStepTitle(1);
            };
        }, [])
    );
    const validationPage1 = () => {
        if (data?.name == "" || data?.name == null || data?.name == undefined) {
            return setData({ ...data, errorName: 'Please enter name' })
        }
        let num = /[0-9 ]+$/.test(data?.name?.trim())
        if (num || data?.name?.trim() === "") {
            return setData({ ...data, errorName: 'Name should not have any number or only space entry' })

        }
        if (data?.mobile == "" || data?.mobile == null || data?.mobile == undefined) {
            return setData({ ...data, errorMobile: 'Please enter mobile' })
        }
        if (data?.mobile.length < 10 || data?.mobile.length > 13 || !/^[6-9]\d{9}$/.test(data?.mobile)) {
            return setData({ ...data, errorMobile: 'Mobile number should be atleast 10 digit and not more then 13 digit' })

        }
        setStepTitle(2)
    }
    const getUberStatus = async (id) => {
        const response = await APIService.uberStatus(id);
        console.log("getUberStatus==>", response.data.payload);
        setData({ ...data, uberStatus: response.data?.payload, lead_status: id, sendPaymentLink: false, lead_source: "", uber_status: "", errorLeadStatus: "", uber_sub_status: "", amount: "", lead_channel: "", remark: "" })
    }
    const setSubStatusId = (id) => {
        const selectedStatus = data?.uberStatus.find(item => item.id == id);
        setData({ ...data, uber_sub_status: selectedStatus?.subStatusId, uber_status: id, errorUberStatus: '' })
    }

    const validateSave = () => {
        console.log("step 1")
        if (data?.scheme == "" || data?.scheme == null || data?.scheme == undefined) {
            return setData({ ...data, errorScheme: 'Please select scheme' })
        }
        console.log("step 2")
        if (data?.lead_status == "" || data?.lead_status == null || data?.lead_status == undefined) {
            return setData({ ...data, errorLeadStatus: 'Please select lead status' })
        }

        //    interested 
        if (data?.lead_status == 1) {
            if (data?.uber_status == "" || data?.uber_status == null || data?.uber_status == undefined) {
                return setData({ ...data, errorUberStatus: 'Please select uber status' })
            }
            if (data?.sendPaymentLink == true) {
                if (data?.lead_channel == "" || data?.lead_channel == null || data?.lead_channel == undefined) {
                    return setData({ ...data, errorLeadChannel: 'Please select lead channel' })
                }
            }
            handleSave()

        }
        console.log("step 4")

        //    not interested 
        if (data?.lead_status == 2) {
            if (data?.status == "" || data?.status == null || data?.status == undefined) {
                return setData({ ...data, errorStatus: 'Please select status' })
            }
            handleSave()

        }
        console.log("step 5")

        //    follow up 
        if (data?.lead_status == 3) {

            if (data?.follow_up_date == "" || data?.follow_up_date == null || data?.follow_up_date == undefined) {
                return setData({ ...data, errorFollowUpDate: 'Please select follow up date' })
            }
            console.log("lead_source==>", data?.lead_source);


            if (data?.lead_source == "" || data?.lead_source == null || data?.lead_source == undefined) {
                return setData({ ...data, errorLeadSource: 'Please select lead source' })
            }
            if (data?.lead_channel == "" || data?.lead_channel == null || data?.lead_channel == undefined) {
                return setData({ ...data, errorLeadChannel: 'Please select lead channel' })
            }

            handleSave()
            return
        }
    }
    const handleSave = async () => {
        console.log("finalData==>", data)
        const user = await LocalStorage.get("user");
        console.log("user===>", user)

        let body = {
            "customerId": user?.customerId,
            "branchId": user?.userActiveBranchId || 0,
            "leadName": data?.name || "",
            "mobileNumber": data?.mobile ? data?.mobile + "" : "",
            "alternateMobileNumber": data?.alternate_mobile ? data?.alternate_mobile + "" : "",
            "drivingLicenseNumber": data?.driving_license ? data?.driving_license + "" : "",
            "panNumber": data?.pan_number || "",
            "aadharNumber": data?.aadhar_number || "",
            "leadSchemeId": data?.scheme || 0,
            "leadStatusId": data?.lead_status || 0,
            "uberStatusId": data?.uber_status || 0,
            "leadSubstatusId": data?.uber_sub_status || 0,
            "leadSourceId": data?.lead_source || 0,
            "leadChannelId": data?.lead_channel || 0,
            "followupDate": data?.follow_up_date ? moment(data?.follow_up_date).format("YYYY-MM-DD HH:mm:ss") : "",
            "remark": data?.remark || "",
            "leadDepositAmount": 0,
            "leadDepositReceivedAmount": data?.amount || 0,
            "leadDepositDueAmount": 0,
            "isPaymentLinkSent": data?.sendPaymentLink ? data?.sendPaymentLink : false,
            "paymentLinkSentDate": "",
            "leadReferalCode": data?.referral_code || "",
            "userId": user?.userId,
            "logDescription": "",
            "machineName": "",
            "receiptModeId": 0,
            "transactionReferenceId": 0,
            "transactionRemark": "",
            "transactionAttachmentId": 0,
            "transactionStatusId": 0,
            "transactionAmount": data?.amount || 0
        }
        setLoading(true)
        const response = await APIService.createLead(body);
        setLoading(false)
        // console.log("response==>", response?.data);
        if (response?.data?.success) {
            Alert.alert('Success', 'Lead Created Successfully', [{ text: 'OK', onPress: () => { props.navigation.goBack() } }]);
        } else {
            Alert.alert('Error', response?.data?.message || 'Something went wrong', [{ text: 'OK', onPress: () => { } }]);
        }
    }


    console.log("data==>", data);

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: widthPercentageToDP(5), backgroundColor: '#f2f2f2' }}>
            <StepTitle count={stepTitle} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}>
                {stepTitle == 1 && <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: heightPercentageToDP(5) }}>
                    <InputField
                        lable={"Driver partner Name"}
                        icon={faUser}
                        placeholder="Enter driver partner name"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, name: text, errorName: '' }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(90)}
                        required={true}
                        error={data?.errorName}
                    />
                    <InputField
                        lable={"Mobile Number"}
                        icon={faPhone}
                        placeholder="Enter mobile number"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, mobile: text, errorMobile: '' }) }}
                        keyboardType="numeric"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(90)}
                        required={true}
                        error={data?.errorMobile}
                    />
                    <InputField
                        lable={"Alternate Mobile Number (optional)"}
                        icon={faPhone}
                        placeholder="Enter alternate mobile number"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, alternate_mobile: text }) }}
                        keyboardType="numeric"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(90)}
                    />
                    <InputField
                        lable={"Driving License  Number"}
                        icon={faAddressCard}
                        placeholder="Enter driving license number"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, driving_license: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(90)}
                    />
                    <InputField
                        lable={"PAN Number"}
                        icon={faAddressCard}
                        placeholder="Enter PAN number"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, pan_number: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(90)}
                    />
                    <InputField
                        lable={"Aadhar Number"}
                        icon={faAddressCard}
                        placeholder="Enter AADHAR number"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, aadhar_number: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(90)}
                    />
                </View>}
                {stepTitle == 2 && <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: heightPercentageToDP(5) }}>
                    <InputFieldSelect
                        onChangeText={(text) => { setData({ ...data, scheme: text, errorScheme: '' }) }}
                        width={widthPercentageToDP(90)}
                        items={data?.schemeItems}
                        label={"Scheme"}
                        required={true}
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        placeholder="Select scheme"
                        icon={faAddressCard}
                        error={data?.errorScheme}

                    />
                    <InputFieldSelect
                        onChangeText={(text) => {
                            if (text == 1 || text == 2) {
                                getUberStatus(text)
                            } else {
                                setData({ ...data, lead_status: text, sendPaymentLink: false, lead_source: null, uber_status: null, errorLeadStatus: null, uber_sub_status: "", amount: "", lead_channel: "", remark: "" })

                            }

                        }}
                        width={widthPercentageToDP(90)}
                        items={data?.leadStatus}
                        label={"Lead Status"}
                        required={true}
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        placeholder="Select lead status"
                        icon={faAddressCard}
                        message={(data?.lead_status == 1 && <Text style={{ fontStyle: 'italic', color: "#666666" }}>Deposit Amount to be paid by driver <Text style={{ color: 'black', fontWeight: 'bold' }}>Rs. 3000</Text></Text>)}
                        error={data?.errorLeadStatus}
                    />
                    {
                        data?.lead_status == 1 && <InputFieldSelect
                            onChangeText={(text) => {
                                // setData({ ...data, uber_status: text, errorUberStatus: '' }),
                                setSubStatusId(text)
                            }}
                            width={widthPercentageToDP(90)}
                            items={data?.uberStatus}
                            label={"Uber Status"}
                            required={true}
                            iconColor="#CFCFCF"
                            labelColor="#444"
                            placeholder="Select status"
                            icon={faAddressCard}
                            error={data?.errorUberStatus}
                        />
                    }

                    {
                        (data?.lead_status == 2) && <InputFieldSelect
                            onChangeText={(text) => { setData({ ...data, status: text, errorStatus: '' }) }}
                            width={widthPercentageToDP(90)}
                            items={data?.uberStatus}
                            label={"Status"}
                            required={true}
                            iconColor="#CFCFCF"
                            labelColor="#444"
                            placeholder="Select status"
                            icon={faAddressCard}
                            error={data?.errorStatus}
                        />
                    }

                    {(data?.lead_status == 1 && data?.uber_status == 4) && <TouchableOpacity style={styles.checkboxContainer} onPress={() => { setData({ ...data, sendPaymentLink: !data?.sendPaymentLink }) }}>
                        <View style={styles.checkbox}>
                            {data?.sendPaymentLink && <FontAwesomeIcon icon={faCheck} size={20} color={'#C82026'} />}
                        </View>
                        <Text style={[Gstyle.h4, Gstyle.black]}>Send Payment Link to Operator</Text>
                    </TouchableOpacity>}
                    {
                        (data?.lead_status == 1 && data?.sendPaymentLink && data?.uber_status == 4) && <InputField
                            lable={"Amount"}
                            icon={faAddressCard}
                            placeholder="Enter amount"
                            defaultValue=""
                            onChangeText={(text) => { setData({ ...data, amount: text }) }}
                            keyboardType="numeric"
                            returnKeyType="done"
                            placeholderTextColor="#838383"
                            iconColor="#CFCFCF"
                            labelColor="#444"
                            width={widthPercentageToDP(90)}
                        />
                    }
                    {
                        data?.lead_status == 3 && <InputFieldDate
                            lable={"Follow Up Date & Time"}
                            icon={faCalendarDays}
                            placeholder="Select Date & Time"
                            defaultValue=""
                            onChangeText={(text) => { setData({ ...data, follow_up_date: text, errorFollowUpDate: '' }) }}
                            keyboardType="default"
                            returnKeyType="done"
                            placeholderTextColor="#838383"
                            iconColor="#CFCFCF"
                            labelColor="#444"
                            width={widthPercentageToDP(90)}
                            required={true}
                            error={data?.errorFollowUpDate}
                        />
                    }
                    {
                        data?.lead_status == 3 && <InputFieldSelect
                            onChangeText={(text) => { setData({ ...data, lead_source: text, errorLeadSource: '' }) }}
                            width={widthPercentageToDP(90)}
                            items={data?.leadSource}
                            label={"Lead Source"}
                            required={true}
                            iconColor="#CFCFCF"
                            labelColor="#444"
                            placeholder="Select source"
                            icon={faAddressCard}
                            error={data?.errorLeadSource}
                        />
                    }
                    {data?.lead_source == 1 && <InputField
                        lable={"Referral Code"}
                        icon={faSitemap}
                        placeholder="Enter Referral Code"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, referral_code: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(90)}
                    />}
                    {data?.lead_source == 2 && <InputField
                        lable={"Campion Code"}
                        icon={faSitemap}
                        placeholder="Enter Campion Code"
                        defaultValue=""
                        onChangeText={(text) => { setData({ ...data, referral_code: text }) }}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="#838383"
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        width={widthPercentageToDP(90)}
                    />}
                    {((data?.lead_status == 1 || data?.lead_source == 1) && (data?.sendPaymentLink && data?.uber_status == 4 || data?.lead_source == 1)) && <InputFieldSelect
                        onChangeText={(text) => { setData({ ...data, lead_channel: text, errorLeadChannel: "" }) }}
                        width={widthPercentageToDP(90)}
                        items={data?.leadChannel}
                        label={"Lead Channel"}
                        required={true}
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        placeholder="Select channel"
                        icon={faAddressCard}
                        error={data?.errorLeadChannel}
                    />}

                    {
                        (data?.lead_status == 1 || data?.lead_status == 3) && <InputField
                            lable={"Remark"}
                            icon={faCommentDots}
                            placeholder="Enter remark"
                            defaultValue=""
                            onChangeText={(text) => { setData({ ...data, remark: text }) }}
                            keyboardType="default"
                            returnKeyType="done"
                            placeholderTextColor="#838383"
                            iconColor="#CFCFCF"
                            labelColor="#444"
                            width={widthPercentageToDP(90)}
                            rightIcon={faMicrophone}
                            rightIconColor={"#C82026"}
                            multipleLines={true}
                        />
                    }
                </View>}

                <View style={{ paddingVertical: heightPercentageToDP(2) }} />
                {stepTitle == 1 && <Button
                    onPress={() => {
                        validationPage1()
                    }}
                    color={"#C82026"}
                    width={widthPercentageToDP(90)}
                    children={stepTitle == 1 ? "Next" : "Save"}
                    borderRadius={10}
                />}
                {(stepTitle == 2 && !data?.sendPaymentLink) && <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: widthPercentageToDP(90) }}>
                    <Button
                        onPress={() => {
                            setStepTitle(1)
                        }}
                        color={"#C82026"}
                        width={widthPercentageToDP(40)}
                        children={"Previous"}
                        borderRadius={10}

                    />
                    <Button
                        onPress={() => {
                            validateSave()
                        }}
                        color={"#C82026"}
                        width={widthPercentageToDP(40)}
                        children={"Save"}
                        borderRadius={10}
                        loading={loading}
                    />
                </View>}
                {(data?.sendPaymentLink && data?.lead_status == 1) && <Button
                    onPress={() => {
                        validateSave()
                    }}
                    color={"#C82026"}
                    width={widthPercentageToDP(90)}
                    children={"Send payment link"}
                    borderRadius={10}
                    loading={loading}
                />}

            </ScrollView>
        </View>
    );
};

export default CreateLead;
const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: widthPercentageToDP(90),
        marginBottom: heightPercentageToDP(2)
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

});
