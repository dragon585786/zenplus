import React, { useContext } from 'react';
import { DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import DashBoard from '../screens/Dashboard/Dashboard';
import { globalScreenOptions } from './globalScreenOption';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight, faArrowRightFromBracket, faBars, faChartBar, faChartSimple, faList, faMedal, faUser } from '@fortawesome/free-solid-svg-icons';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Gstyle from '../assets/styles/global';
import { UserContext } from '../contextAPI/context';
import Profile from '../screens/Profile';
import TestScreen from '../screens/TestScreen';
import Leads from '../screens/Lead/Leads';
import LeadDetails from '../screens/Lead/LeadDetails';
import PersonalInfo from '../screens/Lead/PersonalInfo';
import LeadInfo from '../screens/Lead/LeadInfo';
import OnBoarding from '../screens/Lead/onBoarding/OnBoarding';
import LeadDetailsUpdate from '../screens/Lead/onBoarding/LeadDetailsUpdate';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import PersonalInfoDetails from '../screens/Lead/onBoarding/PersonalInfo';
import DriverOnBoarding from '../screens/Lead/onBoarding/DriverOnBoarding';
import DriverTrainingSchedule from '../screens/Lead/onBoarding/DriverTrainingSchedule';
import RewardsIncentives from '../screens/Incentive/RewardsIncentives';
import ChampionIncentives from '../screens/Incentive/ChampionIncentives';
import { LocalStorage } from '../Utils/LocalStorage';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerContent(props) {
  const { loggedIn, setLoggedIn } = useContext(UserContext);

  return (
    <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: heightPercentageToDP(92), backgroundColor: "#f2f2f2" }}>
      <View>
        <View
          // source={require('@/assets/images/bgImg.png')}
          //  style={{ width: '100%', height: '100%' }}
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: widthPercentageToDP(3), paddingTop: heightPercentageToDP(5), paddingBottom: heightPercentageToDP(2), backgroundColor: "white" }}>
          <FontAwesomeIcon icon={faUser} size={30} color="#C82026" />
          <View style={{ marginLeft: widthPercentageToDP(7) }}>
            <Text style={[Gstyle.black, Gstyle.h1, { marginTop: 10 }]}>Muhammad</Text>
            <Text style={[Gstyle.black, { fontSize: 15, marginTop: 5 }]}>muhammad.hussain.ghafoor@gmail.com</Text>
            <Text style={[Gstyle.black, { fontSize: 15, marginTop: 5 }]}>Last Logged In - 04/01/2024 10:00 AM</Text>
          </View>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <FontAwesomeIcon icon={faArrowLeft} size={20} color="#121212" />
          </TouchableOpacity>

        </View>
        <DrawerItem
          label="Home"
          icon={({ focused, color, size }) => (
            <FontAwesomeIcon icon={faChartSimple} size={20} color={props.state.routeNames[props.state.index] === 'DashBoard' ? 'red' : '#343434'} />
          )}
          labelStyle={{ color: props.state.routeNames[props.state.index] === 'DashBoard' ? 'red' : '#343434' }}
          onPress={() => props.navigation.navigate('DashBoard')}
        />
        <DrawerItem
          label="Incentives"
          icon={({ focused, color, size }) => (
            <FontAwesomeIcon icon={faMedal} size={20} color={props.state.routeNames[props.state.index] === 'Incentives' ? 'red' : '#343434'} />
          )}
          labelStyle={{ color: props.state.routeNames[props.state.index] === 'Incentives' ? 'red' : '#343434' }}
          onPress={() => props.navigation.navigate('Incentives')}
        />
        <DrawerItem
          label="Rewards & Incentives"
          icon={({ focused, color, size }) => (
            <FontAwesomeIcon icon={faMedal} size={20} color={props.state.routeNames[props.state.index] === 'RewardsIncentives' ? 'red' : '#343434'} />
          )}
          labelStyle={{ color: props.state.routeNames[props.state.index] === 'RewardsIncentives' ? 'red' : '#343434' }}
          onPress={() => props.navigation.navigate('RewardsIncentives')}
        />
        <DrawerItem
          label="Driver Partner Offerings"
          icon={({ focused, color, size }) => (
            <FontAwesomeIcon icon={faUser} size={20} color={props.state.routeNames[props.state.index] === 'DriverPartnerOfferings' ? 'red' : '#343434'} />
          )}
          labelStyle={{ color: props.state.routeNames[props.state.index] === 'DriverPartnerOfferings' ? 'red' : '#343434' }}
          onPress={() => props.navigation.navigate('DriverPartnerOfferings')}
        />
        <DrawerItem
          label="Leads"
          icon={({ focused, color, size }) => (
            <FontAwesomeIcon icon={faList} size={20} color={props.state.routeNames[props.state.index] === 'Leads' ? 'red' : '#343434'} />
          )}
          labelStyle={{ color: props.state.routeNames[props.state.index] === 'Leads' ? 'red' : '#343434' }}
          onPress={() => props.navigation.navigate('Leads')}
        />
        <DrawerItem
          label="Driver Onboarding"
          icon={({ focused, color, size }) => (
            <FontAwesomeIcon icon={faUser} size={20} color={props.state.routeNames[props.state.index] === 'DriverOnboarding' ? 'red' : '#343434'} />
          )}
          labelStyle={{ color: props.state.routeNames[props.state.index] === 'DriverOnboarding' ? 'red' : '#343434' }}
          onPress={() => props.navigation.navigate('DriverOnboarding')}
        />
        <DrawerItem
          label="Profile"
          icon={({ focused, color, size }) => (
            <FontAwesomeIcon icon={faUser} size={20} color={props.state.routeNames[props.state.index] === 'Profile' ? 'red' : '#343434'} />
          )}
          labelStyle={{ color: props.state.routeNames[props.state.index] === 'Profile' ? 'red' : '#343434' }}
          onPress={() => props.navigation.navigate('Profile')}
        />
        <DrawerItem
          label="Logout"
          icon={({ focused, color, size }) => (
            <FontAwesomeIcon icon={faArrowRightFromBracket} size={20} color={props.state.routeNames[props.state.index] === 'Logout' ? 'red' : '#343434'} />
          )}
          labelStyle={{ color: props.state.routeNames[props.state.index] === 'Logout' ? 'red' : '#343434' }}
          onPress={() => {
            setLoggedIn(false)
            LocalStorage.set('loggedIn', false)
          }}
        />
      </View>
      <View style={{ paddingBottom: heightPercentageToDP(2), paddingHorizontal: widthPercentageToDP(2), justifyContent: "center", alignItems: 'center' }}>
        <Text style={{ color: "#383838" }}>Version: 1.1.0</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text>Powered by </Text>
          <Image source={require('@/assets/images/Logo-2022.png')} />
        </View>
        <Text>© Copyright 2024 UTWiz. Privacy Policy</Text>
      </View>
    </View>
  );
}
const Header = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesomeIcon icon={faArrowLeft} size={20} color="#121212" style={{ marginLeft: 20 }} />
    </TouchableOpacity>
  )
}
const HeaderMenu = ({ navigation }) => {
  return (<TouchableOpacity onPress={() => navigation.openDrawer()}>
    <FontAwesomeIcon icon={faBars} size={20} color="#121212" style={{ marginLeft: 20 }} />
  </TouchableOpacity>)
}
const LeadStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...globalScreenOptions,
      }}
    >
      <Stack.Screen name="Leads" component={Leads}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderMenu navigation={navigation} />
          ),
        })}

      />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo}
        options={({ navigation }) => ({
          title: "Personal Info",
          headerLeft: () => (
            <Header navigation={navigation} />
          ),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
      <Stack.Screen name="LeadDetails" component={LeadDetails}
        options={({ route, navigation }) => ({
          title: route.params?.title || "Lead Details",
          headerLeft: () => (
            <Header navigation={navigation} />
          ),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
      <Stack.Screen name="LeadInfo" component={LeadInfo}
        options={({ navigation }) => ({
          title: "Lead Info",
          headerLeft: () => (
            <Header navigation={navigation} />
          ),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
    </Stack.Navigator>
  );
};

const OnBoardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...globalScreenOptions,
      }}
    >
      <Stack.Screen name="DriverOnboarding" component={OnBoarding}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderMenu navigation={navigation} />
          ),
          title: "Onboarding list",

        })}

      />
      <Stack.Screen name="LeadDetailsUpdate" component={LeadDetailsUpdate}
        options={({ route, navigation }) => ({
          title: route.params?.title || "Lead Details Update",
          headerLeft: () => (
            <Header navigation={navigation} />
          ),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
      <Stack.Screen name="LeadDetailsPersonalInfo" component={PersonalInfoDetails}
        options={({ route, navigation }) => ({
          title: route.params?.title || "Lead Details Update",
          headerLeft: () => (
            <Header navigation={navigation} />
          ),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
      <Stack.Screen name="DriverOnBoarding" component={DriverOnBoarding}
        options={({ route, navigation }) => ({
          title: route.params?.title || "Driver Onboarding",
          headerLeft: () => (
            <Header navigation={navigation} />
          ),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
      <Stack.Screen name="DriverTrainingSchedule" component={DriverTrainingSchedule}
        options={({ route, navigation }) => ({
          title: route.params?.title || "Driver partner onboarding",
          headerLeft: () => (
            <Header navigation={navigation} />
          ),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
    </Stack.Navigator>
  );
};

const IncentiveStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...globalScreenOptions,
      }}
    >
      <Stack.Screen name="ChampionIncentive" component={ChampionIncentives}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderMenu navigation={navigation} />
          ),
          title: "Champion Incentive",
        })}

      />
      <Stack.Screen name="RewardsIncentives" component={RewardsIncentives}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderMenu navigation={navigation} />
          ),
          title: "Rewards/Incentives",
        })}

      />
    </Stack.Navigator>
  );
};

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="DashBoard"
      drawerContent={DrawerContent}
      screenOptions={{
        ...globalScreenOptions,
        unmountOnBlur: true,
        gestureEnabled: false,
        drawerStyle: {
          width: widthPercentageToDP(100),
        },
      }}
    >
      <Drawer.Screen name="DashBoard" component={DashBoard}
        options={({ navigation }) => ({
          ...globalScreenOptions,
          headerLeft: () => (
            <HeaderMenu navigation={navigation} />
          ),
        })}
      />
      <Drawer.Screen name="Leads" component={LeadStack}
        options={({ navigation }) => ({
          headerShown: false
        })}
      />
      <Drawer.Screen name="DriverOnboarding" component={OnBoardStack}
        options={({ navigation }) => ({
          headerShown: false
        })}
      />
      <Drawer.Screen name="Incentives" component={IncentiveStack}
        options={({ navigation }) => ({
          headerShown: false
        })}
      />
      <Drawer.Screen name="RewardsIncentives" component={RewardsIncentives}
        options={({ navigation }) => ({
          ...globalScreenOptions,
          title: "Rewards/Incentives",
          headerLeft: () => (
            <HeaderMenu navigation={navigation} />
          ),
        })}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="DriverPartnerOfferings" component={TestScreen} />

    </Drawer.Navigator>
  );
}

