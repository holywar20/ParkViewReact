import React, {Component} from 'react';
import View from "react-native";

import {
   RTCPeerConnection,
   RTCIceCandidate,
   RTCSessionDescription,
   RTCView,
   MediaStream,
   MediaStreamTrack,
   mediaDevices	
} from 'react-native-webrtc';



export default class Logout extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			
		}

		this.navigation = props.navigation;
	}

	render(){
		return(
			<View>
				Logout Screen
			</View>
		);
	}
}