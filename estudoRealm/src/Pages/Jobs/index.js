import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Jobs extends Component {
 render(){
  return (
    <View>
        <Text> {this.props.data.nome} </Text>
    </View>
   );
 }
}