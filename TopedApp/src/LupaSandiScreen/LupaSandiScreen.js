import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Container, Content, Footer,  Button, Input, Item, Icon} from 'native-base';

export default class LupaSandiScreen extends Component{
	static navigationOptions = ({navigation}) =>{
		return{
			headerLeft: <Icon name='md-arrow-back' style={{marginLeft: 20}} onPress={()=>navigation.popToTop()}/>,
			headerTitle: 'Lupa Kata Sandi'
		}
	}

	render(){
		return(
			<Container style={{flex: 1,margin: 4}}>
				<Content style={{flex: 1,marginTop: 40,marginLeft: 20}}>
					<Text style={{fontWeight: 'bold',fontSize: 24,color: 'black'}}>Kesulitan mengakses akun</Text>
					<Text style={{fontWeight: 'bold',fontSize: 24,color: 'black'}}>Anda?</Text>
					<View style={{marginTop: 20}}>
						<Text>Lupa kata sandi? Masukan email login Anda di</Text>
						<Text>bawah ini.Kami akan mengirimkan pesan email</Text>
						<Text>beserta tautan untuk reset kata sandi Anda.</Text>
					</View>
					<Item style={{marginRight: 30,marginBottom: 20}}>
						<Input style={{fontSize: 14}} placeholder='Alamat Email'/>
					</Item>
					<Button block style={{backgroundColor: '#42b549',marginRight: 30}}>
						<Text style={{color: 'white',fontSize: 14}}>Ganti Kata Sandi</Text>
					</Button>
				</Content>
				<Footer style={{justifyContent: 'center',alignItems: 'center',backgroundColor: '#e0e0e0'}}>
					<Text style={{fontSize: 13}}>Belum punya akun ? </Text>
					<Text
					onPress={()=>this.props.navigation.navigate('Daftar')}
					style={{fontSize: 13,textDecorationLine: 'underline', color: '#42b549'}}>Daftar Sekarang</Text>
				</Footer>
			</Container>
		)
	}
}
