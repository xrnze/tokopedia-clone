import React, { Component } from 'react';
import {View, Text, ScrollView, TouchableNativeFeedback, StyleSheet, FlatList, Image, Alert, ActivityIndicator} from 'react-native';
import {Icon, Container, Left, Body, Right, Button} from 'native-base';
import { connect } from 'react-redux';

import {fetchCart, deleteItem} from '../actions/cart';

class CartScreen extends Component {
    
    static navigationOptions = ({navigation}) => ({
        headerLeft: <Icon name='md-arrow-back' style={{fontSize: 24, marginLeft: 20}} onPress={()=>navigation.popToTop()}/>,
        headerTitle: <Text style={{color: 'black'}}>Keranjang</Text>,
        headerRight: <Text style={{marginRight: 10}}>Hapus</Text>,
        headerStyle: {
            elevation: 2
        }
    })

   state = {
       number: 1
   }

    componentDidMount = () => {
      this.props.dispatch(fetchCart())
    };
    
    _keyExtractor = (item, index) => item._id;

    handlePlus = () => {
        this.setState({
            number: this.state.number + 1,
        })
    }

    handleMinus = () => {
        this.setState({
            order: this.state.number - 1,
        })
    }

    handleDelete = (id) => {
        this.props.dispatch(deleteItem(id))
    }

    deleteConfirm = (id) => {
        Alert.alert(
          'Hapus Barang ?',
          '1 barang anda akan dihapus dari keranjang belanja Anda',
          [
            {text: 'Tidak', onPress:() => console.log('Canceled'), style: 'cancel'},
            {text: 'Ya', onPress: () => this.handleDelete(id)}
          ]
        )
      }
    
    render(){
        if(this.props.cart.fetching){
            return (
              <Container style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                    <ActivityIndicator color='#42b549' />
                    <Text style={{marginLeft: 10}} >Loading...</Text>
                </View>
              </Container>
            )
          }
        return(
            <Container>
                {
                    (this.props.cart.cart.length > 0) ? 
                    <ScrollView>
                        <TouchableNativeFeedback>
                            <View style={styles.kuponView}>
                                <Icon name='ticket' type='Entypo' style={styles.kuponIcon} />
                                <Text style={styles.kuponText}>  Gunakan Kode Promo atau Kupon</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <FlatList
                            data={this.props.cart.cart}
                            keyExtractor={this._keyExtractor}
                            renderItem = 
                            {({item}) => (
                                <View style={styles.viewItem}>
                                    <View style={styles.penjualProduk}>
                                        <Left flexDirection='row'>
                                            <Text style={styles.penjual}>Penjual: </Text>
                                            <Text style={styles.namaPenjual}>{item.productId.nama_penjual}</Text>
                                        </Left>
                                        <Right>
                                            <TouchableNativeFeedback
                                             onPress={() => this.deleteConfirm(item._id)}>
                                                <Icon style={styles.trash} type='EvilIcons' name='trash' />
                                            </TouchableNativeFeedback>
                                        </Right>
                                    </View>
                                    <View style={styles.viewProduk}>
                                        <View style={styles.produk}>
                                            <Image
                                                resizeMode='contain'
                                                style={styles.image}
                                                source={{uri: item.productId.images[0]}}
                                            />
                                            <View style={styles.viewName}>
                                                <Text style={styles.textName}>{item.productId.name}</Text>
                                                <Text style={styles.textPrice}>Rp {item.price}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.viewQty}>
                                            <Left/>
                                            <Body/>
                                            <Right style={styles.qty}>
                                                <TouchableNativeFeedback
                                                  onPress={() => this.handleMinus()}>
                                                    <Icon name='minus'
                                                    type='EvilIcons'  style={styles.iconQty} />
                                                </TouchableNativeFeedback>
                                                <View style={styles.viewNumber}>
                                                    <Text style={{color: 'black', alignSelf: 'center'}}>{item.qty}</Text>
                                                </View>
                                                <TouchableNativeFeedback
                                                  onPress={() => this.handlePlus()}>
                                                    <Icon name='plus'
                                                    type='EvilIcons' style={styles.iconQty} />
                                                </TouchableNativeFeedback>
                                            </Right>
                                        </View>
                                    </View>
                                    <View style={styles.viewCatatan}>
                                        <Text>Catatan untuk penjual (Opsional) </Text>
                                        <Text style={styles.catatanText}>Tulis Catatan</Text>
                                    </View>
                                </View>
                            )}
                        /> 
                    </ScrollView> :
                    <View style={styles.noCartView}>
                        <Icon name= 'cart-off' type='MaterialCommunityIcons' style={styles.noCartIcon}/>
                        <Text style={styles.noCartText}>Keranjang Anda Kosong</Text>
                    </View> 
                }
                {
                    (this.props.cart.cart.length > 0) ?
                    <View style={styles.footer}>
                        {
                                this.props.cart.cart.map((data, key) => (
                                    <View key={key}>
                                        <Text>Total Harga ({data.qty} Barang)</Text>
                                        <Text key={key} style={styles.textPrice}>Rp {data.price}</Text>
                                    </View>
                                ))
                            }
                        <Right>
                            <Button block
                            onPress={() => this.props.navigation.navigate('Checkout')}
                            style={styles.footerButton}>
                                <Text style={styles.buttonText}>Checkout</Text>
                            </Button>
                        </Right>
                    </View> :
                    <View>

                    </View>
                }          
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    buttonText: {
        color: 'white'
    },
    footerButton: {
        width: 200, 
        height: 40, 
        backgroundColor: '#FF2400', 
        alignSelf: 'flex-end'
    },
    footer: {
        position: 'absolute', 
        backgroundColor: '#FFF', 
        bottom: 0, 
        left: 0, 
        padding: 10, 
        flexDirection: 'row', 
        borderTopWidth: 1, 
        borderColor: 'lightgrey'
    },
    noCartText: {
        fontSize: 20
    },
    noCartIcon: {
        fontSize: 72, 
        color: '#42b549'
    },
    noCartView: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    catatanText: {
        color: '#42b549', 
        fontSize: 12, 
        fontWeight: '500',
        marginTop: 2
    },
    catatan:{
        flexDirection: 'row', 
    },
    viewCatatan: {
        flexDirection: 'row', 
        padding: 10
    },
    viewNumber: {
        borderBottomWidth: 1, 
        width: 40, 
        borderColor: '#42b549'
    },
    iconQty: {
        color: '#42b549'
    },
    qty: {
        flexDirection: 'row', 
        alignSelf: 'flex-end'
    },
    viewQty: {
        marginTop: 10
    },
    textPrice: {
        color: 'red'
    },
    textName: {
        color: 'black', 
        marginBottom: 15, 
        fontSize: 14, 
        fontWeight: '300'
    },
    viewName: {
        flex: 1, 
        marginLeft: 5
    },
    image: {
        width: 50, 
        height: 50, 
        marginTop: 3
    },
    produk: {
        flexDirection: 'row'
    },
    viewProduk: {
        padding: 10, 
        paddingTop: 15, 
        borderBottomWidth: 1, 
        borderBottomColor: 'lightgrey'
    },
    trash: {
        color: 'grey'
    },
    namaPenjual: {
        color: 'black', 
        fontSize: 12
    },
    penjual: {
        fontSize: 12
    },
    penjualProduk: {
        flexDirection:'row', 
        padding: 10,
         borderBottomWidth: 1, 
         borderColor: 'lightgrey'
    },
    viewItem: {
        backgroundColor: 'white', 
        marginTop: 15, 
        borderTopWidth: 1, 
        borderBottomWidth: 2.5, 
        borderColor: 'lightgrey'
    },
    kuponText: {
        color: '#42b549', 
        marginTop: 3, 
        fontSize: 12, 
        fontWeight: '700'
    },
    kuponIcon: {
        color: '#42b549', 
        fontSize: 16, 
        marginTop: 3
    },
    kuponView: {
        backgroundColor: 'white', 
        flexDirection: 'row' ,
        alignSelf: 'center',
        width: '95%', 
        borderTopWidth: 1, 
        borderBottomWidth: 1, 
        borderLeftWidth: 0.5,  
        borderRightWidth: 0.5, 
        borderColor: 'lightgrey', 
        borderRadius: 5, 
        padding: 10, 
        marginTop: 10, 
        height: 45
    }
})

const mapStateToProps = (state) => {
    return{
        cart: state.cart
    }
}

export default connect(mapStateToProps)(CartScreen);