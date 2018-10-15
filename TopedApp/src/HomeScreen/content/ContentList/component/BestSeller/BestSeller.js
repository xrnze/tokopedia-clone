import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Card, CardItem} from 'native-base';

export default class BestSeller extends Component{
	render(){
		return(
			<Card style={{flexDirection: 'column'}}>
				<CardItem>
					<Text style={{color: 'black'}}>Today's Best Seller</Text>
				</CardItem>
				<CardItem>
					<Image style={{width: "100%", height: 246}} source={require('../../../../../assets/bestseller/1.jpg')}/>
				</CardItem>
			</Card>
		)
	}
}