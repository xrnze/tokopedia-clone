import React, { Component } from 'react';
import {View, Text, Image, ScrollView, TouchableNativeFeedback, StyleSheet} from 'react-native';
import {Container, Icon, Button} from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid'
import {connect} from 'react-redux';

import {deleteCart} from '../actions/cart';

class TunaiPayment extends Component {

    static navigationOptions = ({navigation}) => ({
        headerLeft: null,
        headerTitle: <TouchableNativeFeedback
                        onPress={()=>navigation.goBack()}>
                        <View style={{padding: 10, width: '90%', borderWidth: 1, borderColor: 'lightgrey', borderRadius: 3, marginLeft: 18}}>
                            <Text style={{color: 'black', fontSize: 14, alignSelf: 'center'}}>Ganti Metode Pembayaran</Text>
                        </View>
                     </TouchableNativeFeedback>,
        headerStyle: {
            elevation: 0,
            borderWidth: 1,
            borderColor: 'lightgrey',
        }
    })

    constructor(props) {
      super(props)
    
      this.state = {
         image: this.props.navigation.getParam('image'),
         price: this.props.navigation.getParam('price'),
         name: this.props.navigation.getParam('name')
      }
    }
    
    handleBayar = () => {
        this.props.dispatch(deleteCart())
        .then(result => {
            this.props.navigation.navigate('Home')
        })
    }

    render() {
        return (
            <Container>
                <ScrollView>
                    <View style={styles.viewDetail}>
                        <Row size={12}>
                            <Col sm={6}>
                                <Text style={styles.total}>Rp {this.state.price}</Text>
                            </Col>
                            <Col sm={6}>
                                <Text style={styles.detail}>Detail Tagihan</Text>
                            </Col>
                        </Row>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.viewTunai}>
                            <Row size={12}>
                                <Col sm={6}>
                                    <Text style={styles.gerai}>{this.state.name}</Text>
                                </Col>
                                <Col sm={6}>
                                    <Image
                                        resizeMode='contain'
                                        style={styles.geraiImage}
                                        source={{uri: this.state.image}}
                                    />
                                </Col>
                            </Row>
                        </View>
                        <View style={styles.viewTutorial}>
                            <Image
                                resizeMode='contain'
                                style={styles.tutorialImage}
                                source={{uri: 'https://scontent-sit4-1.xx.fbcdn.net/v/t1.15752-9/44269427_491605288008467_7818211780173234176_n.png?_nc_cat=109&oh=e5607c73881ce081b886f6f91714bca1&oe=5C50EF8A'}}
                            />
                            <View>
                                <Text style={styles.tutorial}>Pembayaran juga dapat dilakukan melalui</Text>
                                <Text style={styles.tutorial}>gerai retail lain dengan biaya layanan yang</Text>
                                <Text style={styles.tutorial}>berbeda</Text>
                            </View>
                        </View>
                        <View style={styles.daftar}>
                            <Row size={12}>
                                <Col sm={8}>
                                    <Text style={styles.textDaftar}>Lihat Daftar biaya Layanan</Text>
                                </Col>
                                <Col sm={4}>
                                    <View flexDirection='row' alignSelf='flex-end'>
                                        <Text style={styles.textDetail}>(2 Retail)   </Text>
                                        <Icon name='ios-arrow-forward' style={styles.arrow}/>
                                    </View>
                                </Col>
                            </Row>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.viewFooter}>
                    <Button block
                        onPress={()=>this.handleBayar()}
                        style={styles.footerButton}>
                        <Text style={{color: 'white'}}>Bayar</Text>
                    </Button>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    footerButton: {
        backgroundColor: '#FF2400', 
        height: 50, 
        width: '95%', 
        alignSelf: 'center', 
        borderRadius: 3
    },
    viewFooter: {
        position: 'absolute', 
        bottom: 0, 
        padding: 10, 
        width: '100%', 
        backgroundColor: 'white', 
        borderTopWidth: 1, 
        borderColor: 'lightgrey'
    },
    textDetail: {
        color: '#42b549'
    },
    textDaftar: {
        fontSize: 15
    },
    daftar: {
        flexDirection: 'row', 
        padding: 10, 
        borderTopWidth: 1, 
        borderColor: 'lightgrey'
    },
    tutorial: {
        marginLeft: 4, 
        fontSize: 15
    },
    tutorialImage: {
        height: 200, 
        width: '100%', 
        alignSelf: 'center'
    },
    viewTutorial: {
        padding: 10, 
        flex: 1
    },
    geraiImage: {
        width: 70, 
        height: 40, 
        alignSelf: 'flex-end', 
    },
    gerai: {
        marginTop: 7, 
        fontSize: 15,
        marginLeft: 10
    },
    viewTunai: {
        flexDirection: 'row', 
        padding: 10, 
        borderBottomWidth: 1, 
        borderColor: 'lightgrey', 
        height: 60
    },
    container: {
        borderWidth: 1, 
        borderColor: 'lightgrey', 
        marginTop: 15, 
        margin: 15, 
        marginBottom: 85
    },
    arrow: {
        fontSize: 18,
        color: 'grey',
        marginTop: 2,
        color: 'black',
    },
    viewDetail: {
        backgroundColor: 'white', 
        flexDirection: 'row', 
        padding: 17, 
        width: '92%', 
        alignSelf: 'center', 
        marginTop: 10, 
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: 'lightgrey', 
        borderRadius: 3,
        elevation: 2
    },
    detail: {
        alignSelf: 'flex-end', 
        fontSize: 13, 
        color: '#42b549', 
        marginTop: 2.5
    },
    total: {
        color: 'black', fontSize: 17
    }
})

const mapStateToProps = (state) => {
    return{
        cart: state.cart
    }
}

export default connect(mapStateToProps)(TunaiPayment);