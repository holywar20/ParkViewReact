import React, {Component} from 'react';
import { IconButton, Menu, Divider} from 'react-native-paper';

export default class GeneralMenu extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			menuVisible : false
		}

		this.menuIcon = 'view-list';
		this.navigation = props.navigation;
	}

	toggleMenu = () => {
		if( this.state.menuVisible )
			this.setState( { menuVisible : 0} )
		else
			this.setState( {menuVisible : 1} )
	}

	render(){
		return(
			<Menu 
				visible={ this.state.menuVisible }
				onDismiss={ this.toggleMenu }
				anchor={ <IconButton 	
								icon={this.menuIcon}
								color="#000" 
								mode="contained" 
								onPress={ this.toggleMenu }>
							</IconButton> }>
				<Menu.Item title="Checkin" onPress={ console.log("pressed") } />
				<Menu.Item title="Logout" onPress={ console.log("pressed") } />
			</Menu>
		);
	}
}