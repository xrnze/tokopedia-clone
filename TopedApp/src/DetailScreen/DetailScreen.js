import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {Container, List, ListItem, Button, Icon, Left, Body, Right, } from 'native-base';
import Swiper from 'react-native-swiper';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import { connect } from 'react-redux';

import {getProduct} from '../actions/products';

class DetailScreen extends Component {
    
    static navigationOptions = ({navigation}) => ({
        headerLeft: <Icon name='md-arrow-back' style={{color: 'white', fontSize: 24, marginLeft: 20}} onPress={()=>navigation.goBack()} />,
        headerRight: <View flexDirection='row'>
                        <Icon style={{marginTop: 4, marginRight: 20, color: 'white'}} name='share-google' type='EvilIcons' />
                        <Icon style={{marginTop: 4, marginRight: 15, color: 'white'}} type='EvilIcons' name='cart'/>
                        <Icon style={{color: 'white'}}type='MaterialCommunityIcons' name='dots-vertical' />
                     </View>,
        headerTransparent: true,
        headerStyle: {
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
        }
})

    constructor(props) {
      super(props)
    
      this.state = {
         item: this.props.navigation.getParam('item', '_id'),
         images: []
      }
    }
    
    componentDidMount(){
        this.props.dispatch(getProduct(this.state.item._id))
        .then(result => this.setState({images: this.props.products.productDetail.images}))
    }

    render(){
        const product = this.props.products.productDetail;
        return(
            <Container>
                <ScrollView style={{backgroundColor: 'white'}} showsVerticalScrollIndicator={false}>
                    <View style={{height: 380}}>
                        <Swiper activeDotColor="#42b549" >
                            {this.state.images.map((image, i)=> (
                            <View key={i} style={{flex: 1, justifyContent: 'flex-start'}}>
                                <Image
                                resizeMode='contain'
                                source={{uri: image}}
                                style={{height: 385, width: '100%'}}
                                />
                            </View>
                            ))}
                        </Swiper>
                    </View>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.price}>Rp {product.price}</Text>
                    <View style={styles.stockView}>
                        <Icon style={styles.stockIcon} name='md-checkmark-circle-outline'/>
                        <Text style={styles.stockText}>  Stok Tersedia</Text>
                    </View>
                    <View  style={styles.rowView}>
                        <Row size={12}>
                            <Col sm={4}>
                                <View style={styles.colView}>
                                    <View style={styles.iconView}>
                                        <Icon name='md-star' style={{fontSize: 16, color: 'gold'}} />
                                        <Icon name='md-star' style={{fontSize: 16, color: 'gold'}} />
                                        <Icon name='md-star' style={{fontSize: 16, color: 'gold'}} />
                                        <Icon name='md-star' style={{fontSize: 16, color: 'gold'}} />
                                        <Icon name='md-star' style={{fontSize: 16, color: 'grey'}} />
                                    </View>
                                    <Text style={styles.ulasan}>0 Ulasan</Text>
                                </View>
                            </Col>
                            <Col sm={4}>
                                <View style={styles.colView}>
                                    <View style={styles.iconView}>
                                        <Icon name='ios-chatbubbles-outline' style={{fontSize: 16, color: '#42b549'}}/>
                                    </View>
                                    <Text style={styles.diskusi}>51 Diskusi</Text>
                                </View>
                            </Col>
                            <Col sm={4}>
                                <View>
                                    <View style={styles.iconView}>
                                        <Icon type="MaterialCommunityIcons" name="truck-fast" style={{fontSize: 16, color: '#42b549'}}/>
                                    </View>
                                    <Text style={styles.kurir}>6 Kurir</Text>
                                </View>
                            </Col>
                        </Row>
                    </View>
                    <View style={styles.cicilanBox}>
                        <Text style={styles.simulasi}>Simulasi Cicilan</Text>
                        <Text style={styles.cicilan}>Cicilan Kartu Kredit Bunga 0% dari 17 Bank</Text>
                    </View>
                    <View style={styles.rowView}>
                        <Text style={styles.informasi}>Informasi produk</Text>
                        <List>
                            <ListItem>
                                <Row size={12}>
                                    <Col sm={3}>
                                        <View style={{alignSelf: 'center'}}>
                                            <Icon style={styles.iconProductInformasi} type="MaterialCommunityIcons" name="truck-fast"/>
                                            <Text style={styles.textProductInformasi}>Terkirim</Text>
                                            <Text style={styles.textProductInformasi}>{product.terkirim}</Text>
                                        </View>
                                    </Col>
                                    <Col sm={3}>
                                        <View style={{alignSelf: 'center'}}>
                                            <Icon style={styles.iconProductInformasi} type="FontAwesome" name="eye"/>
                                            <Text style={styles.textProductInformasi}>Dilihat</Text>
                                            <Text style={styles.textProductInformasi}>{product.dilihat}</Text>
                                        </View>
                                    </Col>
                                    <Col sm={3}>
                                        <View style={{alignSelf: 'center'}}>
                                            <Icon style={styles.iconProductInformasi} type="MaterialCommunityIcons" name="shield-half-full"/>
                                            <Text style={styles.textProductInformasi}>Asuransi</Text>
                                            <Text style={styles.textProductInformasi}>{product.asuransi}</Text>
                                        </View>
                                    </Col>
                                    <Col sm={3}>
                                        <View style={{alignSelf: 'center'}}>
                                            <Icon style={styles.iconProductInformasi} type="MaterialCommunityIcons" name="weight"/>
                                            <Text style={styles.textProductInformasi}>Berat</Text>
                                            <Text style={styles.textProductInformasi}>{product.berat}</Text>
                                        </View>
                                    </Col>
                                </Row>
                            </ListItem>
                            <ListItem style={{flexDirection: 'row'}}>
                                <Left>
                                    <Text >Transaksi Berhasil</Text>
                                </Left>
                                <Body/>
                                <Right>
                                    <Text style={{color: 'black'}}>{product.transaksi}%</Text>
                                </Right>
                            </ListItem>
                            <ListItem style={{flexDirection: 'row'}}>
                                <Left>
                                    <Text>Kondisi</Text>
                                </Left>
                                <Body/>
                                <Right>
                                    <Text style={{color: 'black'}}>{product.kondisi}</Text>
                                </Right>
                            </ListItem>
                            <ListItem style={{flexDirection: 'row'}}>
                                <Left>
                                    <Text>Pemesanan Min.</Text>
                                </Left>
                                <Body/>
                                <Right>
                                    <Text style={{color: 'black'}}>{product.pemesananMin}</Text>
                                </Right>
                            </ListItem>
                            <ListItem style={{flexDirection: 'row'}}>
                                <Left>
                                    <Text>Kategori</Text>
                                </Left>
                                <Right>
                                    <Text style={{color: '#42b549'}}>{product.kategori}</Text>
                                </Right>
                            </ListItem>
                            <ListItem style={{flexDirection: 'row'}}>
                                <Left>
                                    <Text>Etalase</Text>
                                </Left>
                                <Right>
                                    <Text style={{color: '#42b549'}}>{product.etalase}</Text>
                                </Right>
                            </ListItem>
                        </List>
                    </View>
                    <View style={styles.rowView}>
                        <Text style={styles.deskripsi}>Deskripsi Produk</Text>
                        <Text>{product.deskripsi}</Text>
                    </View>
                    <View style={styles.seller}>
                        <Text style={styles.penjual}>Penjual</Text>
                        <View flexDirection='row' marginBottom={20}>    
                            <Image
                                resizeMode='contain'
                                source={{uri: product.avatar_penjual}}
                                style={styles.avatar_penjual}
                            />
                            <View>
                                <Text style={styles.nama_penjual}>{product.nama_penjual}</Text>
                                <Image
                                    resizeMode='contain'
                                    source={{uri: product.reputasi_penjual}}
                                    style={styles.reputasi_penjual}
                                />
                            </View>
                        </View>
                        <View flexDirection='row' >
                            <View style={{marginRight: 70}}>
                                <View flexDirection='row'>
                                    <Icon type='MaterialCommunityIcons' name='map-marker' style={styles.location} />
                                    <Text> {product.lokasi_penjual}</Text>
                                </View>
                                <View flexDirection='row'>
                                    <Icon type='MaterialCommunityIcons' name='clock' style={styles.location} />
                                    <Text> Hari Ini</Text>
                                </View>
                            </View>
                            <View flexDirection='row'>
                                <Button
                                    style={{marginRight: 10, padding: 5, backgroundColor: 'white', borderColor: 'grey', borderWidth: 0.5}}>
                                    <Text>Chat Penjual</Text>
                                </Button>
                                <Button style={{padding: 5, backgroundColor: '#42b549', }}>
                                    <Icon type='MaterialCommunityIcons' name='plus' style={{position: 'absolute', color: 'white', fontSize: 16}}/>
                                    <Text style={{color: 'white', marginLeft: 30}}>Favoritkan</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View flexDirection='row' width='100%' style={styles.footer}>
                    <Button style={styles.footerButton}>
                        <Icon type='MaterialCommunityIcons' name='message-outline' style={{color: 'grey'}}/>
                    </Button>
                    <Button style={styles.footerButton}>
                        <Icon type='MaterialCommunityIcons' name='cart-plus' style={{color: 'grey'}}/>
                    </Button>
                    <Button block 
                     onPress={()=>this.props.navigation.navigate('Detail',{product})}
                     style={styles.buttonBeli}>
                        <Text style={{color: 'white'}}>Beli</Text>
                    </Button>
                </View>
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
    buttonBeli: {
        backgroundColor: '#FF2400', 
        width: 225
    },
    footer: {
        position: 'absolute', 
        backgroundColor: '#FFF', 
        bottom: 0, 
        left: 0, 
        padding: 10
    },
    footerButton: {
        marginRight: 10, 
        backgroundColor: 'white', 
        borderWidth: 1, 
        borderColor: 'grey',
        elevation: 0,
    },
    seller: {
        padding: 10, 
        borderTopWidth: 1, 
        marginBottom: 80,
        borderColor: '#D3D3D3',
        backgroundColor: 'white',
        elevation: 4
    },
    location: {
        fontSize: 18, 
        color: 'lightgrey'
    },
    penjual: {
        color: 'black',
        marginBottom: 10,
        fontWeight: '800', 
        fontSize: 15
    },
    reputasi_penjual: {
        width: 20, 
        height: 20,
        marginLeft: 10, 
        marginTop: 10
    },
    nama_penjual: {
        marginLeft: 10, 
        color: 'black'
    },
    avatar_penjual: {
        width: 50,
        height:50
    }, 
    iconProductInformasi: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'grey'
    },
    textProductInformasi: {
        alignSelf: 'center',
        fontSize: 12,
        color: 'black'
    },
    informasi:{
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10
    }, 
    cicilanBox: {
        borderTopWidth: 1, 
        borderColor: '#D3D3D3', 
        padding: 10, 
        marginBottom: 20,
        backgroundColor: 'white',
        elevation: 4
    },
    simulasi: {
        fontSize: 18,
        color: 'black',
    },
    cicilan: {
        fontSize: 14,
        color: '#42b549'
    },  
    kurir: {
        alignSelf: 'center',
        color: '#42b549'
    },
    diskusi: {
        alignSelf: 'center',
        color: '#42b549'
    },
    deskripsi: {
        fontWeight: '800',
        color: 'black',
        marginBottom: 10
    }, 
    iconView: {
        flexDirection: 'row', 
        alignSelf: 'center'
    },
    ulasan: {
        alignSelf: 'center',
        color: '#42b549'
    },
    rowView: {
        padding: 10, 
        borderTopWidth: 1, 
        marginBottom: 20,
        borderColor: '#D3D3D3',
        backgroundColor: 'white',
        elevation: 4
    },
    colView: {
        borderRightWidth: 0.5, 
        borderRightColor: 'grey'
    },
    name: {
        color: 'black',
        fontWeight: 'normal',
        marginLeft: 10,
        marginTop: 10
    },  
    price: {
        color: 'red',
        marginLeft: 10,
        marginTop: 5

    },
    stockView: {
        flexDirection: 'row',
        backgroundColor: '#D3D3D3',
        width: '95%',
        height: 35,
        paddingTop: 7,
        alignSelf: 'center',
        marginTop: 5,
        borderRadius: 3,
        marginBottom: 15
    },
    stockText: {
        color: 'black',
        fontSize: 14,
    },
    stockIcon: {
        fontSize: 18,
        marginTop: 1,
        marginLeft: 10
    }
})

export default connect(mapStateToProps)(DetailScreen);