import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { faAddressCard, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { InputFieldSelect } from "../../../components/inputs/InputFieldSelect";
import { RefundReason, Status } from "../../../assets/data/data";
import Gstyle from "../../../assets/styles/global";
import { Button } from "../../../components/buttons/blackButton";

const PersonalInfoDetails = (props) => {
    const [data, setData] = useState({});
  return (
      <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: heightPercentageToDP(5),backgroundColor:'#f2f2f2',height:heightPercentageToDP(100) }}>
        <ScrollView>

        <View style={{flexDirection:"column",justifyContent:"space-between",alignItems:"center",height:heightPercentageToDP(75)}}>
<View>
        <View style={{ backgroundColor: 'white', padding: widthPercentageToDP(5), width: widthPercentageToDP(90),borderWidth:0.5,borderColor:'#DDDDDD',marginBottom:heightPercentageToDP(2) }}>
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
                   
                </View>
            </View>

            <InputFieldSelect
                            onChangeText={(text) => { setData({ ...data, status: text }) }}
                            width={widthPercentageToDP(90)}
                            items={RefundReason}
                            label={"Reason for refund"}
                            iconColor="gray"
                            labelColor="#444"
                            placeholder="Select reason"
                            icon={faAddressCard}
                            hideLeftIcon={true}
                        />
</View>

                     <Button
                        onPress={() => {
                        }}
                        color={"#C82026"}
                        width={widthPercentageToDP(90)}
                        children={"Send Refund request"}
                        borderRadius={10}
                    />
        </View>
        </ScrollView>


                </View>
  );
};

export default PersonalInfoDetails;