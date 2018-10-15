import React, { Component } from 'react';
import{TouchableOpacity} from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Tabs,Tab,TabHeading,ScrollableTab, Icon } from 'native-base';

import Handphone from './component/Handphone';
import Elektronik from './component/Elektronik';
import Pakaian from './component/Pakaian';
import Kesehatan from './component/Kesehatan';
import Gaming from './component/Gaming';


export default class KategoriScreen extends Component {
  static navigationOptions = ({navigation})=>({
    headerLeft: <TouchableOpacity onPress={()=>navigation.popToTop()}><Icon name='md-close' style={{marginLeft: 20}}/></TouchableOpacity>,
  	headerTitle: 'Kategori'
  })
  render() {
    return (
      <Container>
        <Tabs  renderTabBar={()=><ScrollableTab/>}>
          <Tab heading={ <TabHeading style={{backgroundColor: 'white',}}>
          <Icon style={{color: 'black',}} name="ios-phone-portrait" /><Text style={{color:'black'}}>Handphone</Text></TabHeading>}>
            <Handphone/>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: 'white',}}>
          <Icon style={{color: 'black'}} name="radio" /><Text style={{color:'black'}}>Elektronik</Text></TabHeading>}>
            <Elektronik/>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: 'white',}}>
          <Icon style={{color: 'black'}} name="ios-shirt" /><Text style={{color:'black'}}>Baju & Pakaian</Text></TabHeading>}>
            <Pakaian/>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: 'white',}}>
          <Icon style={{color: 'black'}} name="medkit" /><Text style={{color:'black'}}>Kesehatan</Text></TabHeading>}>
            <Kesehatan/>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: 'white',}}>
          <Icon style={{color: 'black'}} name="ios-game-controller-b" /><Text style={{color:'black'}}>Gaming</Text></TabHeading>}>
            <Gaming/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
