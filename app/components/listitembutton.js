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
			<Menu 
				visible={ this.state.menuVisible }
				onDismiss={ this.toggleMenu }
				anchor={ <IconButton 	
										icon={this.menuIcon}
										color="#BEC5C8" 
										mode="contained" 
										onPress={ this.toggleMenu }>
							</IconButton> }>
					<Menu.Item title="Call" onPress={ this.callScreenPressed } />
					<Menu.Item title="Text" onPress={ this.chatButtonPressed } />
					<Divider/> 
					{ this.state.favorite && <Menu.Item title="Unfavorite" /> }
					{ !this.state.favorite && <Menu.Item title="Favorite" /> }
					
				</Menu>
		);
	}
}