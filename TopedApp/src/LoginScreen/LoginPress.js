import React, {Component} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';

const LoginPress = ({navigation}) => (
	<View>
		<TouchableNativeFeedback onPress={()=>navigation.navigate('Masuk')} >
			<Text style={{color: '#42b549', marginRight: 15}}>Masuk</Text>
		</TouchableNativeFeedback>
	</View>
)

export default LoginPress;