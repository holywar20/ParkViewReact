import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login 		from '../screens/login';
import Contacts 	from '../screens/contacts';
import CheckIn		from '../screens/checkin';
import Register	from '../screens/register';
import Chat			from '../screens/chat';
import Call			from '../screens/call';

const stackNavigator = createStackNavigator({
	LoginScreen : { 
		screen : Login,
		navigationOptions: () => ({
			header : null
		})
	} ,
	ContactsScreen : { 
		screen : Contacts
	},
	CheckInScreen :{ 
		screen : CheckIn,
		navigationOptions: () => ({
			
		})
	} ,
	RegisterScreen : { 
		screen : Register, 
		navigationOptions: () =>({

		})
	}, 
	ChatScreen :{ 
		screen : Chat, 
		navigationOptions:() =>({

		})
	},
	CallScreen : {
		screen : Call, 
		navigationOptions:() =>({

		})
	}
});

export default createAppContainer( stackNavigator )