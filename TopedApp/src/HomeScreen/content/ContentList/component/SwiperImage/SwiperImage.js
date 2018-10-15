import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	View,
	Image,
	Text,
	ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
				wrapper:{
					height: 140
				},
				slide1:{
					flex: 1,
					marginBottom: 0
				}
			})

export default class SwiperImage extends Component {
	render(){
		return(
			<Swiper style={styles.wrapper} showsButtons={false} paginationStyle={{position:'absolute', bottom: 10,right: 320}} autoplayTimeout={6} activeDotColor="#ff5722" autoplay={true}>
				<View style={styles.wrapper}>
					<Image source={require('../../../../../assets/swiper/1.jpg')} style={{width: '100%',height: 150}}></Image>
				</View>

				<View style={styles.wrapper}>
					<Image source={require('../../../../../assets/swiper/2.jpg')} style={{width: '100%',height: 150}}></Image>
				</View>
				
				<View style={styles.wrapper}>
					<Image source={require('../../../../../assets/swiper/3.jpg')} style={{width: '100%',height: 150}}></Image>
				</View>

				<View style={styles.wrapper}>
					<Image source={require('../../../../../assets/swiper/4.jpg')} style={{width: '100%',height: 150}}></Image>
				</View>			
			</Swiper>
		)
	}
}