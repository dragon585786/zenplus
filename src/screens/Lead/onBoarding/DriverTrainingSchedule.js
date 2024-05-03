import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { faAddressCard, faCalendarDays, faCheck, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { InputFieldSelect } from "../../../components/inputs/InputFieldSelect";
import { RefundReason, Status, TrainingSlot } from "../../../assets/data/data";
import Gstyle from "../../../assets/styles/global";
import { Button } from "../../../components/buttons/blackButton";
import { InputFieldDate } from "../../../components/inputs/InputFieldDate";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { InputFieldTraningDate } from "../../../components/inputs/InputFieldTraningDate";

const DriverTrainingSchedule = (props) => {
    const [data, setData] = useState({});
    const [dataTrainingSlot, setDataTrainingSlot] = useState(TrainingSlot);
  return (
      <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: heightPercentageToDP(5),backgroundColor:'#f2f2f2',height:heightPercentageToDP(100) }}>
        <ScrollView>

        <View style={{flexDirection:"column",justifyContent:"space-between",alignItems:"center",height:heightPercentageToDP(75)}}>
<View>
        <View style={{ backgroundColor: 'white', padding: widthPercentageToDP(5), width: widthPercentageToDP(90),borderWidth:0.5,borderColor:'#DDDDDD',marginBottom:heightPercentageToDP(2) }}>
          
                <View style={{ marginTop: heightPercentageToDP(0), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ color: 'gray' }}>Scheduled Training Date<Text style={{ color: 'red' }}>*</Text></Text>
                        <Text style={[Gstyle.h4, Gstyle.black]}>23/04/2024</Text>
                    </View>
                    <View>
                        <Text style={{ color: 'gray' }}>Scheduled Training Slot<Text style={{ color: 'red' }}>*</Text></Text>
                        <Text style={[Gstyle.h4, Gstyle.black]}>6-7</Text>
                    </View>
                </View>
              
            </View>
            <TouchableOpacity style={styles.checkboxContainer} onPress={() => { setData({ ...data, reschedule_traning: !data?.reschedule_traning }) }}>
                        <View style={styles.checkbox}>
                            {data?.reschedule_traning && <FontAwesomeIcon icon={faCheck} size={20} color={'#C82026'} />}
                        </View>
                        <Text style={[Gstyle.h5, {color:"#666666"}]}>Reschedule Training</Text>
                    </TouchableOpacity>
            <InputFieldDate
                            lable={"New Schedule Training Date"}
                            icon={faCalendarDays}
                            placeholder="New Schedule Training Date"
                            defaultValue=""
                            onChangeText={(text) => { setData({ ...data, reschedule_date: text }) }}
                            keyboardType="default"
                            returnKeyType="done"
                            placeholderTextColor="#838383"
                            iconColor="gray"
                            labelColor="#444"
                            width={widthPercentageToDP(90)}
                            required={true}
                        />
        <InputFieldTraningDate
                        lable={"New Schedule Training Slot"}
                        setData={setDataTrainingSlot}
                        data={dataTrainingSlot}
                        placeholderTextColor="#838383"
                        iconColor="#C82026"
                        labelColor="#444"
                        width={widthPercentageToDP(90)}
                        required={true}
                    />
</View>

                     <Button
                        onPress={() => {
                        }}
                        color={"#C82026"}
                        width={widthPercentageToDP(90)}
                        children={"Send Refund Request"}
                        borderRadius={10}
                    />
        </View>
        </ScrollView>


                </View>
  );
};

export default DriverTrainingSchedule;

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