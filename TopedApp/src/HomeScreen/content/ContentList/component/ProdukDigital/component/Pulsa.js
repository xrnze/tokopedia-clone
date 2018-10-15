import React, {Component} from 'react';
import {View, Text,CheckBox} from 'react-native';
import {Container,Content,Card,CardItem,Button, Icon, Item, Input, Form, Right, } from 'native-base';

export default class Pulsa extends Component{
	constructor(props) {
	  super(props);

	  this.state = {
	  	check: false,
	  	beli: 'Beli'
	  };
	}
	checkBox(){
		this.setState({
			check:!this.state.check,
			beli: 'Bayar'
		})
	}
	render(){
		return(
			<Form>
				<Text style={{marginLeft: 10, marginTop: 15, marginBottom: 15}}>Nomor Telepon</Text>
				<Item style={{height: 22, marginBottom: 10,marginRight: 20}}>
					<Input style={{fontSize: 12}} placeholder='Contoh 081234567890' />
					<Icon style={{color: 'grey'}} name='ios-contact'/>
				</Item>
				<View style={{flexDirection: 'row',marginLeft: 5, marginTop: 10}}>
					<CheckBox value={this.state.check} onChange={()=>this.checkBox()}/>
					<Text style={{marginTop: 5}}>Bayar Instan </Text>
					<Icon style={{fontSize: 16,marginTop: 8, color: 'grey'}} name='md-information-circle'/>
				</View>
				<Button block style={{backgroundColor: '#ff5722', marginLeft: 12, marginRight: 20,height: 35}}>
					<Text style={{color: 'white'}}>{this.state.beli}</Text>
				</Button>
			</Form>
		)
	}
}
