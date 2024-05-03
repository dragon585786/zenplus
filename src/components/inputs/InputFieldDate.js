import { faPhone, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import Gstyle from "@/assets/styles/global";
import React from "react";
import DatePicker from '@react-native-community/datetimepicker';
export const InputFieldDate = (props) => {
  const lable = props.lable || "Label";
  const icon = props.icon || faQuestion;
  const onChangeText = props.onChangeText || (() => {});
  const iconColor = props.iconColor || "white";
  const labelColor = props.labelColor || "white";
  const width = props.width || widthPercentageToDP(80);
  const required = props.required || false;
  const color = props.color || "#DDDDDD";
  const rightIcon = props.rightIcon || false;
  const rightIconColor = props.rightIconColor || "white";
  const multipleLines = props.multipleLines || false;
  const height = props.height || heightPercentageToDP(6);

  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [toggle, setToggle] = React.useState(false);
  const error = props.error || false;
  const defaultValue = props.defaultValue || null;


  return (
    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", width: width, marginBottom: heightPercentageToDP(2) }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: width }}>
        <Text style={{ color: labelColor, marginBottom: heightPercentageToDP(1), textAlign: "left" }}>{lable}{required && <Text style={{ color: "red" }}>*</Text>}</Text>
        {rightIcon && <TouchableOpacity onPress={() => setOpen(true)}><FontAwesomeIcon icon={rightIcon} size={20} color={rightIconColor} style={{ marginLeft: 5 }} /></TouchableOpacity>}
      </View>
      <View style={{ flexDirection: "row", alignItems: multipleLines ? "flex-start" : "center", backgroundColor: "white", width: width, paddingHorizontal: widthPercentageToDP(5), height: multipleLines ? heightPercentageToDP(11.5) : height, borderRadius: 5, borderColor: color, borderWidth: 0.5, paddingTop: multipleLines ? heightPercentageToDP(1) : 0 }}>
        <FontAwesomeIcon icon={icon} size={20} color={iconColor} style={{ marginRight: 5 }} />
        <TouchableOpacity onPress={() => setToggle(!toggle)} style={{ flex: 1 }}>
          <Text style={[Gstyle.h4, { paddingLeft: 8 }]}>{defaultValue ? defaultValue.toLocaleDateString() : selectedDate.toLocaleDateString()}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',justifyContent:'flex-start',width:width,marginTop:heightPercentageToDP(1)}}>
        {error && <Text style={{color:'red'}}>{error}</Text>}
        </View>
      {toggle && (
        <View style={{marginTop:heightPercentageToDP(1)}}>
        <DatePicker
          value={defaultValue || selectedDate}
          mode="datetime"
          display="calendar"
          onChange={(event, date) => {
            setOpen(false);
            setToggle(false);
            if (date) {
              setSelectedDate(date);
              onChangeText(date);
            }
          }}
        />
        </View>
      )}
    </View>
  );
};
