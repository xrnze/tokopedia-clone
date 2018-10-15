import React, {Component} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import {Container, Header, Content, Input, ListView, Form, Item, Button, Icon, Footer} from 'native-base';
import DaftarPress from '../DaftarScreen/DaftarPress';

export default class DaftarScreen extends Component{

static navigationOptions = ({navigation}) => ({
    headerLeft: <Icon name='md-arrow-back' style={{marginLeft: 20}} onPress={()=>navigation.popToTop()}/>,
    headerTitle: 'Masuk',
    headerRight: <DaftarPress navigation={navigation} />
  })
	render(){
		return(
			<Container style={{flex: 1, }}>
				<Content style={{flex: 1,margin: 20, marginRight: 40}} >
					<Form>
						<Text style={{marginLeft: 14}}>Email</Text>
						<Item style={{height: 22, marginBottom: 10}}>
							<Input placeholder='' />
						</Item>
							<Text style={{marginLeft: 14}}>Password</Text>
						<Item style={{height: 22}}>
							<Input placeholder='' secureTextEntry={true} />
						</Item>
					</Form>
					<View style={{alignItems: 'flex-end', justifyContent: 'flex-end',marginTop: 10, marginBottom: 10}}>
						<TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('LupaSandi')} {...this.props}>
							<Text style={{color: 'green'}} >Lupa kata sandi?</Text>
						</TouchableNativeFeedback>
					</View>
					<Button block style={{backgroundColor: '#42b549',marginLeft: 14}}>
						<Text style={{color: 'white'}}>Masuk</Text>
					</Button>
					<Text style={{marginLeft: 14, marginTop: 20,marginBottom: 10}}>Atau masuk dengan:</Text>
					<Button block bordered dark style={{justifyContent: 'flex-start', marginLeft: 14,height: 35,marginBottom: 10}}>
						<Icon style={{color: 'red'}} name='logo-google'/>
						<Text style={{color: 'black'}}>Google</Text>
					</Button>
					<Button block bordered dark style={{justifyContent: 'flex-start', marginBottom: 10, marginLeft: 14,height: 35}}>
						<Icon style={{color: 'blue'}} name='logo-facebook'/>
						<Text style={{color: 'black'}}>Facebook</Text>
					</Button>
					<Button block bordered dark style={{justifyContent: 'flex-start', marginLeft: 14,height: 35, marginBottom: 10}}>
						<Icon  name='ios-phone-portrait'/>
						<Text style={{color: 'black'}}>Nomor Ponsel</Text>
					</Button>
					<Button block bordered dark style={{marginLeft: 14,height: 35, justifyContent: 'flex-start'}}>
						<Icon style={{color: 'purple'}} name='logo-yahoo'/>
						<Text style={{color: 'black'}}>Yahoo</Text>
					</Button>
				</Content>
			</Container>
		)
	}
}
