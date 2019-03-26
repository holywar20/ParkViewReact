/**
 * Parkview 
 * 
 * Author : Bryan C. Winter <bwinter@integrationpartners.com>
 */

import React, {Component} from 'react';
import { Text , StyleSheet } from 'react-native';
import StackNavigator from "./app/config/router";

export default class App extends Component{
	render() {
		return (
			<StackNavigator></StackNavigator>
		);
	}
}
