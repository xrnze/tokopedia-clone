import React, {Component} from 'react';
import {View,  Image, Text, FlatList, StyleSheet, TouchableNativeFeedback} from 'react-native';
import {Button, Container, Content, Header, Card, CardItem} from 'native-base';
import { connect } from 'react-redux';

import {fetchProducts} from '../../../actions/products';

class FeedContent extends Component {

	componentDidMount(){
		this.props.dispatch(fetchProducts())
	}

	_keyExtractor = (item, index) => item._id;

	render(){
		return(
			<Container style={{backgroundColor: 'white'}}>
				<FlatList
					data = {this.props.products.products}
					keyExtractor = {this._keyExtractor}
					renderItem = 
					{({item}) => (
						<Card>
							<TouchableNativeFeedback
							 onPress={() => this.props.navigation.push('View', {item})}>
								<CardItem bordered style={{flexDirection: 'column'}}>
									<Image
										resizeMode='contain' 
										style={styles.image}
										source={{uri: item.images[0]}}
									/>
									<View style={styles.cardItem}>
										<Text style={styles.textName}>{item.name}</Text>
										<Text style={styles.textPrice}>Rp {item.price}</Text>
									</View>
								</CardItem>
							</TouchableNativeFeedback>
						</Card>
					)}
				/>
			</Container>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		products: state.products
	}
}

const styles = StyleSheet.create({
	image: {
		height: 200, 
		width: "100%",
		borderWidth: 100,
		marginBottom: 5
	},
	textName: {
		color: '#696969'
	},
	cardItem: {
		alignSelf: 'flex-start',
		width: '100%',
	},
	textPrice: {
		color: 'red'
	}
})

export default connect(mapStateToProps)(FeedContent);
