import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const RefreshButton = props => {
  return (
    <View>
      <Icon
        style={styles.container}
        name="refresh"
        type="material"
        color="#00CC55"
        onPress={props.onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default RefreshButton;
