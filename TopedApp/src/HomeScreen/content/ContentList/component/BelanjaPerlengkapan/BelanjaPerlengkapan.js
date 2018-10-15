import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Card, CardItem, Left, Right} from 'native-base';

export default class BelanjaPerlengkapan extends Component{
	render(){
		return(
			<Card style={{flexDirection: 'column'}}>
				<CardItem>
					<Text style={{color: 'black'}}>Belanja Perlengkapan Terbaru</Text>
				</CardItem>
				<Image style={{width: "100%", height: 246}} source={require('../../../../../assets/belanjaperlengkapan/1.jpg')}/>
			</Card>
		)
	}
}