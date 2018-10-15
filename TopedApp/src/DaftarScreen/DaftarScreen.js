import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Container, Header, Content, Input, ListView, Form, Item, Button, Icon, Footer} from 'native-base';
import LoginPress from '../LoginScreen/LoginPress';

export default class DaftarScreen extends Component{
static navigationOptions = ({navigation}) => ({
    headerLeft: <Icon name='md-arrow-back' style={{marginLeft: 20}} onPress={()=>navigation.popToTop()}/>,
    headerTitle: 'Daftar',
    headerRight: <LoginPress navigation={navigation} />
  })
	render(){
		return(
			<Container style={{flex: 1, }}>
				<Content style={{flex: 1,margin: 20, marginRight: 35}} >
					<Text style={{marginLeft: 14,color: 'black'}}>Nomor Ponsel atau Email</Text>
					<Form style={{flex: 1,marginBottom: 25}}>
						<Item style={{height: 22}}>
							<Input placeholder=''/>
						</Item>
					</Form>
					<Button block
					style={{backgroundColor: '#42b549',marginLeft: 14,width: 315,justifyContent: 'center',height: 35}}>
						<Text style={{fontSize: 12,color: 'white'}}>Daftar</Text>
					</Button>
					<Text style style={{marginLeft: 14, marginTop: 30,marginBottom: 10, color: 'black'}}>Atau Daftar Dengan :</Text>
					<Button block bordered dark
					style={{marginLeft: 14,marginBottom: 10, width: 315,height: 35,justifyContent:'flex-start'}}>
						<Icon style={{color:'red'}} name='logo-google'/>
						<Text style={{color: 'black'}}>Google</Text>
					</Button>
					<Button block bordered dark
					style={{marginLeft: 14,marginBottom: 20, height: 35,justifyContent: 'flex-start'}}>
						<Icon style={{color:'blue'}} name='logo-facebook'/>
						<Text style={{color: 'black'}}>Facebook</Text>
					</Button>
					<View style={{justifyContent: 'center', alignItems: 'center'}}>
						<Text style style={{marginLeft: 14, marginTop: 10,marginBottom: 10,}}>Sudah punya akun Tokopedia? Masuk</Text>
					</View>
				</Content>
			</Container>
		)
	}
}
