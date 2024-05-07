// create a screen for otp
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ImageBackground, TextInput, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Gstyle from '@/assets/styles/global';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { Button } from '../../components/buttons/blackButton';
import OtpInputs from "react-native-otp-inputs";
import { UserContext } from '../../contextAPI/context';
import { APIService } from '../../API/Service';
import { LocalStorage } from '../../Utils/LocalStorage';
import { getCurrentLocation } from '../../Utils/Functions';

const OtpScreen = (props) => {
  console.log("props==>", props?.route?.params?.data);
  const OTP = props?.route?.params?.data?.otp + "" || ""
  const mobile = props?.route?.params?.data?.mobile || ""
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const [loading, setLoading] = useState(false)
  const [currentLocation, setCurrentLocation] = useState({})
  useEffect(() => {
    const getLocation = async () => {
      let currentLocationn = await getCurrentLocation()
      setCurrentLocation(currentLocationn)
    }
    getLocation()
  }, [])
  console.log("currentLocation==>", currentLocation);
  const handleSendAgain = async () => {
    const re = /^[6-9]\d{9}$/;
    if (re.test(mobile)) {
      const body = {
        userName: mobile
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
      datas.mobile = mobile

      props.navigation.navigate('Otp', { data: datas });

    }
    else {
      Alert.alert("Please enter valid mobile number");
    }
    return

  }
  const handleValidateOtp = async () => {
    if (!currentLocation?.latitude) {
      currentLocation = await getCurrentLocation()
      return
    }
    const body = {
      userName: mobile + "",
      otp: props?.route?.params?.data?.otp,
      sessionId: props?.route?.params?.data?.sessionId,
      assetTypeId: 2,
      imei: "",
      applicationTypeTd: 2,
      applicationName: "Mobile",
      applicationVersion: "1.0",
      osVersion: "",
      make: 2024,
      model: "Plexitech",
      mfgName: "Plexitech.com",
      dataState: "",
      geolocationStatus: "",
      firebaseToken: "",
      latitude: currentLocation?.latitude,
      longitude: currentLocation?.longitude,
    }
    const response = await APIService.validateOtp(body)
    if (!response?.data?.success) {
      Alert.alert("Error", "Failed to Login");
      return;
    }
    console.log("login ho gaya")
    await LocalStorage.set("user", response?.data?.payload)
    await LocalStorage.set("loggedIn", true)
    setLoggedIn(true);

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
          <Text style={[Gstyle.h1, Gstyle.black]}>ENTER OTP</Text>
          <Text style={[Gstyle.h4, Gstyle.black, { fontWeight: 'bold' }]}>Enter 6 digit code has been send to {`*`.repeat(mobile.length - 5) + mobile.substring(mobile.length - 5)}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ height: heightPercentageToDP(10) }}>
            <OtpInputs
              autoFocus
              clearTextOnFocus
              blurOnSubmit={false}
              handleChange={(code) => {
                if (code.length === 6) {
                  // setLoggedIn(true);
                  console.log("code==>", code);
                  props?.route?.params?.data?.otp == code ? handleValidateOtp() : Alert.alert("Invalid OTP")
                }
              }}
              defaultValue={OTP}
              numberOfInputs={6}
              containerStyle={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: widthPercentageToDP(10),
              }}
              inputStyles={{
                width: heightPercentageToDP(5.7),
                height: heightPercentageToDP(6.5),
                // backgroundColor: "#eeeeee",
                // borderRadius: heightPercentageToDP(0.75),
                textAlign: "center",
                marginHorizontal: widthPercentageToDP(0.5),
                borderBottomColor: '#C82026',
                borderBottomWidth: 2,
                color: "black",
                fontSize: 24,
                fontWeight: 'bold'
              }}
            />
          </View>
          <View style={{ paddingVertical: heightPercentageToDP(0.1) }} />
          <Button
            onPress={() => {
              handleValidateOtp()
            }}
            children="LOGIN"
            loading={loading}
          />
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={[Gstyle.p, { color: "#121212" }]}>I haven't received anything
            </Text>
            <TouchableOpacity
              onPress={() => handleSendAgain()}
            >
              <Text style={[Gstyle.p, { color: "#C82026", textDecorationLine: "underline" }]}>Resend OTP </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[Gstyle.p, { color: "#838383CC" }]}>Powered by PLEXITECH</Text>
        <Text style={[Gstyle.p, { color: "#838383CC" }]}>© Copyright 2024 ZENPLUS FLEET. Privacy Policy</Text>
      </View>
    </View>
  </ScrollView>
  );
}
export default OtpScreen

