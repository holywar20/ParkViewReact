import React, {Component} from 'react';
import { StyleSheet } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { Text, List , Button, Card, IconButton, Divider} from 'react-native-paper';


import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import DataStore from "../../config/datastore";

export default class Contacts extends Component {
	constructor(props){
		super(props);
		this.state = {
			family 		: [] , 
			careTeam 	: [] ,
			onCall 		: [] ,
			expanded		: {
				onCall : true, 
				family : false, 
				careTeam : false
			}
		}

		this.navigation = props.navigation;
	}

	static navigationOptions = ({ navigation }) => ({ 
		tabBarLabel: "Contacts",
		swipeEnabled : true,
		tabBarIcon : <IconButton icon="supervisor-account"></IconButton>
	});
	
	
	userTypeIcons = {
		Doctor  : 'healing',
		Friend  : 'person',
		OnCall  : 'phone-in-talk', 
		default : 'mood'  , 
		favorite : 'grade' , 
	}

	executeCall = ( targetName ) => {
		//console.log(targetName);
		//this.navigation.navigate('CallScreen' , { 'username' : targetName } );
		RNImmediatePhoneCall.immediatePhoneCall('0123456789');
	};

	render() {
		return (
			<ScrollView style="styles.mainContainer">
				
				<List.Accordion 
					left= { () => <List.Icon icon="phone"></List.Icon>  }
					title="On Call">
					<List.Section>
						{ this.state.onCall.map ( r => this.renderItem(r) ) }
					</List.Section>
				</List.Accordion>
				<Divider />
				<List.Accordion 
					left= { () => <List.Icon icon="healing"></List.Icon>  }
					title="Care Team">
					<List.Section>
						{ this.state.careTeam.map ( r => this.renderItem(r) ) }
					</List.Section>
				</List.Accordion>
				<Divider />
				<List.Accordion 
					left= { () => <List.Icon icon="people"></List.Icon>  }
					title="Family & Freinds">
					<List.Section>
						{ this.state.family.map ( r => this.renderItem(r) ) }
					</List.Section>
				</List.Accordion>

			</ScrollView>
		);
	}

	toggle = () => {

	}

	logoutButtonPress = () => {
		const resetAction = StackActions.reset({ // Navigate to brand new stack, as we are 'authenticated'
			index: 0,
			actions: [NavigationActions.navigate({ routeName: 'LogoutScreen' })],
		});

		this.navigation.dispatch(resetAction);
	}

	componentDidMount(){
		
		this.setState({
			'family'  		: DataStore.getFamily() , 
			'careTeam' 		: DataStore.getCareTeam() ,
			'onCall'   		: DataStore.getOnCall()
		});
	}

	listItemPress( data ){
		console.log(data);
		this.navigation.navigate('ChatScreen' , data );
	}
		
	renderItem( data ){
		// Figure out which icons to use. 
		let myIcon = '';

		if( data.favorite ){
			myIcon = this.userTypeIcons['favorite'];
		} else {
			myIcon = "";
		}

		if( data.relationship[0] != "~")
			data.relationship = "~ " + data.relationship; // Add some spacing for better looks

		return(
			<List.Item key ={data.userKey} 
				description = {data.relationship}
				title={ data.name}
				onPress = { () => this.listItemPress( data ) }
				left ={ () => <Text></Text>} 
				right={ () => <IconButton icon={this.userTypeIcons.OnCall} onPress={this.executeCall}></IconButton>}
			>
			</List.Item> 
		);
	}
}

const styles = StyleSheet.create({
	mainContainer : {
		flex: 1, 
		flexDirection: 'column',
		justifyContent: 'center',
	} , 
	boxContainer : {
		padding: 10, 
		margin: 10
	}
});