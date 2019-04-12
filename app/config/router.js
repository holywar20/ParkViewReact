import React, {Component} from 'react';

import { Text, StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';

import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

import Login 		from '../screens/login';
import Logout		from '../screens/logout';
import Contacts 	from '../screens/contacts';
import Help			from '../screens/help';
import CheckIn		from '../screens/checkin';
import Chat			from '../screens/chat';
import Calender	from '../screens/calender';

import GeneralMenu from '../components/generalmenu';


/* These can be either stack or tab navigators */
var calenderScreen = {
	screen : Calender, 
	navigationOptions: {
		tabBarLabel: "Calender",
		swipeEnabled : true, 
		tabBarIcon : <IconButton icon="date-range"></IconButton>
	}
}

var contactsScreen = { 
	screen : Contacts,
	navigationOptions: {
		tabBarLabel: "Contacts",
		swipeEnabled : true,
		tabBarIcon : <IconButton icon="supervisor-account"></IconButton>
	}
};

var checkInScreen = { 
	screen : CheckIn,
	navigationOptions: {
		tabBarLabel: "Check In",
		swipeEnabled : true ,
		tabBarIcon : <IconButton icon="check-box"></IconButton>
	}
}


const tabNavigator = createBottomTabNavigator({
	CheckIn			: checkInScreen,
	CalenderScreen : calenderScreen,
	ContactsScreen : contactsScreen 
});

navigateToCheckin = () => {

}

navigateToHelp = () => {
	RNImmediatePhoneCall.immediatePhoneCall('9111');
}

navigateToLogout = () => {

}

tabNavigator.navigationOptions = ({ navigation }) => {
	const { routeName } = navigation.state.routes[navigation.state.index];
	
	// You can do whatever you like here to pick the title based on the route name
	const headerTitle = routeName;
	
	return {
		headerTitle : null,
		headerLeft: GeneralMenu
	};
}


const stackNavigator = createStackNavigator({
	LoginScreen : { 
		screen : Login,
		navigationOptions: () => ({
			header : null
		})
	} ,
	LogoutScreen : { 
		screen : Logout,
		navigationOptions: () => ({
			header : null
		})
	} ,
	TabNavigationScreen : tabNavigator, 
	HelpScreen : {
		screen : Help, 
		navigationOptions:() =>({
			headerTitle: <Text styles={styles.header}>Helps</Text> , 
			headerRight: <IconButton icon="local-hospital" 
				color="#f44" size={30}
				onPress={ () => { console.log("Pressing") } }
				></IconButton>
		})
	}, 
	ChatScreen : chatScreen  = { 
		screen : Chat, 
		navigationOptions:() =>({
			headerTitle: <Text styles={styles.header}>Targets Name</Text> , 
			headerRight: <IconButton icon="phone" 
				color="#449" size={35}
				onPress={ () => { console.log("Pressing") } }
				></IconButton>
		})
	},
	ContactsScreen : contactsScreen
} , {
	headerMode: 'screen',
	headerLayoutPreset : 'center' 
});

const styles = StyleSheet.create({
	header: {
		color : "#000",
		fontSize : 1.2
	},
	headerRight : {
		flexDirection : 'column'
	}
});

export default createAppContainer( stackNavigator );