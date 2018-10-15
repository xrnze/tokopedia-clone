import React, {Component} from 'react';
import {Input, Text, Icon, Button, Item} from 'native-base';
import {View, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

class SearchBar extends Component {

	render(){
		return(
			<View style={{flex: 1}}>
				<Item style={{marginRight : 50, marginLeft: 30, backgroundColor:"white", height: 30, width:250}}>
					<Icon name='ios-menu' style={{margin: 7, fontSize: 32, color: 'grey'}}
					onPress={()=>this.props.navigation.openDrawer()}/>
					<Icon name='ios-search'  style={{fontSize: 19,color: 'grey'}}/>	
					<Input rounded placeholder='Cari produk atau toko' style={{fontSize: 13}} />
				</Item>
			</View>
		)
	}
}
export default withNavigation(SearchBar);			

	


