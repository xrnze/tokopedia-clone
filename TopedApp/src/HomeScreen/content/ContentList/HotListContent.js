import React, {Component} from 'react';
import {Container, Content, Card, CardItem, Thumbnail, Left, Body, Right} from 'native-base';
import {View, Text, Image, ScrollView} from 'react-native';

export default class HotListScreen extends Component{
	render(){
		return(
			<View style={{flex: 1}}>
				<ScrollView vertical={true} showsVerticalScrollIndicator={false}>
					<Content style={{margin:5}}>
						<Card>
							<CardItem cardBody>
								<Image source={require('../../../assets/hotlist/1.jpg')} style={{width: 380,height: 170}}/>
							</CardItem>
							<CardItem style={{height: 30}}>
								<Left >
									<Text style={{fontSize: 11, color: '#42b549'}}>Samsung Galaxy Note 9</Text>
								</Left>
								<Body/>
								<Right style={{flexDirection: 'row'}}>
									<Text style={{fontSize: 11}} >Mulai dari :  </Text>
									<Text style={{fontWeight: 'bold',fontSize: 11}}> Rp 13jt</Text>
								</Right>
							</CardItem>
						</Card>
						<Card>
							<CardItem cardBody>
								<Image source={require('../../../assets/hotlist/2.jpg')} style={{width: 380,height: 170}}/>
							</CardItem>
							<CardItem style={{height: 30}}>
								<Left >
									<Text style={{fontSize: 11, color: '#42b549'}}>Habbat Garlic Oil 99</Text>
								</Left>
								<Body/>
								<Right style={{flexDirection: 'row'}}>
									<Text style={{fontSize: 11}} >Mulai dari :  </Text>
									<Text style={{fontWeight: 'bold',fontSize: 11}}> Rp 30rb</Text>
								</Right>
							</CardItem>
						</Card>
						<Card>
							<CardItem cardBody>
								<Image source={require('../../../assets/hotlist/3.jpg')} style={{width: 370,height: 170}}/>
							</CardItem>
							<CardItem style={{height: 30}}>
								<Left >
									<Text style={{fontSize: 11, color: '#42b549'}}>Pilkita</Text>
								</Left>
								<Body/>
								<Right style={{flexDirection: 'row'}}>
									<Text style={{fontSize: 11}} >Mulai dari :  </Text>
									<Text style={{fontWeight: 'bold',fontSize: 11}}> Rp 1500</Text>
								</Right>
							</CardItem>
						</Card>
						<Card>
							<CardItem cardBody>
								<Image source={require('../../../assets/hotlist/4.jpg')} style={{width: 380,height: 170}}/>
							</CardItem>
							<CardItem style={{height: 30}}>
								<Left >
									<Text style={{fontSize: 11, color: '#42b549'}}>Indomie Salted Egg</Text>
								</Left>
								<Body/>
								<Right style={{flexDirection: 'row'}}>
									<Text style={{fontSize: 11}} >Mulai dari :  </Text>
									<Text style={{fontWeight: 'bold',fontSize: 11}}> Rp 6000</Text>
								</Right>
							</CardItem>
						</Card>
						<Card>
							<CardItem cardBody>
								<Image source={require('../../../assets/hotlist/5.jpg')} style={{width: 380,height: 170}}/>
							</CardItem>
							<CardItem style={{height: 30}}>
								<Left >
									<Text style={{fontSize: 11, color: '#42b549'}}>Cooling Pad Lipat</Text>
								</Left>
								<Body/>
								<Right style={{flexDirection: 'row'}}>
									<Text style={{fontSize: 11}} >Mulai dari :  </Text>
									<Text style={{fontWeight: 'bold',fontSize: 11}}> Rp 10rb</Text>
								</Right>
							</CardItem>
						</Card>
					</Content>
				</ScrollView>
			</View>
		)
	}
}
