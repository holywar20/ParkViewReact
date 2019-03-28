import React, {Component} from 'react';

import { Text, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login 		from '../screens/login';
import Logout		from '../screens/logout';
import Contacts 	from '../screens/contacts';
import Help			from '../screens/help';
import CheckIn		from '../screens/checkin';
import Chat			from '../screens/chat';
import Call			from '../screens/call';

const stackNavigator = createStackNavigator({
	LoginScreen : { 
		screen : Login,
		navigationOptions: () => ({
			header : null
		})
	} ,
	LogoutScreen : { 
		screen : Login,
		navigationOptions: () => ({
			header : null
		})
	} ,
	CheckInScreen :{ 
		screen : CheckIn,
		navigationOptions: () => ({
			header: null
		})
	} ,
	ContactsScreen : { 
		screen : Contacts,
		navigationOptions: () => ({
			headerTitle: <Text styles={styles.header}>My Contacts</Text> , 
			headerRight: <IconButton icon="local-hospital" 
				onPress={ () => { console.log("Pressing") } }
				color="#f44" size={30}></IconButton>
		})
	},
	ChatScreen :{ 
		screen : Chat, 
		navigationOptions:() =>({
			headerTitle: <Text styles={styles.header}>Targets Name</Text> , 
			headerRight: <IconButton icon="phone" 
				color="#449" size={35}
				onPress={ () => { console.log("Pressing") } }
				></IconButton>
		})
	},
	CallScreen : {
		screen : Call, 
		navigationOptions:() =>({
			headerTitle: <Text styles={styles.header}>Targets Name</Text> , 
			headerRight: <IconButton icon="local-hospital" 
				onPress={ () => { console.log("Pressing") } }
				color="#f44" 
				size={30}
				></IconButton>
		})
	} , 
	HelpScreen : {
		screen : Help, 
		navigationOptions:() =>({
			headerTitle: <Text styles={styles.header}>Helps</Text> , 
			headerRight: <IconButton icon="local-hospital" 
				color="#f44" size={30}
				onPress={ () => { console.log("Pressing") } }
				></IconButton>
		})
	}
} , {
	headerMode: 'screen',
	headerLayoutPreset : 'center' 
});

const styles = StyleSheet.create({
	header: {
		color : "#000",
		fontSize : 1.2
	}
})

export default createAppContainer( stackNavigator );