import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Card, CardItem, Left, Right} from 'native-base';

export default class Kerabat extends Component{
	render(){
		return(
			<Card style={{flexDirection: 'column'}}>
				<CardItem>
					<Text style={{color: 'black'}}>Semakin Akrab dengan Kerabat</Text>
					<Right>
						<Text style={{color: '#42b549',left: 30}}>Lihat Semua</Text>
					</Right>
				</CardItem>
				<Image style={{width: "100%", height: 246}} source={require('../../../../../assets/kerabat/1.jpg')}/>
			</Card>
		)
	}
}