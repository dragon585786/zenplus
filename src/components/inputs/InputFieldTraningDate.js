import { faCheck, faCross, faPhone, faQuestion, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import Gstyle from "@/assets/styles/global";
import { TrainingSlot } from "../../assets/data/data";

export const InputFieldTraningDate = (props) => {
    const lable = props.lable || "Lable";
    const labelColor = props.labelColor || "white";
    const width = props.width || widthPercentageToDP(80);
    const required = props.required || false;
    const color = props.color || "#DDDDDD";
    const multipleLines = props.multipleLines || false;
    const hideLabel = props.hideLabel || false;
    const data = props.data;
    const setData = props.setData;

    return <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center',width:width,marginBottom:heightPercentageToDP(2)}} >
      {!hideLabel && <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between',width:width }}>
        <Text style={{color:labelColor,marginBottom:heightPercentageToDP(1),textAlign:'left'}}>{lable}{required && <Text style={{color:'red'}}>*</Text>}</Text>
      </View>}
      
        <View style={{ flexDirection: 'row',flexWrap:'wrap', alignItems:'center',backgroundColor:'white',width:width,padding:widthPercentageToDP(5),borderColor:color,borderWidth:0.5}}>
        {data.map((item,key)=>{
          return(<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <TouchableOpacity style={styles.checkboxContainer} onPress={() => {
                let newData = [...data];
                newData[key].checked = !newData[key].checked;
                setData(newData);
              }}>
                        <View style={styles.checkbox}>
                            {item?.checked && <FontAwesomeIcon icon={faXmark} size={20} color={'#C82026'} />}
                        </View>
                        <Text style={[Gstyle.h5, {color:"#666666"}]}>{item?.start} - {item?.end}</Text>
                    </TouchableOpacity>
          </View>)
        })}
        </View>
    </View>;
  }

  const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: widthPercentageToDP(19),
        marginBottom: heightPercentageToDP(2),
        margin:1
    },
    checkbox: {
        width: 24,
        height: 24,
        // borderRadius: 12,
        borderWidth: 2,
        borderColor: '##7A7A7A',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },

});