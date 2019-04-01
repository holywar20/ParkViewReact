import React, {Component} from 'react';
import { View, Text } from "react-native";
import { Calendar, CalendarList, Agenda , Arrow} from 'react-native-calendars';

export default class Logout extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			
		}

		this.navigation = props.navigation;
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
		);
	}
}