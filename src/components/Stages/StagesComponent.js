import { Text, View } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import Gstyle from "../../assets/styles/global";

const StagesComponent = ({data})=> {
    return (<View style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"white"
    }}>
      {data.map((item,key)=>{
        return (    <View style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: widthPercentageToDP(5),
          borderWidth: 0.5,
          borderColor: "#DDDDDD",
          width: widthPercentageToDP(22.5)
        }}>
          <Text>Stage {key}</Text>
          <Text style={[Gstyle.h3, {
            color: '#1B8346',
            marginTop: 5,
            fontWeight: 'bold'
          }]}>{item}</Text>
        </View>)
      })}
  
    </View>);
  }
export default StagesComponent;  