import React, {Component} from 'react';

import { Text, StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';

import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

/* A Globalish menu meant to be available on most screens except the stand alone screens */
import GeneralMenu from '../components/generalmenu';

/* Stand Alone screens */
import Login 		from '../screens/login';
import Logout		from '../screens/logout';

/* Stack navigation */
import Chat					from '../screens/stacknavigation/chat';
import AddAppointment 	from '../screens/stacknavigation/addappointment';
import ContactDetail 	from '../screens/stacknavigation/contactdetail';
import ListAppointment	from '../screens/stacknavigation/listappointment';

/* Tab navigation */
import Contacts 	from '../screens/tabnavigation/contacts';
import CheckIn		from '../screens/tabnavigation/checkin';
import Calender	from '../screens/tabnavigation/calender';

/* Tab navigation set up. These normally fit in a tab, but can also stack as needed.  */
var calenderScreen = { screen : Calender }
var contactsScreen = { screen : Contacts }
var checkInScreen = {  screen : CheckIn }

const tabNavigator = createBottomTabNavigator({
	CheckIn			: checkInScreen,
	CalenderScreen : calenderScreen,
	ContactsScreen : contactsScreen 
});

tabNavigator.navigationOptions = ({ navigation }) => {
	const { routeName } = navigation.state.routes[navigation.state.index];
	
	// You can do whatever you like here to pick the title based on the route name
	var title = null;

	if( routeName == "CheckIn")
		title = "Check In"
	else if ( routeName == "CalenderScreen")
		title = "Appointments"
	else if ( routeName == "ContactsScreen" )
		title = "Contact List"

	return {
		headerTitle : title,
		headerLeft: GeneralMenu
	};
}

/* Stack navigator contains the tab navigator, and all screens before and after. */
const stackNavigator = createStackNavigator({
	/* Stand alone Screens */
	LoginScreen : { screen : Login  } ,
	LogoutScreen : { screen : Logout } ,
	/* Tab navigator. Meant to be the 'root' screen of the application */
	TabNavigationScreen : tabNavigator,
	
	/* These screens ONLY stack up */ 
	ChatScreen : { screen : Chat },
	ContactDetailScreen :{ screen : ContactDetail }, 
	AddAppointmentScreen : { screen : AddAppointment },
	ListAppointmentScreen : { screen : ListAppointment }
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