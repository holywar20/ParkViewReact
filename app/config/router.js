import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login 		from '../screens/login';
import Contacts 	from '../screens/contacts';
import CheckIn		from '../screens/checkin';
import Register	from '../screens/register';

const stackNavigator = createStackNavigator({
	LoginScreen : { 
		screen : Login
	} ,
	ContactsScreen : { 
		screen : Contacts
	},
	CheckInScreen :{ 
		screen : CheckIn
	} ,
	RegisterScreen : { 
		screen : Register
	}
});

export default createAppContainer( stackNavigator )