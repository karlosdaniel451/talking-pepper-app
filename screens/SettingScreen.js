import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import registerForPushNotificationsAsync from '../services/push-notifications';

export default class SettingScreen extends Component {
  componentDidMount() {
    //console.log(registerForPushNotificationsAsync());
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.containerText}>Configurações!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F1F28'
  },
  containerText: {
    color: '#ddd'
  }
});
