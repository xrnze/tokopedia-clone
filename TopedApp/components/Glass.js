import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Coffee from './Coffee';


export default class Glass extends Component{
	render(){
		const info = {
			color: "black",
			taste: "asedapp"
		};
		return(
			<View>
				<Text>Glass</Text>
				<Coffee type="Expresso" bean="Biji" volume={1} info={info}/>		
			</View>
		)
	}
}