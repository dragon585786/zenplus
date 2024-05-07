import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput, Image, ScrollView, Alert } from 'react-native';
import Gstyle from '@/assets/styles/global';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faPhone } from '@fortawesome/free-solid-svg-icons';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { InputField } from '../../components/inputs/InputField';
import { Button } from '../../components/buttons/blackButton';
import { APIService } from '../../API/Service';
import { LocalStorage } from '../../Utils/LocalStorage';
const SignInScreen = (props) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const handleSubmit = async () => {
    const re = /^[6-9]\d{9}$/;
    if (re.test(data?.mobile)) {
      const body = {
        userName: data?.mobile
      }
      setLoading(true)
      const response = await APIService.authenticateOtp(body)
      setLoading(false)
      if (!response?.data?.success) {
        Alert.alert("Error", "Failed to send OTP");
        return;
      }
      LocalStorage.set("sessionId", response?.data?.payload?.sessionId)
      let datas = response?.data?.payload
      datas.mobile = data?.mobile

      props.navigation.navigate('Otp', { data: datas });

    }
    else {
      Alert.alert("Please enter valid mobile number");
    }
    return

  }
  return (<ScrollView>
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        paddingVertical: heightPercentageToDP(1),
        backgroundColor: '#f7f7f7',
      }}
    // source={require('@/assets/images/bgImg.png')}
    >
      <View style={{ paddingTop: heightPercentageToDP(10), justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('@/assets/images/zpluslogo.png')} style={{ width: widthPercentageToDP(45), height: heightPercentageToDP(12), resizeMode: 'contain' }} />
        <View style={{ width: widthPercentageToDP(100) }}>
          <Image source={require('@/assets/images/car.png')} style={{ width: widthPercentageToDP(100), height: heightPercentageToDP(36), resizeMode: 'stretch', alignSelf: "flex-end" }} />
        </View>
        <View style={[{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: heightPercentageToDP(1) }]}>
          <Text style={[Gstyle.h1, Gstyle.black]}>Welcome</Text>
          <Text style={[Gstyle.h4, Gstyle.black, { fontWeight: 'bold' }]}>Enter Your Mobile Number</Text>
          <Text style={[Gstyle.h4, { color: "#656565" }]}>we will send you a conformation code</Text>
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: heightPercentageToDP(0.5), marginHorizontal: widthPercentageToDP(5) }}>
          <InputField
            lable={"Mobile"}
            icon={faPhone}
            placeholder="Enter mobile number"
            defaultValue=""
            onChangeText={(text) => { setData({ ...data, mobile: text }) }}
            keyboardType="numeric"
            returnKeyType="done"
            placeholderTextColor="#838383"
            iconColor="gray"
            labelColor="gray"

          />

          <View style={{ paddingVertical: heightPercentageToDP(1) }} />
          <Button
            onPress={() => {
              handleSubmit()
            }}
            children="SEND OTP"
            color={"#C82026"}
            loading={loading}
          />
        </View>
      </View>

      <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[Gstyle.p, { color: "#838383CC" }]}>Powered by PLEXITECH</Text>
        <Text style={[Gstyle.p, { color: "#838383CC" }]}>© Copyright 2024 ZENPLUS FLEET. Privacy Policy</Text>
      </View>
    </View>
  </ScrollView>
  );
};
export default SignInScreen;