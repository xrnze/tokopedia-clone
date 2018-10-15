import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class Elektronik extends Component {
  render() {
    return (
        <Content>
          <List>
            <ListItem>
              <Text>Pencahayaan</Text>
            </ListItem>
            <ListItem>
              <Text>Vaporizer</Text>
            </ListItem>
            <ListItem>
              <Text>Audio</Text>
            </ListItem>
            <ListItem>
              <Text>TV</Text>
            </ListItem>
            <ListItem>
              <Text>Media Player</Text>
            </ListItem>
            <ListItem>
              <Text>Tool & Kit</Text>
            </ListItem>
          </List>
        </Content>
    );
  }
}