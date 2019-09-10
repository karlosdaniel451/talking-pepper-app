import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Plant extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.plantImage} source={require('../assets/pepper.png')} />
        </View>
        <View>
          <Text style={styles.plantNameContainer}>{this.props.name}</Text>
          <Text style={styles.text}>Temperatura: {this.props.currentTemperature} °C</Text>
          <Text style={styles.text}>Umidade do ar: {this.props.airHumidity} %</Text>
          <Text style={styles.text}>Umidade do solo: {this.props.soilHumidity}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F1F28',
    marginTop: 0,
    padding: 12,
    borderRadius: 2
  },
  text: {
    color: '#ddd',
    fontSize: 18
  },
  plantImage: {
    //flex: 1,
    width: 40,
    height: 40
  },
  plantNameContainer: {
    color: '#ddd',
    fontSize: 26
  }
});
