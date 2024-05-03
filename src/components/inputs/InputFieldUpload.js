import { faPhone, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import Gstyle from "@/assets/styles/global";

export const InputFieldUpload = (props) => {
    const lable = props.lable || "Lable";
    const icon = props.icon || faQuestion;
    const placeholder = props.placeholder || "PlaceHolder";
    const defaultValue = props.defaultValue || "";
    const onChangeText = props.onChangeText || (() => {});
    const keyboardType = props.keyboardType || "default";
    const returnKeyType = props.returnKeyType || "done";
    const placeholderTextColor = props.placeholderTextColor || "white";
    const iconColor = props.iconColor || "white";
    const labelColor = props.labelColor || "white";
    const width = props.width || widthPercentageToDP(80);
    const required = props.required || false;
    const color = props.color || "#DDDDDD";
    const rightIcon = props.rightIcon || false;
    const rightIconColor = props.rightIconColor || "white";
    const multipleLines = props.multipleLines || false;
    const hideLabel = props.hideLabel || false;
    const filterIcon = props.filterIcon || false;
    const optionInput = props.optionInput || false;
const height = props.height || heightPercentageToDP(6);
    return <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center',width:width,marginBottom:heightPercentageToDP(2)}} >
      {!hideLabel && <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between',width:width }}>
        <Text style={{color:labelColor,marginBottom:heightPercentageToDP(1),textAlign:'left'}}>{lable}{required && <Text style={{color:'red'}}>*</Text>}{optionInput && <Text style={[Gstyle.h6,{color:'#666666'}]}>{optionInput}</Text>}</Text>
        {rightIcon && <TouchableOpacity><FontAwesomeIcon icon={rightIcon} size={20} color={rightIconColor} style={{ marginLeft: 5 }} /></TouchableOpacity>}
      </View>}
      
        <View style={{ flexDirection: 'row', alignItems:multipleLines ? 'flex-start' : 'center',backgroundColor:'white',width:width,paddingHorizontal:widthPercentageToDP(5),height:multipleLines ? heightPercentageToDP(11.5) : height,borderRadius:5,borderColor:color,borderWidth:0.5,paddingTop:multipleLines ? heightPercentageToDP(1) : 0}}>
        <FontAwesomeIcon icon={icon} size={20} color={iconColor} style={{ marginRight: 5 }} />
          <TouchableOpacity style={{paddingLeft:widthPercentageToDP(2.5)}}>
          <Text>{placeholder}</Text>
          </TouchableOpacity>
{filterIcon && <TouchableOpacity>
        <FontAwesomeIcon icon={filterIcon} size={20} color={iconColor}  />
          </TouchableOpacity>}
          

        </View>
    </View>;
  }