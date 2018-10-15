import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Left, Right, ScrollableTab, Content,Card, CardItem } from 'native-base';

import Pulsa from './component/Pulsa';
import PaketData from './component/PaketData';
import Mtix from './component/Mtix';


export default class ProdukDigital extends Component {
	render(){
		return(
			<Card>
				<View style={{flexDirection: 'row'}}>
					<Left style={{margin: 12,}}>
						<Text style={{ fontWeight: 'bold',color: 'black'}} >Produk Digital</Text>
					</Left>
					<Right style={{margin: 12}}>
						<Text style={{color: '#42b549', fontSize: 12}}>Lihat Semua</Text>
					</Right>
				</View>
				<Tabs  locked={true}   tabBarUnderlineStyle={{borderBottomWidth:0, backgroundColor:'#42b549'}}>
					<Tab heading={<TabHeading  style={{backgroundColor: 'white'}}><Text>Pulsa</Text></TabHeading>}>	
						<Pulsa/>
					</Tab>
					<Tab heading={<TabHeading style={{backgroundColor: 'white'}}><Text>Paket Data</Text></TabHeading>}>	
						<PaketData/>
					</Tab>
					<Tab heading={<TabHeading style={{backgroundColor: 'white'}}><Text>M-Tix XXI</Text></TabHeading>}>	
						<Mtix/>
					</Tab>
				</Tabs>
			</Card>
		)
	}
}

