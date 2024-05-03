import { Text, View } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const StatusIndicator = ({ status }) => {
    let backgroundColor, textColor;
    switch (status) {
        case 'Not Interested':
            backgroundColor = '#FFE2E3';
            textColor = '#C82026';
            break;
        case 'Interested':
            backgroundColor = '#E5F2EB';
            textColor = '#1B8346';
            break;
        case 'Follow Up':
            backgroundColor = '#FFF5E3';
            textColor = '#FFA200';
            break;
    }

    return (
        <View style={{ backgroundColor: backgroundColor, padding: widthPercentageToDP(1), borderRadius: 5 }}>
            <Text style={{ color: textColor }}>
                {status}
            </Text>
        </View>
    )
}


export const StatusIndicatorOnboard = ({ status }) => {
    let backgroundColor, textColor;
    switch (status) {
        case 'Incomplete Profile':
            backgroundColor = '#FFE2E3';
            textColor = '#C82026';
            break;
        case 'Agreement Pending':
            backgroundColor = '#FFE2E3';
            textColor = '#C82026';
            break;
        case 'QC Rejected':
            backgroundColor = '#FFE2E3';
            textColor = '#C82026';
            break;
        case 'Initial Payment':
            backgroundColor = '#E5F2EB';
            textColor = '#1B8346';
            break;
        case 'Handover Completed':
            backgroundColor = '#E5F2EB';
            textColor = '#1B8346';
            break;
        case 'Training Completed':
            backgroundColor = '#E5F2EB';
            textColor = '#1B8346';
            break;
        case 'Training Pending':
            backgroundColor = '#FFF5E3';
            textColor = '#FFA200';
            break;
        case 'Refund & Rejected':
            backgroundColor = '#FFF5E3';
            textColor = '#FFA200';
            break;
        case 'QC Pending':
            backgroundColor = '#FFF5E3';
            textColor = '#FFA200';
            break;
        case 'Waiting Handover':
            backgroundColor = '#FFF5E3';
            textColor = '#FFA200';
            break;
    }

    return (
        <View style={{ backgroundColor: backgroundColor, padding: widthPercentageToDP(1), borderRadius: 5 }}>
            <Text style={{ color: textColor }}>
                {status}
            </Text>
        </View>
    )
}

export const StatusIndicatorLeadCard = ({ status }) => {
    let backgroundColor, textColor;
    switch (status) {
        case 'Not Interested':
            backgroundColor = '#FFE2E3';
            textColor = '#C82026';
            break;
        case 'Interested':
            backgroundColor = '#E5F2EB';
            textColor = '#1B8346';
            break;
        case 'Follow Up':
            backgroundColor = '#FFF5E3';
            textColor = '#FFA200';
            break;
    }

    return (
        <View style={{
            width: 16,
            height: 16,
            borderRadius: 50,
            backgroundColor: backgroundColor,
            borderWidth: 2,
            borderColor:textColor,
            marginRight: widthPercentageToDP(1)
        }} />
    )
}
export const StatusIndicatorOnboardCard = ({ status }) => {
    let backgroundColor, textColor;
    switch (status) {
        case 'Incomplete Profile':
            backgroundColor = '#FFE2E3';
            textColor = '#C82026';
            break;
        case 'Agreement Pending':
            backgroundColor = '#FFE2E3';
            textColor = '#C82026';
            break;
        case 'QC Rejected':
            backgroundColor = '#FFE2E3';
            textColor = '#C82026';
            break;
        case 'Initial Payment':
            backgroundColor = '#E5F2EB';
            textColor = '#1B8346';
            break;
        case 'Handover Completed':
            backgroundColor = '#E5F2EB';
            textColor = '#1B8346';
            break;
        case 'Training Completed':
            backgroundColor = '#E5F2EB';
            textColor = '#1B8346';
            break;
        case 'Training Pending':
            backgroundColor = '#FFF5E3';
            textColor = '#FFA200';
            break;
        case 'Refund & Rejected':
            backgroundColor = '#FFF5E3';
            textColor = '#FFA200';
            break;
        case 'QC Pending':
            backgroundColor = '#FFF5E3';
            textColor = '#FFA200';
            break;
        case 'Waiting Handover':
            backgroundColor = '#FFF5E3';
            textColor = '#FFA200';
            break;
    }

    return (
        <View style={{
            width: 16,
            height: 16,
            borderRadius: 50,
            backgroundColor: backgroundColor,
            borderWidth: 2,
            borderColor:textColor,
            marginRight: widthPercentageToDP(1)
        }} />
    )
}