import React, { Component } from 'react';
import {View, Text, Image, ScrollView, StyleSheet,} from 'react-native';
import {Container, Icon, List, ListItem} from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid';

class PaymentScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        header: null
    })

    constructor(props) {
      super(props)
    
      this.state = {
       price : this.props.navigation.getParam('price')
      };
    };
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
                    <View padding={20}>
                        <Text style={styles.metode}>Pilih Metode Pembayaran</Text>
                    </View>
                    <View padding={15} style={styles.viewTokoCash}>
                        <Text style={styles.textDana}>Dana di Tokopedia</Text>
                        <View flexDirection='row' >
                            <Row size={12}>
                                <Col sm={2}> 
                                    <Icon name='wallet' type='SimpleLineIcons' style={styles.iconWallet} />
                                </Col>
                                <Col sm={8}>
                                    <View>
                                        <Text style={styles.tokocash}>TokoCash</Text>
                                        <Text style={styles.tokocash}>Rp 0</Text>
                                    </View>
                                </Col>
                                <Col sm={2}>
                                    <Icon name='ios-arrow-forward' style={styles.arrow}/>
                                </Col>
                            </Row>
                        </View>
                    </View>
                    <View>
                        <View padding={10}>
                            <Text style={styles.option}>Transfer Bank (Verifikasi Manual)</Text>
                        </View>
                        <List>
                            <ListItem
                                onPress={()=>this.props.navigation.navigate('Bank', 
                                {image: 'https://statik.tempo.co/data/2018/02/06/id_682386/682386_720.jpg', 
                                price: this.state.price, 
                                name: 'Bank Mandiri'})}>
                                <Row size={12}>
                                    <Col sm={3}>
                                        <Image
                                            resizeMode = 'contain'
                                            style={{height: 40, width: 70}}
                                            source={{uri: 'https://statik.tempo.co/data/2018/02/06/id_682386/682386_720.jpg'}}
                                        />
                                    </Col>
                                    <Col sm={7} justifyContent='center'>
                                        <Text style={styles.bank}>Bank Mandiri</Text>
                                    </Col>
                                    <Col sm={2}>
                                        <Icon name='ios-arrow-forward' style={styles.arrow}/>
                                    </Col>
                                </Row>
                            </ListItem>
                            <ListItem
                                onPress={()=>this.props.navigation.navigate('Bank', 
                                {image: 'https://3.bp.blogspot.com/-ZK6W9UlA3lw/V15RGexr3yI/AAAAAAAAAJ4/nkyM9ebn_qg3_rQWyBZ1se5L_SSuuxcDACLcB/s640/Bank_Central_Asia.png', 
                                price: this.state.price, 
                                name: 'Bank BCA'})}>    
                                <Row size={12}>
                                    <Col sm={3}>
                                        <Image
                                            resizeMode = 'contain'
                                            style={{height: 40, width: 70}}
                                            source={{uri: 'https://3.bp.blogspot.com/-ZK6W9UlA3lw/V15RGexr3yI/AAAAAAAAAJ4/nkyM9ebn_qg3_rQWyBZ1se5L_SSuuxcDACLcB/s640/Bank_Central_Asia.png'}}
                                        />
                                    </Col>
                                    <Col sm={7} justifyContent='center'>
                                        <Text style={styles.bank}>Bank BCA</Text>
                                    </Col>
                                    <Col sm={2}>
                                        <Icon name='ios-arrow-forward' style={styles.arrow}/>
                                    </Col>
                                </Row>
                            </ListItem>
                            <ListItem
                                onPress={()=>this.props.navigation.navigate('Bank', 
                                {image: 'https://d38wlcdzwz02m5.cloudfront.net/about/cdn/farfuture/tVWtgE3jsSFqzYchutnoTpas9qSLthSVxI964y6HPm0/mtime:1531326682/sites/mktg-new/files/bri.png', 
                                price: this.state.price, 
                                name: 'Bank BRI'})}> 
                                <Row size={12}>
                                    <Col sm={3}>
                                        <Image
                                            resizeMode = 'contain'
                                            style={{height: 40, width: 70}}
                                            source={{uri: 'https://d38wlcdzwz02m5.cloudfront.net/about/cdn/farfuture/tVWtgE3jsSFqzYchutnoTpas9qSLthSVxI964y6HPm0/mtime:1531326682/sites/mktg-new/files/bri.png'}}
                                        />
                                    </Col>
                                    <Col sm={7} justifyContent='center'>
                                        <Text style={styles.bank}>Bank BRI</Text>
                                    </Col>
                                    <Col sm={2}>
                                        <Icon name='ios-arrow-forward' style={styles.arrow}/>
                                    </Col>
                                </Row>
                            </ListItem>
                            <ListItem
                                onPress={()=>this.props.navigation.navigate('Bank', 
                                {image: 'https://dplk.bni.co.id/theme/front/images/logo/BNI-logo.png', 
                                price: this.state.price, 
                                name: 'Bank BNI'})}>
                                <Row size={12}>
                                    <Col sm={3}>
                                        <Image
                                            resizeMode = 'contain'
                                            style={{height: 40, width: 70}}
                                            source={{uri: 'https://dplk.bni.co.id/theme/front/images/logo/BNI-logo.png'}}
                                        />
                                    </Col>
                                    <Col sm={7} justifyContent='center'>
                                        <Text style={styles.bank}>Bank BNI</Text>
                                    </Col>
                                    <Col sm={2}>
                                        <Icon name='ios-arrow-forward' style={styles.arrow}/>
                                    </Col>
                                </Row>
                            </ListItem>
                            <ListItem
                                onPress={()=>this.props.navigation.navigate('Bank', 
                                {image: 'https://awsimages.detik.net.id/community/media/visual/2015/11/15/d87106a8-fe17-40b3-95ab-581fc88616c9_169.jpg?w=780&q=90', 
                                price: this.state.price, 
                                name: 'Bank CIMB'})}>
                                <Row size={12}>
                                    <Col sm={3}>
                                        <Image
                                            resizeMode = 'contain'
                                            style={{height: 40, width: 70}}
                                            source={{uri: 'https://awsimages.detik.net.id/community/media/visual/2015/11/15/d87106a8-fe17-40b3-95ab-581fc88616c9_169.jpg?w=780&q=90'}}
                                        />
                                    </Col>
                                    <Col sm={7} justifyContent='center'>
                                        <Text style={styles.bank}>Bank CIMB</Text>
                                    </Col>
                                    <Col sm={2}>
                                        <Icon name='ios-arrow-forward' style={styles.arrow}/>
                                    </Col>
                                </Row>
                            </ListItem>
                        </List>
                    </View>
                    <View>
                        <View padding={10}>
                            <Text style={styles.option}>Tunai di Gerai Retail</Text>
                        </View>
                        <List>
                            <ListItem
                                onPress={()=>this.props.navigation.navigate('Tunai', 
                                {image: 'https://scontent-sit4-1.xx.fbcdn.net/v/t1.15752-9/44176769_1723106781145798_4239706992639213568_n.jpg?_nc_cat=108&oh=aabe2f4ea65d0fd0afafcf19591f248d&oe=5C4AED0C', 
                                price: this.state.price, 
                                name: 'Alfamart'})}>
                                <Row size={12}>
                                    <Col sm={3}>
                                        <Image
                                            resizeMode = 'contain'
                                            style={{height: 40, width: 70}}
                                            source={{uri: 'https://scontent-sit4-1.xx.fbcdn.net/v/t1.15752-9/44176769_1723106781145798_4239706992639213568_n.jpg?_nc_cat=108&oh=aabe2f4ea65d0fd0afafcf19591f248d&oe=5C4AED0C'}}
                                        />
                                    </Col>
                                    <Col sm={7} justifyContent='center'>
                                        <Text style={styles.bank}>Alfamart / Alfamidi / Lawson</Text>
                                    </Col>
                                    <Col sm={2}>
                                        <Icon name='ios-arrow-forward' style={styles.arrow}/>
                                    </Col>
                                </Row>
                            </ListItem>
                            <ListItem
                                onPress={()=>this.props.navigation.navigate('Tunai', 
                                {image: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Logo_Indomaret.png', 
                                price: this.state.price, 
                                name: 'Indomaret'})}>
                                <Row size={12}>
                                    <Col sm={3}>
                                        <Image
                                            resizeMode = 'contain'
                                            style={{height: 40, width: 70}}
                                            source={{uri: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Logo_Indomaret.png'}}
                                        />
                                    </Col>
                                    <Col sm={7} justifyContent='center'>
                                        <Text style={styles.bank}>Indomaret / Ceriamart</Text>
                                    </Col>
                                    <Col sm={2}>
                                        <Icon name='ios-arrow-forward' style={styles.arrow}/>
                                    </Col>
                                </Row>
                            </ListItem>
                        </List>
                    </View>
                </ScrollView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    bank: {
        fontSize: 14,
    },
    option: {
        fontSize: 17,
        color: 'black',
    },
    viewTokoCash: {
        borderColor: 'lightgrey', 
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        elevation: 3, 
    },
    arrow: {
        alignSelf: 'flex-end',
        fontSize: 20,
        marginTop: 10,
        color: 'grey'
    },
    tokocash: {
        fontSize: 16,
    },
    iconWallet: {
        fontSize: 32,
        color: 'grey',
        marginTop: 2
    },
    textDana: {
        color: 'black',
        fontWeight: '400',
        fontSize: 17,
        marginBottom: 20
    },
    metode: {
        color: 'black',
        fontWeight: '400',
        fontSize: 16
    },
    detail: {
        alignSelf: 'flex-end', 
        fontSize: 13, 
        color: '#42b549', 
        marginTop: 2.5
    },
    total: {
        color: 'black', fontSize: 17
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
    }
})


export default PaymentScreen;