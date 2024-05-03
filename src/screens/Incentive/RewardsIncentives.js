import { ScrollView, Text, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import Gstyle from "../../assets/styles/global";
import { SchemeTableData, Stages, dataRewards } from "../../assets/data/data";
import StagesComponent from "../../components/Stages/StagesComponent";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { SchemeTable } from "../../components/Table/SchemeTable";

const RewardsIncentives = () => {
  return (
    <ScrollView style={{height:heightPercentageToDP(100)}}>

    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', padding: widthPercentageToDP(5), backgroundColor: "#f2f2f2" }}>
      <Text>Scheme - <Text style={{ color: '#C82026' }}>04/01/2024 to 30/04/2024</Text></Text>
      <View style={{ marginBottom: heightPercentageToDP(1) }} />
    
     { dataRewards.map((item, index) => (
        <View key={index} style={{marginVertical:heightPercentageToDP(1)}}>
          <ProgressBar
            {...item}
          />
        </View>
      ))}
    </View>
    </ScrollView>

  );
};

export default RewardsIncentives;

