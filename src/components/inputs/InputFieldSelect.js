import { faAddressCard, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { Component, Fragment, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import SearchableDropdown from 'react-native-searchable-dropdown';


export const InputFieldSelect = (props) => {
    const [selectedItems, setSelectedItems] = React.useState([]);
    const width = props.width || widthPercentageToDP(80)
    const items = props.items || []
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
const required = props.required || false
const label = props.label || 'label'
const labelColor = props.labelColor || 'white'
const iconColor = props.iconColor || 'white'
const placeholder = props.placeholder || 'PlaceHolder'
const icon = props.icon || faArrowLeft
const message = props.message || ''
const onChangeText = props.onChangeText || (() => {});
const height = props.height || heightPercentageToDP(6)
const hideLeftIcon = props.hideLeftIcon || false
const error = props.error || false
const defaultValue = props.defaultValue || null
    return (
      <View style={{width:width,marginBottom:heightPercentageToDP(1)}}>
       <Text style={{color:labelColor,marginBottom:heightPercentageToDP(1)}}>
            {label}{required && <Text style={{color:'red'}}>*</Text>}
          </Text>
        <Dropdown
          style={[styles.dropdown, isFocus ? { borderColor: 'blue',height:height } : { height:height }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={items}
          search
          maxHeight={300}
          labelField="name"
          valueField="id"
          placeholder={!isFocus ? placeholder : '...'}
          searchPlaceholder="Search..."
          value={Number(defaultValue)||value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.id);
            setIsFocus(false);
            onChangeText(item.id)
          }}
          renderLeftIcon={() => (
            hideLeftIcon ? null :
         <FontAwesomeIcon icon={icon} color={iconColor} size={25} style={{marginHorizontal:10}} />
          )}
        />
        <View style={{flexDirection:'row',justifyContent:'flex-start',width:width,marginTop:heightPercentageToDP(1)}}>
        {error && <Text style={{color:'red'}}>{error}</Text>}
        </View>
        <Text>{message}</Text>
      </View>
    );

  
};

const styles = StyleSheet.create({
  dropdown: {
    marginBottom: heightPercentageToDP(1),
    borderColor: '#DDDDDD',
    borderWidth: 0.5,
    paddingHorizontal: 8,
    backgroundColor:"#fff",
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'gray',
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});