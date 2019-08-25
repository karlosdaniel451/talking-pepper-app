import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Alert extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image style={styles.plantImage} source={require('../assets/pepper.png')} />
          <Text style={styles.text}>{this.props.plantName}</Text>
          <Text style={styles.text}>{this.props.time}</Text>
        </View>
        <View style={styles.messageContanier}>
          <Text style={styles.text}>{this.props.message}</Text>
          <Text style={styles.text}>Valor: {this.props.value}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#292935',
    marginTop: 16,
    padding: 10,
    borderRadius: 2
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
    //alignItems: ''
  },
  plantImage: {
    //flex: 1,
    width: 30,
    height: 30,
    marginBottom: 1
  },
  messageContanier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%'
  },
  text: {
    color: '#eee'
  }
});
