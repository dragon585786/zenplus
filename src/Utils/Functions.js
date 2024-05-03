// import { showMessage } from "react-native-flash-message"
// import { PermissionsAndroid, Platform } from "react-native";
import Geolocation from "@react-native-community/geolocation";
export const getCurrentLocation = () =>
    new Promise((resolve, reject) => {
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
        )
    })