import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Divider from './Divider';

export default class Plant extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <View style={styles.row}>
          <Text>Temperatura:</Text>
          <Text>{this.props.temperature} °C</Text>
        </View>
        <View style={styles.row}>
          <Text>Umidade</Text>
          <Text>{this.props.humidity} %</Text>
        </View>
        <View style={styles.row}>
          <Text>Luminosidade</Text>
          <Text>{this.props.lightOn}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row'
  },
  divider: {
    borderColor: '#E0E6ED',
    borderWidth: 1
  }
});
