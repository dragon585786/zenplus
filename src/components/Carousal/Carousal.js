import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Carousel from 'react-native-snap-carousel';
import Gstyle from '../../assets/styles/global';

const MyCarousel = ({ entries, sliderWidth, itemWidth }) => {
    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide}>
                <View style={{ width: widthPercentageToDP(45) }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: "baseline" }}>
                        <Text style={[styles.subtitle, Gstyle.h1]}>{item.number}</Text>
                        <Text style={{ color: "gray" }}>{item.page}</Text>
                    </View>
                </View>
                <Image source={item.image} style={{ width: widthPercentageToDP(40), resizeMode: 'contain', height: widthPercentageToDP(29), marginBottom: -8, marginTop: -1 }} />
            </View>
        );
    };

    return (
        <View style={{ height: heightPercentageToDP(13) }}>
            <Carousel
                data={entries}
                renderItem={_renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
            />
        </View>
    );
};

export default MyCarousel;

const styles = StyleSheet.create({
    slide: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 15,
        paddingHorizontal: 20,
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 9.84,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        // margin: 10,
        color: '#C82026'
    },
    subtitle: {
        // margin: 10,
        marginRight: 10,
        color: '#000'

    },
});

