import { faChevronRight, faPhone, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import {  StatusIndicatorLeadCard } from "../Label/Label";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

export const LeadCard = ({item}) => {
    // {name,zl,date,time,status}
    console.log("item==>", item);
    const navigation = useNavigation()
    return (
        <TouchableOpacity
        onPress={() => {navigation.navigate("LeadDetails", { title: `${item?.leadNumber} (${item?.leadName})`,item:item })}}
        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: heightPercentageToDP(1),width:widthPercentageToDP(90),padding:widthPercentageToDP(4),paddingHorizontal:widthPercentageToDP(5),backgroundColor:'#FFFFFF' }}>
            <View style={{padding:widthPercentageToDP(3),borderWidth:1,borderColor:'#C82026',borderRadius:50}}>
            <FontAwesomeIcon icon={faPhone} size={18} color={"#C82026"}  />
            </View>
            <View>
                <Text style={{ fontWeight: 'bold' }}>
                    {item?.leadName}
                </Text>
                <Text style={{color:'gray'}}>
                {item?.leadNumber}
                </Text>
            </View>
            <View>
                <Text style={{color:'gray'}}>
                {moment(item?.leadCreateDate).format('DD/MM/YYYY')}
                </Text>
                <Text style={{color:'gray'}}>
                {moment(item?.leadCreateDate).format('hh:mm A')}
                </Text>
            </View>
            <StatusIndicatorLeadCard status={item?.leadStatus} />
            <FontAwesomeIcon icon={faChevronRight} size={20} color={"#C8C8C8"}  />

        </TouchableOpacity>
    );
}