import React, {Component} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';

const DaftarPress = ({navigation}) => (
	<View>
		<TouchableNativeFeedback onPress={()=>navigation.navigate('Daftar')} >
			<Text style={{color: '#42b549', marginRight: 15}}>Daftar</Text>
		</TouchableNativeFeedback>
	</View>
)

export default DaftarPress;