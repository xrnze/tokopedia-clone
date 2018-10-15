import React, {Component} from "react";
import {Button, Icon, View} from "native-base";
import {TouchableNativeFeedback} from 'react-native';
import {withNavigation} from 'react-navigation';

class IconBar extends Component {

	render(){
		return(
			<View style={{flex: 1, flexDirection: 'row'}}>
				<View>  	
						<TouchableNativeFeedback>
							<Icon name='ios-qr-scanner' style={{color:'white', marginRight: 20}}/>
						</TouchableNativeFeedback>
				</View>

				<View>
						<TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('Cart')}>
							<Icon name='ios-cart' style={{color:'white',marginRight: 20}}/>
						</TouchableNativeFeedback>
				</View>
			</View>
		)
	}
}

export default withNavigation(IconBar);