import  React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback, ScrollView, FlatList, Image, CheckBox, ActivityIndicator} from 'react-native';
import {Icon, Container, Button, } from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid'
import { connect } from 'react-redux';

import {fetchCart} from '../actions/cart';
import {getKurir} from '../actions/kurir';

class CheckoutScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        headerLeft: <Icon onPress={()=>navigation.navigate('Cart')} name='md-arrow-back' style={{marginLeft: 17, fontSize: 24}} />,
        headerTitle: <Text style={{color: 'black'}}>Checkout</Text>
    })

    constructor(props) {
      super(props)
    
      this.state = {
         checked: false,
         price: 0,
         id: this.props.navigation.getParam('_id'),
         kurir: false,
         name: '',
         kurirPrice: 0,
         totalPrice: 0,
         qty: 0,
         isPressed: false,
      };
    };
    
    handeDonasi = () => {
        this.setState({
            checked: !this.state.checked,
        })
        if (this.state.checked == false) {
            this.setState({
                totalPrice: this.state.totalPrice + 100
            })
        }else{
            this.setState({
                totalPrice: this.state.totalPrice - 100
            })
        }
    }

    componentDidMount = () => {
        this.props.dispatch(fetchCart())
        .then(result => {
            this.props.cart.cart.map((data) => {
               this.setState({
                   price: data.price,
                   qty: data.qty
               })
            })
            if (this.state.id !== undefined) {
                this.props.dispatch(getKurir(this.state.id))
                .then(result => {
                    this.setState({
                        totalPrice: this.state.price + result.value.data.price,
                        kurir: true,
                        name: result.value.data.name,
                        kurirPrice: result.value.data.price
                    })
                })    
            }
        })
    }

    dropdownSub = () => {
        this.setState({
            isPressed: !this.state.isPressed
        })
    }

    handleCheckout = () => {
        if (this.state.kurir == false) {
            alert('Silahkan Pilih Kurir Terlebih Dahulu')
        }else{
            this.props.navigation.navigate('Payment', {price: this.state.totalPrice})
        }
    }

    _keyExtractor = (item, index) => item._id;

    render(){
        if(this.props.cart.fetching){
            return (
              <Container style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                    <ActivityIndicator color='#42b549' />
                    <Text style={{marginLeft: 10}}>Loading...</Text>
                </View>
              </Container>
            )
          }
        return(
            <Container>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <TouchableNativeFeedback>
                        <View style={styles.kuponView}>
                            <Icon name='ticket' type='Entypo' style={styles.kuponIcon} />
                            <Text style={styles.kuponText}>  Gunakan Kode Promo atau Kupon</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <View style={styles.viewAlamat}>
                        <View flexDirection='row'>
                            <Text style={styles.penerima}>Muhammad Aji Raharjo </Text>
                            <Text style={styles.textAlamat}>(Alamat Rumah)</Text>
                        </View>
                        <Text style={styles.textAlamat}>Komplek Pengayoman Jl.Eksekusi 4 No.17 Rt.02 Rw.13,</Text>
                        <Text style={styles.textAlamat}>Tangerang, Kota Tangerang, Banten, 0895320632799</Text>
                    </View>
                    <View style={styles.viewAlamatLain}>
                        <Row size={12}>
                            <Col sm={6}>
                                <TouchableNativeFeedback >
                                    <View style={styles.viewPilihAlamatLain}>
                                        <Text style={styles.textPilihAlamat}>Pilih Alamat Lain</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </Col>
                            <Col sm={6}>
                                <TouchableNativeFeedback>
                                    <View padding={10}>
                                        <Text style={styles.textAlamatLain}>Kirim ke Alamat Lain</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </Col>
                        </Row>
                    </View>
                    <FlatList
                        data = {this.props.cart.cart}
                        extraData={this.state}
                        keyExtractor = {this._keyExtractor}
                        renderItem = 
                        {({item}) => (
                            <View style={styles.viewFlatlist}>
                                <View padding={10}>
                                    <View flexDirection='row'>
                                        <Text style={styles.textPenjual}>Penjual: </Text>
                                        <Text style={styles.textNamaPenjual}>{item.productId.nama_penjual}</Text>
                                    </View>
                                    <View style={styles.viewImage}>
                                        <Image
                                            resizeMode='contain'
                                            style={styles.image}
                                            source={{uri: item.productId.images[0]}}
                                        />
                                        <View flex={1}>
                                            <Text style={styles.name}>{item.productId.name}</Text>
                                            <Text style={styles.qty}>{item.qty} barang ({item.productId.berat})</Text>
                                            <Text style={styles.price}>Rp {item.productId.price}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.viewKurir}>
                                    {
                                        (this.state.kurir == false) ? 
                                        <Row size={12}>
                                            <Col sm={6}>
                                                <View marginTop={5}>
                                                    <Text style={styles.kurir}>Kurir Pengiriman</Text>
                                                </View>
                                            </Col>
                                            <Col sm={6}>
                                                <View >
                                                    <Button block 
                                                        onPress={()=>this.props.navigation.navigate('Kurir')}
                                                        style={styles.buttonKurir}>
                                                        <Text style={styles.textButtonKurir}>Pilih Kurir</Text>
                                                    </Button>
                                                </View>
                                            </Col>
                                        </Row>
                                        :
                                        <Row size={12}>
                                            <Col sm={6}>
                                                <View marginTop={5}>
                                                    <Text style={styles.textLamaPengiriman}>Next Day (1 hari)</Text>
                                                    <Text style={styles.kurirName}>{this.state.name} - Rp {this.state.kurirPrice}</Text>
                                                </View>
                                            </Col>
                                            <Col sm={6}>
                                                <TouchableNativeFeedback 
                                                    onPress={()=>this.props.navigation.push('Kurir')}>
                                                    <View style={styles.viewUbahKurir}>
                                                            <Text style={styles.textUbahKurir}>Ubah Kurir</Text>
                                                    </View>
                                                </TouchableNativeFeedback>
                                            </Col>
                                        </Row>
                                    }
                                </View>
                                {
                                    (this.state.isPressed == false) ? 
                                    <View>
                                        <TouchableNativeFeedback onPress={()=>this.dropdownSub()}>
                                            <View style={styles.viewSubtotal}>
                                                <Row size={12}>
                                                    <Col sm={6}>
                                                        <View marginTop={5}>
                                                            <Text style={styles.textSubtotal}>Subtotal</Text>
                                                        </View>
                                                    </Col>
                                                    <Col sm={6}>
                                                        <View style={styles.viewSubtotalPrice}>
                                                        {
                                                            (this.state.kurir == false) ?
                                                            <Text style={styles.textTotalPrice}>Rp {this.state.price} </Text> :
                                                            <Text style={styles.textTotalPrice}>Rp {this.state.totalPrice} </Text>
                                                        }
                                                            <Icon name='keyboard-arrow-down' type='MaterialIcons' style={styles.iconSubtotal}/>
                                                        </View>
                                                    </Col>
                                                </Row>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View> 
                                    : 
                                    <View>
                                        <TouchableNativeFeedback onPress={()=>this.dropdownSub()}>
                                            <View style={styles.viewSubtotal}>
                                                <Row size={12}>
                                                    <Col sm={6}>
                                                        <View marginTop={5}>
                                                            <Text style={styles.textSubtotal}>Subtotal</Text>
                                                        </View>
                                                    </Col>
                                                    <Col sm={6}>
                                                        <View style={styles.viewSubtotalPrice}>
                                                        {
                                                            (this.state.kurir == false) ?
                                                            <Text style={styles.textTotalPrice}>Rp {this.state.price} </Text> :
                                                            <Text style={styles.textTotalPrice}>Rp {this.state.totalPrice} </Text>
                                                        }
                                                            <Icon name='keyboard-arrow-up' type='MaterialIcons' style={styles.iconSubtotal}/>
                                                        </View>
                                                    </Col>
                                                </Row>
                                            </View>
                                        </TouchableNativeFeedback>
                                        <View style={styles.viewBarang}>
                                            <Row size={12}>
                                                <Col sm={6}>
                                                    <View marginTop={5}>
                                                        <Text style={styles.textBarang}>Harga ({this.state.qty} Barang)</Text>
                                                    </View>
                                                </Col>
                                                <Col sm={6}>
                                                    <View style={styles.viewSubtotalPrice}>
                                                        <Text style={styles.textTotalPrice}>Rp {this.state.price} </Text>
                                                    </View>
                                                </Col>
                                            </Row>
                                        </View>
                                        <View style={styles.viewBarang}>
                                            <Row size={12}>
                                                <Col sm={6}>
                                                    <View marginTop={5}>
                                                        <Text style={styles.textOngkos}>Ongkos Kirim</Text>
                                                    </View>
                                                </Col>
                                                <Col sm={6}>
                                                    <View style={styles.viewSubtotalPrice}>
                                                        <Text style={styles.textTotalPrice}>Rp {this.state.kurirPrice} </Text>
                                                    </View>
                                                </Col>
                                            </Row>
                                        </View>
                                    </View>
                                }
                            </View>
                        )}
                    />
                    <TouchableNativeFeedback onPress={() => this.handeDonasi()}>
                        <View style={styles.viewDonasi}>
                            <CheckBox value={this.state.checked} onChange={() => this.handeDonasi()}/>
                            <Text style={styles.textDonasi}>TopDonasi100 </Text>
                            <Icon name='information-variant' type='MaterialCommunityIcons' style={styles.iconDonasi}/>
                        </View>
                    </TouchableNativeFeedback>
                    <View style={styles.viewTotal}>
                        {
                            (this.state.kurir == false ) ?   
                            <View>     
                                <Row size={12}>
                                    <Col sm={6}>
                                        <View flexDirection='row'>
                                            <Text style={styles.textTotal}>Total Harga </Text>
                                            <Text style={styles.textTotal}>({this.state.qty} barang)</Text>
                                        </View>
                                    </Col>
                                    <Col sm={6}>
                                        <View >
                                            <Text style={styles.textTotalHarga}>Rp {this.state.price}</Text>
                                        </View>
                                    </Col>
                                </Row>
                            </View> 
                            :
                            <View>     
                                <Row size={12} marginBottom={10}>
                                    <Col sm={6}>
                                        <View flexDirection='row'>
                                            <Text style={styles.textTotal}>Total Harga </Text>
                                            <Text style={styles.textTotal}>({this.state.qty} barang)</Text>
                                        </View>
                                    </Col>
                                    <Col sm={6}>
                                        <View >
                                            <Text style={styles.textTotalHarga}>Rp {this.state.price}</Text>
                                        </View>
                                    </Col>
                                </Row>
                                <Row size={12}>
                                    <Col sm={6}>
                                        <View>
                                            <Text style={styles.textTotal}>Total Ongkos Kirim</Text>
                                        </View>
                                    </Col>
                                    <Col sm={6}>
                                        <View >
                                            <Text style={styles.textTotalHarga}>Rp {this.state.kurirPrice}</Text>
                                        </View>
                                    </Col>
                                </Row>
                            </View>
                        }
                    </View>
                </ScrollView>
                <View flexDirection='row' width='100%' style={styles.footer}>
                    <Row size={12}>
                        <Col sm={6}>
                        {
                            (this.state.kurir == false) ?
                            <View>
                                <Text style={styles.textTotalTagihan}>Total Tagihan</Text>
                                <Text style={styles.text}> - </Text>
                            </View>
                            :
                            <View>
                                <Text style={styles.textTotalTagihan}>Total Tagihan</Text>
                                <Text style={styles.text}>Rp {this.state.totalPrice}</Text>
                            </View>
                        }
                        </Col>
                        <Col sm={6}>
                            <Button block
                            onPress={() => this.handleCheckout()}
                            style={styles.buttonFooter}>
                                <Text style={styles.textButtonFooter}>Bayar</Text>
                            </Button>
                        </Col>
                    </Row>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    iconDonasi: {
        fontSize: 20, 
        marginTop: 3, 
        color: 'grey'
    },
    text: {
        color: 'orangered', 
        fontSize: 14
    },
    textButtonFooter: {
        color: 'white', 
        fontSize: 14
    },
    buttonFooter: {
        width: 150, 
        height: 35, 
        alignSelf: 'flex-end', 
        backgroundColor: '#FF2400'
    },
    textTotalTagihan: {
        fontSize: 12
    },
    textTotalHarga: {
        color: 'black', 
        fontSize: 12, 
        alignSelf: 'flex-end'
    },
    textTotal: {
        fontSize: 12
    },
    viewTotal: {
        flexDirection: 'row', 
        marginTop: 10, 
        borderTopWidth: 1, 
        borderBottomWidth: 2.25, 
        borderColor: 'lightgrey',
        padding: 10, 
        marginBottom: 70
    },
    textDonasi: {
        fontSize: 14, 
        marginTop: 5
    },
    viewDonasi: {
        flexDirection: 'row', 
        marginTop: 10, 
        borderTopWidth: 1, 
        borderBottomWidth: 2.25, 
        borderColor: 'lightgrey', 
        padding: 5
    },
    textOngkos: {
        fontSize: 12, 
        color: 'grey', 
        fontWeight: '500'
    },
    textBarang: {
        fontSize: 12, 
        color: 'grey', 
        fontWeight: '500'
    },
    viewBarang: {
        padding: 10, 
        justifyContent: 'center'
    },
    iconSubtotal: {
        fontSize: 14, 
        marginTop: 2, 
        color: '#42b549'
    },
    textTotalPrice: {
        fontSize: 12, 
        color: 'black'
    },
    viewSubtotalPrice: {
        flexDirection: 'row', 
        alignSelf: 'flex-end'
    },
    textSubtotal: {
        fontSize: 12, 
        color: 'grey', 
        fontWeight: '500'
    },
    viewSubtotal: {
        padding: 10, 
        justifyContent: 'center', 
        borderTopWidth: 1, 
        borderColor: 'lightgrey'
    },
    textUbahKurir: {
        color: '#42b549', 
        fontSize: 12
    },
    viewUbahKurir: {
        alignSelf: 'flex-end', 
        padding: 10
    },
    kurirName:{
        fontSize: 11
    },
    textLamaPengiriman: {
        fontSize: 12, 
        color: 'black'
    },
    textButtonKurir: {
        color: 'white',
        fontSize: 12,
        fontWeight: '500'
    },
    buttonKurir: {
        backgroundColor: '#42b549', 
        width: 100, 
        height:28, 
        alignSelf: 'flex-end'
    },
    kurir: {
        fontSize: 12
    },
    viewKurir: {
        marginTop: 10, 
        padding: 10, 
        justifyContent: 'center', 
        borderTopWidth: 1, 
        borderColor: 'lightgrey'
    },
    price: {
        color: 'red'
    },
    qty: {
        fontSize: 12
    },
    name: {
        color: 'black'
    },
    image: {
        height: 50, width: 50, marginTop: 3, marginRight: 10
    },
    viewImage: {
        flexDirection: 'row', 
        marginTop: 10
    },
    textNamaPenjual: {
        fontSize: 12, 
        color: 'black'
    },
    textPenjual: {
        fontSize: 12
    },
    viewFlatlist: {
        borderTopWidth: 1, 
        borderColor: 'lightgrey', 
        borderBottomWidth: 2.25, 
        marginTop: 5
    },
    textAlamatLain: {
        fontSize: 12, 
        alignSelf: 'center'
    },
    textPilihAlamat: {
        fontSize: 12, 
        alignSelf: 'center'
    },
    viewPilihAlamatLain: {
        borderRightWidth: 1 , 
        borderColor: 'lightgrey', 
        padding: 10
    },
    viewAlamatLain: {
        flexDirection: 'row', 
        marginTop: 5, 
        borderTopWidth: 1, 
        borderColor: 'lightgrey', 
        borderBottomWidth: 2.25
    },
    textAlamat: {
        fontSize: 12
    },
    penerima: {
        fontSize: 12, 
        fontWeight: '500'
    },
    viewAlamat: {
        padding: 10, 
        borderTopWidth: 1.35, 
        borderColor: 'lightgrey'
    },
    footer: {
        position: 'absolute', 
        backgroundColor: '#FFF', 
        bottom: 0, 
        left: 0, 
        padding: 10,
        borderColor: 'lightgrey',
        borderTopWidth: 1,
        marginTop: 80
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
        height: 45,
        marginBottom: 15
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
})

const mapStateToProps = (state) => {
    return{
        cart : state.cart,
        kurir : state.kurir
    }
}

export default connect(mapStateToProps)(CheckoutScreen);