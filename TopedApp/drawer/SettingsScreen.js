import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon, Container, Header, Body, Left, Content} from 'native-base';

class SettingsScreen extends Component{
	render(){
		return(
			<View>
			<Header>
				<Left>
					<Icon name='ios-menu' 
					onPress={()=>this.props.navigation.openDrawer()} />
				</Left>
			</Header>
				<Text>SettingsScreen</Text>
			</View>
		)
	}
}
export default SettingsScreen;