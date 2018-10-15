import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon, Container, Header, Body, Left, Content} from 'native-base';

class HomeScreen extends Component{
	render(){
		return(
			<View>
				<Header>
					<Left>
						<Icon name='ios-menu' 
						onPress={()=>this.props.navigation.openDrawer()}/>
					</Left>
				</Header>
				<View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
					<Text>HomeScreen</Text>
				</View>
			</View>
		)
	}
}
export default HomeScreen;