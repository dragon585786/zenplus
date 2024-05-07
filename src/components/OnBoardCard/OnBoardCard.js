import { faChevronRight, faPhone, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { StatusIndicator, StatusIndicatorLeadCard, StatusIndicatorOnboard, StatusIndicatorOnboardCard } from "../Label/Label";
import { useNavigation } from "@react-navigation/native";

export const OnBoardCard = ({ name, zl, date, time, status }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => { navigation.navigate("LeadDetailsUpdate", { title: `${zl} (${name})`, status: status }) }}
            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: heightPercentageToDP(1), width: widthPercentageToDP(90), padding: widthPercentageToDP(4), paddingHorizontal: widthPercentageToDP(5), backgroundColor: '#FFFFFF' }}>
            <View style={{ padding: widthPercentageToDP(3), borderWidth: 1, borderColor: '#C82026', borderRadius: 50 }}>
                <FontAwesomeIcon icon={faPhone} size={18} color={"#C82026"} />
            </View>
            <View>
                <Text style={{ fontWeight: 'bold', color: '#3B3B43' }}>
                    {name}
                </Text>
                <Text style={{ color: 'gray' }}>
                    {zl}
                </Text>
            </View>
            <View>
                <Text style={{ color: 'gray' }}>
                    {date}
                </Text>
                <Text style={{ color: 'gray' }}>
                    {time}
                </Text>
            </View>
            <StatusIndicatorOnboardCard status={status} />
            <FontAwesomeIcon icon={faChevronRight} size={20} color={"#C8C8C8"} />

        </TouchableOpacity>
    );
}