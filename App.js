/**
 * Parkview 
 * 
 * Author : Bryan C. Winter <bwinter@integrationpartners.com>
 */

import React, {Component} from 'react';
import StackNavigator from "./app/config/router";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
	...DefaultTheme,
	roundness: 5,
	colors: {
		...DefaultTheme.colors,
		primary: '#44f',
		accent : '#000',
		text : '#000',
		surface : '#EEF7FA',
		placeholder: '#BEC5C8'
	}
}

const initialState = {
	'data': 0
}

export default class App extends Component{
	render() {
		return (
			<PaperProvider theme={theme}>
				<StackNavigator></StackNavigator>
			</PaperProvider>
		);
	}
}
