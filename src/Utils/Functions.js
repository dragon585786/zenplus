// import { Alert, Image, Linking, PermissionsAndroid, Platform, ToastAndroid, useColorScheme, View } from "react-native";
// import Geolocation from "@react-native-community/geolocation";
// export const getCurrentLocation = () =>
//     new Promise((resolve, reject) => {
//         Geolocation.getCurrentPosition(
//             position => {
//                 const cords = {
//                     latitude: position.coords.latitude,
//                     longitude: position.coords.longitude,
//                     heading: position?.coords?.heading,
//                 };
//                 console.log("current location ===>", position.coords)
//                 resolve(cords);
//             },
//             error => {
//                 reject(error.message);
//             },
//             { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
//         )
//     })

import { Alert, Linking, PermissionsAndroid, Platform } from "react-native";
import Geolocation from "@react-native-community/geolocation";

export const getCurrentLocation = () =>
    new Promise(async (resolve, reject) => {
        try {
            if (Platform.OS === 'android') {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: 'Geolocation Permission',
                            message: 'To continue, turn on device location which uses Google’s location services.',
                            // buttonNeutral: 'Ask Me Later',
                            // buttonNegative: 'Cancel',
                            buttonPositive: 'OK',
                        },
                    );

                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        console.log('Location permission granted. You can now use Geolocation.');
                        Geolocation.getCurrentPosition(
                            position => {
                                const cords = {
                                    latitude: position.coords.latitude,
                                    longitude: position.coords.longitude,
                                    heading: position?.coords?.heading,
                                };
                                console.log("current location ===>", position.coords)
                                resolve(cords);
                            },
                            error => {
                                reject(error.message);
                            },
                            { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 },
                        );
                        return true;
                    } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
                        console.log('Location permission denied, and user selected "Never Ask Again".');
                        // Show an alert explaining the necessity of location permission and guide the user to settings
                        Alert.alert(
                            'Location Permission Required',
                            'To use this app, please enable location services in your device settings.',
                            [
                                {
                                    text: 'OK',
                                    onPress: () => {
                                        // Redirect the user to app settings
                                        if (Platform.OS === 'android') {
                                            Linking.openSettings();
                                        }
                                    },
                                },
                            ],
                        );
                        return false;
                    } else {
                        console.log('Location permission denied.');
                        // Show an alert informing the user about the necessity of location permission
                        Alert.alert(
                            'Location Permission Required',
                            'To use this app, please grant location access.',
                            [
                                {
                                    text: 'OK',
                                    onPress: () => {
                                        // Close the app
                                        if (Platform.OS === 'android') {
                                            Linking.openSettings();
                                        }
                                    },
                                },
                            ],
                        );
                        return false;
                    }
                } catch (err) {
                    console.error('Error requesting location permission:', err);
                    return false;
                }
            } else {
                Geolocation.getCurrentPosition(
                    position => {
                        const cords = {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            heading: position?.coords?.heading,
                        };
                        console.log("current location ===>", position.coords)
                        resolve(cords);
                    },
                    error => {
                        reject(error.message);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
                );
            }
        } catch (error) {
            console.error('Error getting current location:', error);
            reject(error.message);
        }
    });


