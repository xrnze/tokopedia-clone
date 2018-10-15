import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class Handphone extends Component {
  render() {
    return (
        <Content>
          <List>
            <ListItem>
              <Text>Tablet</Text>
            </ListItem>
            <ListItem>
              <Text>Aksesoris Tablet</Text>
            </ListItem>
            <ListItem>
              <Text>Power Bank</Text>
            </ListItem>
            <ListItem>
              <Text>Smartwatch</Text>
            </ListItem>
            <ListItem>
              <Text>Tablet</Text>
            </ListItem>
            <ListItem>
              <Text>Aksesoris Handphone</Text>
            </ListItem>
          </List>
        </Content>
    );
  }
}