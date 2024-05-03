import { faFilter, faMagnifyingGlass, faPhoneFlip, faSliders } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { InputField } from '../../components/inputs/InputField';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import Gstyle from '../../assets/styles/global';
import { LeadCard } from '../../components/LeadCard/LeadCard';
import { LeadsData } from '../../assets/data/data';
import { StatusLabel } from '../../components/Label/StatusLabel';
import { useFocusEffect } from '@react-navigation/native';
import { APIService } from '../../API/Service';




const Leads = (props) => {
    const [data, setData] = useState({});
    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async () => {
                try {
                    const [leadLeadRes] = await Promise.all([
                        APIService.leadList(),
                    ]);
                    setData({
                        leadList: leadLeadRes?.data?.payload,
                    });
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchData();
    
            return () => {
               setData({});
            };
        }, [])
    );

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: widthPercentageToDP(5), backgroundColor: '#f2f2f2' }}>
            <StatusLabel />
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
                <FlatList
                    data={data?.leadList || []}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <LeadCard item={item} />}
                />
        </View>
    );
};

export default Leads;



