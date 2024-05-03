import { Text, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

export const SchemeTable = ({data}) =>{
    return (<View>
      <View style={{
        marginVertical: heightPercentageToDP(2),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: widthPercentageToDP(90)
      }}>
        <Text style={{
          width: widthPercentageToDP(22.5),
          color: '#666666',
          textAlign: "center"
        }}>Scheme</Text>
        <Text style={{
          width: widthPercentageToDP(22.5),
          color: '#666666',
          textAlign: "center"
        }}>Trips</Text>
        <Text style={{
          width: widthPercentageToDP(22.5),
          color: '#666666',
          textAlign: "center"
        }}>Days</Text>
        <Text style={{
          width: widthPercentageToDP(22.5),
          color: '#666666',
          textAlign: "center"
        }}>Reward</Text>
      </View>
      {data.map((item,key)=>{
          return(   <View style={{
            marginVertical: heightPercentageToDP(0.5),
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: widthPercentageToDP(90),
            borderWidth: 0.5,
            borderColor: '#DDDDDD',
            padding: widthPercentageToDP(4.5),
            backgroundColor:"white"
          }}>
            <Text style={{
              width: widthPercentageToDP(22.5),
              color: '#3B3B43',
              textAlign: "center",
              fontWeight: 'bold'
            }}>{item?.scheme}</Text>
            <Text style={{
              width: widthPercentageToDP(22.5),
              color: '#3B3B43',
              textAlign: "center",
              fontWeight: 'bold'
            }}>{item?.trips}</Text>
            <Text style={{
              width: widthPercentageToDP(22.5),
              color: '#3B3B43',
              textAlign: "center",
              fontWeight: 'bold'
            }}>{item?.days}</Text>
            <Text style={{
              width: widthPercentageToDP(22.5),
              color: '#3B3B43',
              textAlign: "center",
              fontWeight: 'bold'
            }}>{item?.reward}</Text>
          </View>)
      })}
   
    </View>);
  }