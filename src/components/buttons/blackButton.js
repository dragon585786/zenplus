import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
export const Button = (props) => {
    const { buttonStyle, textStyle } = styles;
    const colorStart = props.colorStart || "#C82026";
    const colorEnd = props.colorEnd || "#88080D";
    const width = props.width || widthPercentageToDP(80);
    const borderRadius = props.borderRadius || 0;
const textColor = props.textColor || "white";
const borderColor = props.borderColor || "#C82026";
const height = props.height || heightPercentageToDP(6);
    return (
     <TouchableOpacity onPress={props.onPress}>
    <LinearGradient 
    colors={[colorStart, colorEnd]}
    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
     style={[buttonStyle,{width:width,borderRadius:borderRadius,borderColor:borderColor,borderWidth:1,height:height}]}>
            <Text style={[textStyle,{color:textColor}]}>{props.children}</Text>
  </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        padding: 10,
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 20,
        alignSelf: 'center',
    },
};
