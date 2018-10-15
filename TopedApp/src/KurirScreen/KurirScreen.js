import React, { Component } from 'react';
import {View, Text, TouchableNativeFeedback, ScrollView, FlatList, ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import {Icon, Container} from 'native-base';

import {fetchKurir} from '../actions/kurir';

class KurirScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        headerLeft: <TouchableNativeFeedback
                        onPress={()=>navigation.goBack()}>
                        <Icon name="close" type='EvilIcons' style={{color: 'grey', marginLeft: 10}}/>
                    </TouchableNativeFeedback>,
        headerTitle: <Text style={{color: 'grey'}}>Pilih Kurir Pengiriman</Text>
    })

    componentDidMount = () => {
        this.props.dispatch(fetchKurir())
    }

    _keyExtractor = (item, index) => item._id

    handleAddKurir = (id) => {
        this.props.navigation.push('Checkout', {_id: id})
    }

    render(){
        if(this.props.kurir.fetching){
            return (
              <Container style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                    <ActivityIndicator color='#42b549' />
                    <Text style={{marginLeft: 10}}>Loading...</Text>
                </View>
              </Container>
            )
          }
        return (
            <Container>
                <ScrollView>
                    <View>
                        <View style={{padding: 10}}>
                            <Text style={{color: 'black', fontWeight: '400'}}>Next Day (1 hari)</Text>
                            <Text style={{fontSize: 12}}>Perkiraan tiba dihitung sejak pesanan dikirim</Text>
                        </View>
                        <FlatList
                            data={this.props.kurir.kurir}
                            keyExtractor={this._keyExtractor}
                            renderItem= 
                            {({item}) => (
                                <TouchableNativeFeedback
                                    onPress={()=>this.handleAddKurir(item._id)}>
                                    <View style={{padding: 10}}>
                                        <Text>{item.name} (Rp {item.price})</Text>
                                        <Text>{item.waktu}</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            )}
                        />
                    </View>
                </ScrollView>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        kurir: state.kurir
    }
}
export default connect(mapStateToProps)(KurirScreen);