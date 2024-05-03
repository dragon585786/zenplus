import React from 'react';
import { View, ImageBackground, Image, TouchableOpacity, Text, TouchableWithoutFeedback, Pressable } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faBars, faBell, faChartSimple, faCirclePlus, faCoffee, faGear, faHouse, faPhone, faPlus } from '@fortawesome/free-solid-svg-icons';
import MyDrawer from './DrawerNavigator';
import TestScreen from '@/screens/TestScreen';
import Profile from '@/screens/Profile';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { globalScreenOptions } from './globalScreenOption';
import CreateLead from '../screens/Lead/CreateLead';
import { useNavigation } from '@react-navigation/native';
// ../assets/images/bgTabNavigator.png
const Tab = createBottomTabNavigator();

const TAB_BAR_COLOR = 'brown';
const TAB_BAR_ICON_SIZE = 20;


export default function MyTabs() {
  const navigations = useNavigation()
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#C82026',
        tabBarInactiveTintColor: '#000000',
        // tabBarStyle: { backgroundColor: '#363636' },
      }}
      tabBar={props => <BottomTabBars {...props} />}
    >
      <Tab.Screen
        name="Feed"
        component={MyDrawer}
        options={{
          tabBarLabel: 'Home',

          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faChartSimple} size={TAB_BAR_ICON_SIZE} color={TAB_BAR_COLOR} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="NewLead"
        component={CreateLead}
        options={({ navigation, route })=>({
          ...globalScreenOptions,
          tabBarLabel: 'New Lead',
          headerTitle:"New Lead",
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 20 }}
              onPress={() => navigation.navigate("Feed")}
            >
              <FontAwesomeIcon icon={faArrowLeft} color="#000000" size={25} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faCirclePlus} size={TAB_BAR_ICON_SIZE} color={TAB_BAR_COLOR} />
          ),
        })}
      />
      <Tab.Screen
        name="Call"
        component={Profile}
        options={{
          ...globalScreenOptions,
          tabBarLabel: 'Call',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faPhone} size={TAB_BAR_ICON_SIZE} color={TAB_BAR_COLOR} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const BottomTabBars = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const name = focusedOptions.tabBarLabel !== undefined
    ? focusedOptions.tabBarLabel
    : focusedOptions.title !== undefined
      ? focusedOptions.title
      : state.routes[state.index].name;

  return (
    <View 
    // source={require('@/assets/images/bgTabNavigator.png')}
     style={{flexDirection: 'row',paddingVertical:heightPercentageToDP(0.1),backgroundColor:'#FFFFFF' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
let iconName = faHouse;
let Name = "Home";

        switch (index) {
          case 0:
            iconName = faHouse;
            Name = "Home";
            break;
          case 1:
            iconName = faPlus;
            Name = "New Lead";
            break;
          case 2:
            iconName = faPhone;
            Name = "Call";
            break;
          default:
            iconName = faHouse;
            Name = "Home";
            break;
        }
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1,justifyContent: 'center', alignItems: 'center', }}
          >
           <View style={{ alignItems: 'center',paddingVertical:heightPercentageToDP(1), justifyContent: 'center',minWidth:widthPercentageToDP(15),marginVertical:heightPercentageToDP(1) }}>
            <FontAwesomeIcon icon={iconName} size={20} color={ isFocused ? '#C82026' :'#000000'} />
            {/* <Text style={{ fontSize: 14, color:  isFocused ? '#C82026' :'#000000',marginTop:6}}>{Name}</Text> */}
          </View>
           
          </Pressable>
        );
      })}
    </View>
  );
};


