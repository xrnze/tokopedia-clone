import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class Handphone extends Component {
  render() {
    return (
        <Content>
          <List>
            <ListItem>
              <Text>Atasan</Text>
            </ListItem>
            <ListItem>
              <Text>Sepatu</Text>
            </ListItem>
            <ListItem>
              <Text>Celana</Text>
            </ListItem>
            <ListItem>
              <Text>Outerwear</Text>
            </ListItem>
            <ListItem>
              <Text>Jam Tangan</Text>
            </ListItem>
            <ListItem>
              <Text>Batik Pria</Text>
            </ListItem>
          </List>
        </Content>
    );
  }
}