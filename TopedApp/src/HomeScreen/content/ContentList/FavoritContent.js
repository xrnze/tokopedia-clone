import React, {Component} from 'react';
import {View,  Image, Text} from 'react-native';
import {Button, Container, Content,Header} from 'native-base';


const FavoritContent = ({navigation}) => (
	<Container>
		<View style={{flex: 1, alignItems: 'center',margin: 20}} >
				<Image source={require('../../../assets/favorit/1.jpg')}
				style={{height: 180, width: 280,marginTop: 20,alignItems: 'center'}}/>
				<Text style={{textAlign: 'center'}}>Wishlist masih kosong</Text>
				<Text style={{marginTop: 7, textAlign: 'center', justifyContent: 'center'}}>Anda belum menambahkan barang/toko favorit</Text>
				<Text style={{marginBottom: 10, textAlign: 'center'}}>Anda</Text>
		</View>
	</Container>
		)

export default FavoritContent;
