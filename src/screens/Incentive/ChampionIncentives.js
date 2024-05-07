import { Text, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import Gstyle from "../../assets/styles/global";
import { SchemeTableData, Stages } from "../../assets/data/data";
import StagesComponent from "../../components/Stages/StagesComponent";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { SchemeTable } from "../../components/Table/SchemeTable";

const ChampionIncentives = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', padding: widthPercentageToDP(5), backgroundColor: "#f2f2f2" }}>
      <Text style={{ color: "#333333" }}>Scheme - <Text style={{ color: '#C82026' }}>04/01/2024 to 30/04/2024</Text></Text>
      <View style={{ marginBottom: heightPercentageToDP(2) }} />
      <ProgressBar
        progress={50}
        label={'36(Rs. 15,000)'}
        start={"0"}
        end={"80"}
        labelTop={'Handover'}
        labelBottom={'Amount'}
        total={'40,000'}
        title={"Earning"}
        color={'#333333'}
      />
      <StagesComponent data={Stages} />
      <SchemeTable data={SchemeTableData} />
      <View style={{ flexDirection: "row", width: widthPercentageToDP(90), justifyContent: "center", alignItems: 'center', marginTop: heightPercentageToDP(2) }}>
        <Text style={[Gstyle.h3, { textAlign: 'center', color: "#3B3B43" }]}>Each handover : INR 5,000</Text>
      </View>
    </View>
  );
};

export default ChampionIncentives;

