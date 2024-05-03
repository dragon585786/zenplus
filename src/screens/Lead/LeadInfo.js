import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { InputField } from "../../components/inputs/InputField";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { faAddressCard, faCalendarDays, faCheck, faCommentDots, faMicrophone, faPhone, faSitemap, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Button } from "../../components/buttons/blackButton";
import { InputFieldSelect } from "../../components/inputs/InputFieldSelect";
import { InputFieldDate } from "../../components/inputs/InputFieldDate";
import Gstyle from "../../assets/styles/global";
import { LeadChannel, LeadSource, LeadStatus, Status, UberStatus, schemeItems } from "../../assets/data/data";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { APIService } from "../../API/Service";
import { useFocusEffect } from "@react-navigation/native";

const LeadInfo = (props) => {
    const [datas, setDatas] = useState({});
    const [datasUber, setDatasUber] = useState({});
    const [data, setData] = useState({});
    const item = props?.route?.params?.item
    console.log("item--->", item);
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
                    setDatas({
                        ...datas,
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
            const setDataInForm = async () => {
                console.log("leadName===>",item?.leadName)
console.log("leadMobileNo===>",item?.leadMobileNo)
console.log("leadAlternateMobileNo===>",item?.leadAlternateMobileNo)
console.log("leadContactDLNumber===>",item?.leadContactDLNumber)
console.log("leadPanNumber===>",item?.leadPanNumber)
console.log("leadAadharNumber===>",item?.leadAadharNumber)
console.log("leadSchemeId===>",item?.leadSchemeId)
console.log("leadStatusId===>",item?.leadStatusId)
console.log("leadUberStatusId===>",item?.leadUberStatusId)
console.log("leadSourceId===>",item?.leadSourceId)
console.log("leadChannelId===>",item?.leadChannelId)
console.log("leadFollowUpDate===>",item?.leadFollowUpDate)
console.log("remark===>",item?.remark)
console.log("leadDepositDueAmount===>",item?.leadDepositDueAmount)
console.log("isPaymentLinkSent===>",item?.isPaymentLinkSent)
console.log("leadReferalCode===>",item?.leadReferalCode)
                try {
                    if (item?.leadStatusId == 1 || item?.leadStatusId == 2) {
                        getUberStatus(item?.leadStatusId,"useeffect")
                    } 
                    setData({
                        ...data,
                        name:item?.leadName,
                        mobile:item?.leadMobileNo,
                        alternate_mobile:item?.leadAlternateMobileNo,
                        driving_license:item?.leadContactDLNumber,
                        pan_number:item?.leadPanNumber,
                        aadhar_number:item?.leadAadharNumber,
                        scheme:item?.leadSchemeId,
                        lead_status:item?.leadStatusId,
                        uber_status:item?.leadUberStatusId,
                        lead_source:item?.leadSourceId,
                        lead_channel:item?.leadChannelId,
                        follow_up_date:item?.leadFollowUpDate || new Date(),
                        remark:item?.remark || "",
                        amount:item?.leadDepositDueAmount,
                        sendPaymentLink:item?.isPaymentLinkSent,
                        referral_code:item?.leadReferalCode,
                    })
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
               
            };
            setDataInForm();
         

            return () => {
                setData({});
                setDatas({});
            };
        }, [])
    );
    const getUberStatus = async (id,type) => {
        const response = await APIService.uberStatus(id);
        console.log("getUberStatus==>", response.data.payload);
        if(type=="useeffect"){
            setDatasUber({ ...datasUber, uberStatus: response.data?.payload })
        }else{
            setDatasUber({ ...datasUber, uberStatus: response.data?.payload })
            setData({ ...data, lead_status: id, sendPaymentLink: false, lead_source: "", uber_status: "", errorLeadStatus: "",uber_sub_status:"",amount:"",lead_channel:"",remark:"" })
        }
    }
    
    const setSubStatusId = (id) => {
        const selectedStatus = data?.uberStatus.find(item => item.id == id);
        setData({ ...data, uber_sub_status: selectedStatus?.subStatusId, uber_status: id,errorUberStatus: '' })
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
    "branchId": user?.userActiveBranchId||0,
    "leadName": data?.name || "",
    "mobileNumber": data?.mobile ? data?.mobile + "":"",
    "alternateMobileNumber": data?.alternate_mobile ? data?.alternate_mobile + "":"",
    "drivingLicenseNumber": data?.driving_license ? data?.driving_license + "":"",
    "panNumber": data?.pan_number || "",
    "aadharNumber": data?.aadhar_number||"",
    "leadSchemeId": data?.scheme || 0,
    "leadStatusId": data?.lead_status || 0,
    "uberStatusId": data?.uber_status || 0,
    "leadSubstatusId": data?.uber_sub_status || 0,
    "leadSourceId": data?.lead_source || 0,
    "leadChannelId": data?.lead_channel || 0,
    "followupDate": data?.follow_up_date ?  moment(data?.follow_up_date).format("YYYY-MM-DD HH:mm:ss") :"",
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
        const response = await APIService.updateLead(body);
        // console.log("response==>", response?.data);
        if (response?.data?.success) {
            Alert.alert('Success', 'Lead Created Successfully', [{ text: 'OK', onPress: () => {} }]);
        } else {
            Alert.alert('Error', response?.data?.message || 'Something went wrong', [{ text: 'OK', onPress: () => { } }]);
        }
    }
console.log("datas info leads====>", datas)
console.log("data info lead====>", data)
    return (
        <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: heightPercentageToDP(5), backgroundColor: '#f2f2f2', height: heightPercentageToDP(81.5) }}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
               <InputFieldSelect
                        onChangeText={(text) => { setData({ ...data, scheme: text, errorScheme: '' }) }}
                        width={widthPercentageToDP(90)}
                        items={datas?.schemeItems}
                        label={"Scheme"}
                        required={true}
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        placeholder="Select scheme"
                        icon={faAddressCard}
                        error={data?.errorScheme}
                        defaultValue={data?.scheme}

                    />
                    <InputFieldSelect
                        onChangeText={(text) => {
                            if (text == 1 || text == 2) {
                                getUberStatus(text,"onchange")
                            } else {
                                setData({ ...data, lead_status: text, sendPaymentLink: false, lead_source: null, uber_status: null, errorLeadStatus: null,uber_sub_status:"",amount:"",lead_channel:"",remark:"" })

                            }

                        }}
                        width={widthPercentageToDP(90)}
                        items={datas?.leadStatus}
                        label={"Lead Status"}
                        required={true}
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        placeholder="Select lead status"
                        icon={faAddressCard}
                        message={(data?.lead_status == 1 && <Text style={{ fontStyle: 'italic', }}>Deposit Amount to be paid by driver <Text style={{ color: 'black', fontWeight: 'bold' }}>Rs. 3000</Text></Text>)}
                        error={data?.errorLeadStatus}
                        defaultValue={data?.lead_status}
                    />
                    {
                        data?.lead_status == 1 && <InputFieldSelect
                            onChangeText={(text) => { 
                                // setData({ ...data, uber_status: text, errorUberStatus: '' }),
                                setSubStatusId(text) }}
                            width={widthPercentageToDP(90)}
                            items={datasUber?.uberStatus}
                            label={"Uber Status"}
                            required={true}
                            iconColor="#CFCFCF"
                            labelColor="#444"
                            placeholder="Select status"
                            icon={faAddressCard}
                            error={data?.errorUberStatus}
                            defaultValue={data?.uber_status}
                        />
                    }

                    {
                        (data?.lead_status == 2) && <InputFieldSelect
                            onChangeText={(text) => { setData({ ...data, status: text, errorStatus: '' }) }}
                            width={widthPercentageToDP(90)}
                            items={datas?.uberStatus}
                            label={"Status"}
                            required={true}
                            iconColor="#CFCFCF"
                            labelColor="#444"
                            placeholder="Select status"
                            icon={faAddressCard}
                            error={data?.errorStatus}
                            defaultValue={data?.status}
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
                            defaultValue={data?.amount + ""}
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
                            defaultValue={new Date(data?.follow_up_date)}
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
                            items={datas?.leadSource}
                            label={"Lead Source"}
                            required={true}
                            iconColor="#CFCFCF"
                            labelColor="#444"
                            placeholder="Select source"
                            icon={faAddressCard}
                            error={data?.errorLeadSource}
                            defaultValue={data?.lead_source}
                        />
                    }
                    {data?.lead_source == 1 && <InputField
                        lable={"Referral Code"}
                        icon={faSitemap}
                        placeholder="Enter Referral Code"
                        defaultValue={data?.referral_code}
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
                        defaultValue={data?.campion_code}
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
                        items={datas?.leadChannel}
                        label={"Lead Channel"}
                        required={true}
                        iconColor="#CFCFCF"
                        labelColor="#444"
                        placeholder="Select channel"
                        icon={faAddressCard}
                        error={data?.errorLeadChannel}
                        defaultValue={data?.lead_channel}
                    />}

                    {
                        (data?.lead_status == 1 || data?.lead_status == 3) && <InputField
                            lable={"Remark"}
                            icon={faCommentDots}
                            placeholder="Enter remark"
                            defaultValue={data?.remark}
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
                    {!data?.sendPaymentLink && <Button
                        onPress={() => {
                            validateSave()
                        }}
                        color={"#C82026"}
                        width={widthPercentageToDP(90)}
                        children={"Save"}
                        borderRadius={10}
                    />}
               {(data?.sendPaymentLink && data?.lead_status == 1) && <Button
                    onPress={() => {
                        validateSave()
                    }}
                    color={"#C82026"}
                    width={widthPercentageToDP(90)}
                    children={"Send payment link"}
                    borderRadius={10}
                />}
            </ScrollView>

        </View>
    );
};

export default LeadInfo;

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
