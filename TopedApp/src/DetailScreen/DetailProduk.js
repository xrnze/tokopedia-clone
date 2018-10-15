import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {Icon, Container, List, ListItem, Button, Form, Item, Input, Left, Right, Body, Label} from 'native-base'; 
import { connect } from 'react-redux';

import {getProduct} from '../actions/products';
import {saveCart} from '../actions/cart';

class DetailProduk extends Component {

    static navigationOptions = ({navigation}) => ({
        headerLeft: <Icon
                     onPress={()=>navigation.goBack()} 
                     name='md-close' style={{marginLeft: 20, color: 'grey'}}/>,
        headerTitle: <Text style={{color: 'black'}}>Detail Produk</Text>
    })
    
    constructor(props) {
      super(props)
    
      this.state = {
         product : this.props.navigation.getParam('product', '_id'),
         number: 1,
         totalHarga: 0,
      };
    };
    
    componentDidMount = () => {
        this.props.dispatch(getProduct(this.state.product._id))
        .then(result => {
            this.setState({
                totalHarga: this.props.products.productDetail.price
            })
        })
    }

    handlePlus = () => {
        this.setState({
            number: this.state.number + 1,
            totalHarga: this.state.totalHarga * 2
        })
    }

    handleMinus = () => {
        this.setState({
            number: this.state.number - 1,
            totalHarga: this.state.totalHarga / 2
        })
    }

    handleBuy = (product) => {
        const value = {
            productId: product._id,
            price: this.state.totalHarga,
            qty: this.state.number
        }
        this.props.dispatch(saveCart(value))
        .then(result => {
            this.props.navigation.navigate('Cart')
        })
    }

    render(){
        const product = this.props.products.productDetail
        return(
            <Container>
                <ScrollView>
                    <View style={styles.viewProduct}>
                        <Image
                         resizeMode='contain'
                         style={styles.image}
                         source={{uri: product.images[0]}}
                        />
                        <View flexDirection='column' marginLeft={10} flex={1}>
                            <Text style={styles.name}>{product.name}</Text>
                            <Text style={styles.price}>Rp {product.price}</Text>
                        </View>
                    </View>
                    <View style={styles.viewStok}>
                        <Left>
                            <Text style={styles.stok}>Stok Tersedia</Text>
                            <Text>Jumlah</Text>
                        </Left>
                        <Body />
                        <Right flexDirection='row' style={styles.viewOrder}>
                            <Icon name='minus'
                             onPress={() => this.handleMinus()}
                             type='EvilIcons'  style={styles.iconOrder} />
                            <View style={styles.viewNumber}>
                                <Text style={styles.number}>{this.state.number}</Text>
                            </View>
                            <Icon name='plus'
                             onPress={() => this.handlePlus()}
                             type='EvilIcons'  style={styles.iconOrder} />
                        </Right>
                    </View>
                    <View padding={10}>
                        <Text style={{color: 'black'}}>Catatan untuk Penjual (Opsional)</Text>
                        <Item>
                            <Input style={{fontSize: 14, width: '95%'}} />
                        </Item>
                    </View>
                </ScrollView>
                <View flexDirection='row' width='100%' style={styles.footer}>
                    <Left>
                        <Text style={{color: 'black', fontSize: 13}}>Total Harga</Text>
                        <Text style={{color: 'red'}}>Rp {this.state.totalHarga}</Text>
                    </Left>
                    <Right>
                        <Button block
                        onPress={() => this.handleBuy(product)}
                        style={styles.buttonFooter}>
                            <Text style={{color: 'white'}}>Beli Sekarang</Text>
                        </Button>
                    </Right>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute', 
        backgroundColor: '#FFF', 
        bottom: 0, 
        left: 0, 
        padding: 10
    },
    viewNumber: {
        borderBottomWidth: 1, 
        width: 40,
        borderColor: 'lightgrey'
    },
    buttonFooter: {
        backgroundColor: '#FF2400', 
        width: 200, 
        height: 40, 
        alignSelf: 'flex-end'
    },
    number: {
        fontSize: 16, 
        alignSelf: 'center', 
        color: 'black'
    }, 
    viewOrder: {
        marginLeft: 85,
        marginTop: 20
    },
    viewStok: {
        width: '95%', 
        borderBottomWidth: 1, 
        alignSelf: 'center', 
        borderColor: 'lightgrey',
        flexDirection: 'row',
        paddingBottom: 25,
        paddingTop: 15
    },
    iconOrder: {
        color: '#42b549'
    },
    stok: {
        color: 'black', 
        marginBottom: 5
    }, 
    viewProduct: {
        padding: 10, 
        flexDirection: 'row',
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
    image: {
        width: 60, 
        height: 60
    },
    name: {
        color: 'black',
        fontSize: 14,
        flexWrap: 'wrap'
    },
    price: {
        fontSize: 16,
        color: 'red',
        marginTop: 20
    }
})

const mapStateToProps = (state) => {
    return{
        products: state.products
    }
}

export default connect(mapStateToProps)(DetailProduk)