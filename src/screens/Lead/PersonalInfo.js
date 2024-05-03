import { ScrollView, Text, View } from "react-native";
import { InputField } from "../../components/inputs/InputField";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { faAddressCard, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Button } from "../../components/buttons/blackButton";
import { useFocusEffect } from "@react-navigation/native";

const PersonalInfo = (props) => {
    const [data, setData] = useState({});
    const item = props?.route?.params?.item
    useFocusEffect(
        React.useCallback(() => {
            const setDataInForm = async () => {
                setData({
                    name: item?.leadName,
                    mobile: item?.leadMobileNo,
                    alternate_mobile: item?.leadAlternateMobileNo,
                    driving_license: item?.leadContactDLNumber,
                    pan: item?.leadPanNumber,
                    aadhar: item?.leadAadharNumber
                })
            };
            setDataInForm();

            return () => {
                setData({});
            };
        }, [])
    );
    return (
        <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: heightPercentageToDP(5), backgroundColor: '#f2f2f2', height: heightPercentageToDP(100) }}>
            <ScrollView>

                <InputField
                    lable={"Driver Name"}
                    icon={faUser}
                    placeholder="Enter driver name"
                    defaultValue={data?.name}
                    onChangeText={(text) => { setData({ ...data, name: text }) }}
                    keyboardType="default"
                    returnKeyType="done"
                    placeholderTextColor="#838383"
                    iconColor="gray"
                    labelColor="#444"
                    width={widthPercentageToDP(90)}
                    required={true}
                />
                <InputField
                    lable={"Mobile Number"}
                    icon={faPhone}
                    placeholder="Enter mobile number"
                    defaultValue={data?.mobile}
                    onChangeText={(text) => { setData({ ...data, mobile: text }) }}
                    keyboardType="numeric"
                    returnKeyType="done"
                    placeholderTextColor="#838383"
                    iconColor="gray"
                    labelColor="#444"
                    width={widthPercentageToDP(90)}
                    required={true}
                />
                <InputField
                    lable={"Alternate Mobile Number (optional)"}
                    icon={faPhone}
                    placeholder="Enter alternate mobile number"
                    defaultValue={data?.alternate_mobile}
                    onChangeText={(text) => { setData({ ...data, alternate_mobile: text }) }}
                    keyboardType="numeric"
                    returnKeyType="done"
                    placeholderTextColor="#838383"
                    iconColor="gray"
                    labelColor="#444"
                    width={widthPercentageToDP(90)}
                />
                <InputField
                    lable={"Driving License  Number"}
                    icon={faAddressCard}
                    placeholder="Enter driving license number"
                    defaultValue={data?.driving_license}
                    onChangeText={(text) => { setData({ ...data, driving_license: text }) }}
                    keyboardType="default"
                    returnKeyType="done"
                    placeholderTextColor="#838383"
                    iconColor="gray"
                    labelColor="#444"
                    width={widthPercentageToDP(90)}
                />
                <InputField
                    lable={"PAN Number"}
                    icon={faAddressCard}
                    placeholder="Enter PAN number"
                    defaultValue={data?.pan}
                    onChangeText={(text) => { setData({ ...data, pan: text }) }}
                    keyboardType="default"
                    returnKeyType="done"
                    placeholderTextColor="#838383"
                    iconColor="gray"
                    labelColor="#444"
                    width={widthPercentageToDP(90)}
                />
                <InputField
                    lable={"Aadhar Number"}
                    icon={faAddressCard}
                    placeholder="Enter AADHAR number"
                    defaultValue={data?.aadhar}
                    onChangeText={(text) => { setData({ ...data, aadhar: text }) }}
                    keyboardType="default"
                    returnKeyType="done"
                    placeholderTextColor="#838383"
                    iconColor="gray"
                    labelColor="#444"
                    width={widthPercentageToDP(90)}
                />
                <Button
                    onPress={() => {
                    }}
                    color={"#C82026"}
                    width={widthPercentageToDP(90)}
                    children={"Save"}
                    borderRadius={10}
                    borderColor={"#C82026"}
                />
            </ScrollView>

        </View>
    );
};

export default PersonalInfo;