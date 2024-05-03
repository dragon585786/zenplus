import { faPhone, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import Gstyle from "@/assets/styles/global";

export const InputField = (props) => {
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
    const hideLeftIcon = props.hideLeftIcon || false;
    const borderRadius = props.borderRadius || 0;
    const error = props.error || false;

    return <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center',width:width,marginBottom:heightPercentageToDP(2)}} >
      {!hideLabel && <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between',width:width }}>
        <Text style={{color:labelColor,marginBottom:heightPercentageToDP(1),textAlign:'left'}}>{lable}{required && <Text style={{color:'red'}}>*</Text>}</Text>
        {rightIcon && <TouchableOpacity><FontAwesomeIcon icon={rightIcon} size={20} color={rightIconColor} style={{ marginLeft: 5 }} /></TouchableOpacity>}
      </View>}
      
        <View style={{ flexDirection: 'row', alignItems:multipleLines ? 'flex-start' : 'center',backgroundColor:'white',width:width,paddingHorizontal:widthPercentageToDP(5),height:multipleLines ? heightPercentageToDP(11.5) : heightPercentageToDP(6),borderColor:color,borderWidth:0.5,paddingTop:multipleLines ? heightPercentageToDP(1) : 0,borderRadius:borderRadius}}>
        {!hideLeftIcon && <FontAwesomeIcon icon={icon} size={20} color={iconColor} style={{ marginRight: 5 }} />}
        
        <TextInput
          style={[Gstyle.h4, { paddingLeft: 10,width:widthPercentageToDP(70)}]}
          placeholder={placeholder}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          placeholderTextColor={placeholderTextColor}
          defaultValue={defaultValue}
          onChangeText={onChangeText}
          multiline={multipleLines}
          numberOfLines={multipleLines ? 4 : 1}
          height={multipleLines ? heightPercentageToDP(10) : heightPercentageToDP(5)}
          />
{filterIcon && <TouchableOpacity>
        <FontAwesomeIcon icon={filterIcon} size={20} color={iconColor}  />
          </TouchableOpacity>}
          

        </View>
        <View style={{flexDirection:'row',justifyContent:'flex-start',width:width,marginTop:heightPercentageToDP(1)}}>
        {error && <Text style={{color:'red'}}>{error}</Text>}
        </View>
    </View>;
  }