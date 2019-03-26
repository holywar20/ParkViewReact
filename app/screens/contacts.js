import React, {Component} from 'react';
import { View, Text , StyleSheet, SectionList} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';

export default class Contacts extends Component {
	render() {
		return (
			<ScrollView style="styles.mainContainer">
				<SectionList
					ItemSeparatorComponent={this.renderSeperator}
					renderItem={ this.renderItem }
					renderSectionHeader={({section: {title}}) => ({})}
					sections={[
						{title: 'Title1', data: ['item1', 'item2']},
						{title: 'Title2', data: ['item3', 'item4']},
						{title: 'Title3', data: ['item5', 'item6']},
					]}
					keyExtractor={(item, index) => item + index}/>
			</ScrollView>
		);
	}

	renderItem = ( item, index, section ) => {
		return (
			<Text style={{fontWeight: 'bold'}}>
				{title}
				<Text key={index}>{item}
			</Text></Text>
		)
	}

	renderSection = () => {

	}

	renderSeperator = () => {
		return (
			<View style ={{ height: 1, width: "86%", backgroundColor: "#CED0CE", marginLeft: "14%" }}/>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer : {
		flex: 1, 
		flexDirection: 'column',
		justifyContent: 'center',
	}, 

})