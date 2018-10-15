import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class Kesehatan extends Component {
  render() {
    return (
        <Content>
          <List>
            <ListItem>
              <Text>Obat - Obatan</Text>
            </ListItem>
            <ListItem>
              <Text>Maternity</Text>
            </ListItem>
            <ListItem>
              <Text>Alat Bantu Kesehatan</Text>
            </ListItem>
            <ListItem>
              <Text>Essential Oil</Text>
            </ListItem>
            <ListItem>
              <Text>Kesehatan Wanita</Text>
            </ListItem>
            <ListItem>
              <Text>Diet & Vitamin</Text>
            </ListItem>
          </List>
        </Content>
    );
  }
}