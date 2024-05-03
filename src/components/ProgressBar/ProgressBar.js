import { Text, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import Gstyle from "../../assets/styles/global";
import ProgressBarClassic from 'react-native-progress-bar-classic';
const ProgressBar = (props)=> {
   
   const progress = props.progress || 0;
   const lable = props.label || "";   
   const start = props.start || "";
   const end = props.end || "";
   const labelTop = props.labelTop || "";
   const labelBottom = props.labelBottom || "";
   const total = props.total || "";
   const color = props.color || "#333333";
   const title = props.title || "";
   const totalStart = props.totalStart || '';
   const barColor = props.barColor || "#27AE60";


    return (<View style={{
      width: widthPercentageToDP(90),
      borderWidth: 0.5,
      borderColor: "#DDDDDD",
      padding: widthPercentageToDP(5),
backgroundColor:"white"
    }}>
      <Text style={[Gstyle.h3,{color:color}]}>{title}</Text>
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:'center',marginVertical:10}}>
        <Text>{start}</Text>
        <Text style={{color:'#666666'}}>{labelTop}</Text>
        <Text>{end}</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:'center',backgroundColor:"#EAEAEA",height:heightPercentageToDP(3),borderRadius:50,marginBottom:10}}>
      <View style={{width:`${progress}%`,flexDirection:"row",justifyContent:"flex-end",alignItems:'center',backgroundColor:barColor,height:heightPercentageToDP(3),borderRadius:50}}>
        <Text style={{marginRight:10,color:'white'}}>{lable}</Text>
        </View>
      </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:'center'}}>
            <Text>{totalStart}</Text>
        <Text>{total}</Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:"center",alignItems:'center'}}>
        <Text style={{color:'#666666'}}>{labelBottom}</Text>
        </View>

    </View>);
  }

  export default ProgressBar;