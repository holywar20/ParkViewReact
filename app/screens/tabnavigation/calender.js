import React, {Component} from 'react';
import { View, Text , ScrollView , Button } from "react-native";
import { IconButton , Divider } from "react-native-paper";
import { Calendar, CalendarList, Agenda , Arrow} from 'react-native-calendars';

import DataStore from "../../config/datastore";
import DataFetcher from '../../config/datafetcher';

export default class Logout extends React.Component{
	state = {
		futureDates : [],
		pastDates : [],
		openFab : false
	};
	
	constructor(props){
		super(props);

		this.navigation = props.navigation;
	}

	static navigationOptions = ({ navigation }) => ({
		tabBarLabel: "Calender",
		swipeEnabled : true, 
		tabBarIcon : <IconButton icon="date-range"></IconButton>
	});

	componentDidMount() {
		DataFetcher.appointments.index( 10 )
		.then(  ( res ) => {
			return res
		})
		.then( ( response ) => {
			console.log(response);
		});
	}

	loadCalenderData(){
		
	}

	onDayPress = (day) =>{
		console.log('selected day', day) 
	}

	onDayLongPress = (day) =>{
		console.log('selected day', day) 
	}

	onMonthChange = (month)=>{
		console.log('selected month', month);
	}

	render(){
		return(
		<ScrollView>
			<Calendar
				current={ Date() }

				//minDate={'2012-05-10'}
				// maxDate={'2012-05-30'}
				onDayPress={ this.onDayPress }
				onDayLongPress={ this.onDayLongPress }
				monthFormat={'MMM yyyy'} // http://arshaw.com/xdate/#Formatting
				
				onMonthChange={(month) => {console.log('month changed', month)}}
				
				hideArrows={false}

				//renderArrow={(direction) => (<Text> x </Text>)}

				hideExtraDays={false}
				// If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
				// day from another month that is visible in calendar page. Default = false
				disableMonthChange={false}

				firstDay={1}
				hideDayNames={false}
				showWeekNumbers={false}

				onPressArrowLeft={substractMonth => substractMonth()}
				onPressArrowRight={addMonth => addMonth()}
				/>
				<Divider></Divider>
				<View style={styles.buttonContain}>
					<IconButton style={ styles.iconButton } icon="today"></IconButton>
					<IconButton></IconButton>
					<IconButton style={ styles.iconButton } icon="list"></IconButton>
					<IconButton></IconButton>
					<IconButton 
						style={ styles.iconButton } 
						icon="refresh">
					</IconButton>
				</View>

		</ScrollView>
		);
	}
}

const styles = {
	buttonContain : {
		flexDirection: 'row',
		justifyContent: 'center'
	}, 
	iconButton : {
		
	}
}