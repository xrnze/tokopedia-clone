import React, {Component} from 'react';
import {View,Text, ScrollView, AppRegistry, StyleSheet, StatusBar} from 'react-native';
import {Content} from 'native-base';

import SwiperImage from './component/SwiperImage/SwiperImage';
import GridIcon from './component/GridIcon/GridIcon';
import FlashSale from './component/FlashSale/FlashSale';
import BestSeller from './component/BestSeller/BestSeller';
import Kerabat from './component/Kerabat/Kerabat';
import Gadget from './component/Gadget/Gadget';
import CategoryHighlight from './component/CategoryHighlight/CategoryHighlight';
import CategoryPilihan from './component/CategoryPilihan/CategoryPilihan';
import BelanjaPerlengkapan from './component/BelanjaPerlengkapan/BelanjaPerlengkapan';
import KreasiLokal from './component/KreasiLokal/KreasiLokal';
import InspirasiMakanan from './component/InspirasiMakanan/InspirasiMakanan';
import ProdukDigital from './component/ProdukDigital/ProdukDigital';


const HomeContent = ({navigation}) => (
	<ScrollView style={{flex: 1}} vertical={true} showsVerticalScrollIndicator={false}>
		<StatusBar
		 backgroundColor="#079004"
		 barStyle="light-content"
		/>
		<View>
			<SwiperImage />
			<GridIcon />
			<FlashSale/>
			<BestSeller/>
			<Kerabat/>
			<Gadget/>
			<CategoryHighlight/>
			<CategoryPilihan/>
			<BelanjaPerlengkapan/>
			<KreasiLokal/>
			<InspirasiMakanan/>
			<ProdukDigital/>
		</View>
	</ScrollView>
	)

export default HomeContent;
