import React, { Component } from "react";
import {View, Text} from 'react-native';
import { Container, Header, Content, Icon, Picker, Form, Item, Input, Button } from "native-base";

export default class Mtix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key0"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
        <Content>
          <Form>
            <Text style={{marginLeft: 10, marginTop: 15, marginBottom: 15}}>Nomor Telepon</Text>
            <Item style={{height: 22, marginBottom: 5,marginRight: 20}}>
              <Input style={{fontSize: 12}} placeholder='Contoh 081234567890' />
              <Text style={{color: 'gold'}}>XXI</Text>
            </Item>
             <Text style={{marginLeft: 10,}}>Nominal</Text>           
            <Picker
              mode="dropdown"
              iosHeader="Nominal"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined,marginLeft: 10,height: 30 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Rp 100.000" value="key0" />
              <Picker.Item label="Rp 150.000" value="key1" />
              <Picker.Item label="Rp 200.000" value="key2" />
              <Picker.Item label="Rp 250.000" value="key3" />
              <Picker.Item label="Rp 300.000" value="key4" />
              <Picker.Item label="Rp 500.000" value="key5" />
              <Picker.Item label="Rp 750.000" value="key6" />
              <Picker.Item label="Rp 1.0000.000" value="key7" />
              <Picker.Item label="Rp 1.500.000" value="key8" />
              <Picker.Item label="Rp 3.000.000" value="key9" />
            </Picker>
            <Button block style={{backgroundColor: '#ff5722', marginLeft: 12, marginRight: 20, height: 35}}>
              <Text style={{color: 'white'}}>Beli</Text>
            </Button>
          </Form>
        </Content>
    );
  }
}