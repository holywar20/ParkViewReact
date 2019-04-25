import React, {Component} from 'react';
import { Text, View , StyleSheet, ScrollView } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { IconButton } from "react-native-paper";

export default class Chat extends Component {
	constructor(props){
		super(props);
		this.state = {
			messages : [],
			targetUserid : null
		};

		this.navigation = props.navigation;
	}

	static navigationOptions = ({ navigation }) => {
		return {
			title : navigation.getParam( 'name' ),
			headerRight: <IconButton 
				icon="local-phone"
				onPress= { navigation.getParam('callTarget') }
				>
				</IconButton>
		}
	};

	render() {
		const { navigate } = this.props.navigation;

		return (
			<GiftedChat
				messages={this.state.messages}
				onSend={ singleMessage => this.onSendClicked(singleMessage) }
				user={{
					_id:1
				}}
				/>
		);
	}

	componentDidMount(){
		this.props.navigation.setParams({ callTarget : this._callTarget }); // Stupid boilerplate that lets the button call stuff in the screen.

		this.setState({
			messages: [{
				_id: 1,
				text: "Hello Patient!",
				createdAt: new Date(),
				user: {
					_id: 2,
					name: "React Native",
					avatar: "https://placeimg.com/140/140/any"
					}
			}]
		});
	}

	_callTarget(){
		
	}

	onSendClicked( messages = [] ){
		this.setState(previousState => ({
			messages: GiftedChat.append(previousState.messages, messages)
		}));
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		
	} , 
	chatter : {

	} , 
	chatee : {

	}
})