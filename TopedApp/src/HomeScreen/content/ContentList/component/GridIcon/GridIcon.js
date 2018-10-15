import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import {Icon} from "native-base";
import GridView from 'react-native-super-grid';

export default class GridIcon extends Component{
	render(){
		const items = [
			{name: 'Kategori', icon: 'ios-basket', color: '#42b549'},
			{name: 'Tagihan', icon: 'md-paper', color: 'black'},
			{name: 'Tiket', icon: 'ios-card', color: '#ff5722'},
			{name: 'Jual', icon: 'md-home', color: '#42b549'},
			{name: 'Official Store', icon: 'ios-checkmark-circle-outline', color: 'purple'},
			{name: 'Voucher Game', icon: 'ios-game-controller-b', color: '#42b549'},
			{name: 'Kartu Kredit', icon: 'md-card', color: 'yellow'},
			{name: 'Pinjaman Online', icon: 'md-cash', color:'green'},
			{name: 'Keuangan', icon: 'ios-cash', color: 'green'},
			{name: 'TV Kabel', icon: 'desktop', color: 'blue'}
		];
		return(
			<View style={{height:200, backgroundColor: '#e0e0e0'}}>
		      <GridView
		        itemDimension={30}
		        items={items}
		        spacing= {30}
		        renderItem={item => (
		        <View>
		          <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
		          	<Icon name={item.icon} style={{color: item.color}}/>
		          </View>
		            <Text style={{justifyContent: 'center',textAlign: 'center', fontSize: 7.5}}>{item.name}</Text>          
		        </View>
		        )}
		      />
		      </View>
		    );
		  }
		}

		