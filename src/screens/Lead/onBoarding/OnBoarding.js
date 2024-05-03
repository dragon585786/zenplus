import { faFilter, faMagnifyingGlass, faPhoneFlip, faSliders } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import { InputField } from '../../../components/inputs/InputField';
import { LeadsData, LeadsDataOnboard } from '../../../assets/data/data';
import { OnBoardCard } from '../../../components/OnBoardCard/OnBoardCard';
import { StatusLabel, StatusLabelOnBoard } from '../../../components/Label/StatusLabel';

const OnBoarding = (props) => {
    const [data, setData] = useState({});
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: widthPercentageToDP(5),backgroundColor:'#f2f2f2' }}>
            {/* search with filter  */}
            <InputField
                icon={faMagnifyingGlass}
                placeholder="Search lead"
                defaultValue=""
                onChangeText={(text) => { setData({ ...data, name: text }) }}
                keyboardType="default"
                returnKeyType="done"
                placeholderTextColor="#B3BACA"
                iconColor="#B4BDCC"
                labelColor="#444"
                width={widthPercentageToDP(90)}
                hideLabel={true}
                filterIcon={faSliders}
                borderRadius={10}
            />
            <StatusLabelOnBoard />

            <ScrollView>
                <FlatList
                    data={LeadsDataOnboard}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => <OnBoardCard {...item} />}
                />
            </ScrollView>
        </View>
    );
};

export default OnBoarding;



