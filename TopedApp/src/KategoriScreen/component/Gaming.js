import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class Handphone extends Component {
  render() {
    return (
        <Content>
          <List>
            <ListItem>
              <Text>Game Console</Text>
            </ListItem>
            <ListItem>
              <Text>CD Game</Text>
            </ListItem>
            <ListItem>
              <Text>Pc dan Laptop Gaming</Text>
            </ListItem>
          </List>
        </Content>
    );
  }
}