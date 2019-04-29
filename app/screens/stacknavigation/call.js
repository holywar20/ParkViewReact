import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { Text , View } from "react-native-paper";

/*
import {
	RTCPeerConnection,
	RTCIceCandidate,
	RTCSessionDescription,
	RTCView,
	MediaStream,
	MediaStreamTrack,
	mediaDevices	
} from 'react-native-webrtc';*/

export default class Call extends Component{
	constructor(props){
		super(props);

		this.state = {
			username : props.navigation.params.username
		}

		this.navigation = props.navigation;
	}

	render(){
		return(
			<View>
				<Text>this.state.username</Text>
			</View>
		);
	}
}