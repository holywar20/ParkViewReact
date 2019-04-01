import React, {Component} from 'react';
import { IconButton, Menu, Divider} from 'react-native-paper';

export default class ListItemButton extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			menuVisible : 0,
			favorite : props.favorite
		}

		//console.log(props);

		this.username = props.username
		this.menuIcon = 'view-list';
		this.navigation = props.nav;
	}
	
	toggleMenu = () => {
		if( this.state.menuVisible )
			this.setState( { menuVisible : 0} )
		else
			this.setState( {menuVisible : 1} )
	}

	callScreenPressed = () => {
		this.toggleMenu();
		this.navigation.navigate('CallScreen' , {username : this.username} );
	}

	chatButtonPressed = () => {
		this.toggleMenu();
		this.navigation.navigate('ChatScreen' , { username : this.username } );
	}

	render(){
		return(
			<IconButton 	
				icon={this.menuIcon}
				color="#BEC5C8" 
				mode="contained" 
				onPress={ this.toggleMenu }>
			</IconButton> 
		)
	}
}