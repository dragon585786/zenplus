import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Gstyle from '../../assets/styles/global';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export const StepTitle = ({count}) => {
    return (
        <View style={{flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center',width:widthPercentageToDP(90),marginBottom:heightPercentageToDP(2)}}>
            <View style={{borderRadius:50,backgroundColor:1 <= count ?'black':'gray',width:widthPercentageToDP(5),height:widthPercentageToDP(5),justifyContent: 'center', alignItems: 'center',marginRight:widthPercentageToDP(2)}}>
                <Text style={{color:'white'}}>1</Text>
            </View>
            <Text style={[Gstyle.h4,{color:1 <= count ?'black':'gray'}]}>Personal Info</Text>
            <FontAwesomeIcon icon={faArrowRight} color={1 <= count ?'black':'gray'} size={20} style={{marginHorizontal:widthPercentageToDP(2)}}/>

            <View style={{borderRadius:50,backgroundColor:2 <= count ?'black':'gray',width:widthPercentageToDP(5),height:widthPercentageToDP(5),justifyContent: 'center', alignItems: 'center',marginRight:widthPercentageToDP(2)}}>
                <Text style={{color:'white'}}>2</Text>
            </View>
            <Text style={[Gstyle.h4,{color:2 <= count ?'black':'gray'}]}>Lead Info</Text>
            {2 < count && <FontAwesomeIcon icon={faArrowRight} color={'black'} size={20} style={{marginHorizontal:widthPercentageToDP(2)}}/>}
        </View>
    )
}
