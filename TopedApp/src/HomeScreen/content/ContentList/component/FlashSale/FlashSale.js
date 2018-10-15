import React, {Component} from 'react';
import {View,Image,Text,ScrollView,} from 'react-native';
import {Container, Content, Left, Body, Right, Button, Card, CardItem} from 'native-base';

export default class FlashSale extends Component{
	constructor(props){
		super(props);
		this.state ={
			detik: 52,
			menit: 12,
			jam : 8,
		}
	}
	componentDidMount(){
		setInterval(()=>{
				this.setState({
					detik: this.state.detik + 1,
				})
		},60000)
	}

	render(){
		return(
			<View style={{flexDirection: 'column', height: 200, backgroundColor: '#42b549'}}>
					<View style={{flexDirection: 'row'}}>
						<Text style={{margin: 20,color: 'white', fontWeight: 'bold'}}>Flash Sale</Text>
						<Button
						style={{backgroundColor: 'white', marginTop: 20,marginRight: 2,height: 20, width: 20,justifyContent: 'center'}}>
							<Text style={{color:'black'}}>{this.state.jam}</Text>
						</Button>
						<Text style={{color: 'white', fontWeight: 'bold', marginRight: 2,marginTop: 20}}>:</Text>
						<Button style={{backgroundColor: 'white', marginTop: 20,marginRight: 2,height: 20, width: 20,justifyContent: 'center'}}>
							<Text style={{color:'black'}}>{this.state.menit}</Text>
						</Button>
						<Text style={{color: 'white', fontWeight: 'bold',marginTop: 20,marginRight: 2}}>:</Text>
						<Button style={{backgroundColor: 'white', marginTop: 20,marginRight: 2,height: 20, width: 20,justifyContent: 'center'}}>
							<Text style={{color:'black'}}>{this.state.detik}</Text>
						</Button>
						<Body/>
						<Left>
							<Button style={{borderRadius: 4,height: 30,backgroundColor: 'white',width: 90, justifyContent: 'center'}}>
								<Text style={{color: '#42b549', fontWeight: 'bold'}}>Lihat Semua</Text>
							</Button>
						</Left>
					</View>
					<ScrollView style={{marginLeft: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
							<Card >
								<CardItem>
									<Image style={{height: 100,width: 70}} source={require('../../../../../assets/flashsale/1.jpg')}/>
								</CardItem>
							</Card>
							<Card >
								<CardItem>
									<Image style={{height: 100,width: 70}} source={require('../../../../../assets/flashsale/2.jpg')}/>
								</CardItem>
							</Card>
							<Card >
								<CardItem>
									<Image style={{height: 100,width: 70}} source={require('../../../../../assets/flashsale/3.jpg')}/>
								</CardItem>
							</Card>
							<Card >
								<CardItem>
									<Image style={{height: 100,width: 70}} source={require('../../../../../assets/flashsale/4.jpg')}/>
								</CardItem>
							</Card>
							<Card >
								<CardItem>
									<Image style={{height: 100,width: 70}} source={require('../../../../../assets/flashsale/5.jpg')}/>
								</CardItem>
							</Card>
							<Card >
								<CardItem>
									<Image style={{height: 100,width: 70}} source={require('../../../../../assets/flashsale/6.jpg')}/>
								</CardItem>
							</Card>

						</ScrollView>
			</View>
		)
	}
}
