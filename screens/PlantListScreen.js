import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { Icon, Button } from 'react-native-elements';

import Plant from '../components/Plant';
import Divider from '../components/Divider';

const URLBase = 'http://192.168.0.4:3000/plants/data/';

export default class PlantListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };

    setInterval(() => {
      this.loadPlantsData();
    }, 3000);
  }

  componentDidMount() {
    this.loadPlantsData();
  }

  loadPlantsData = async () => {
    const responsePlant1 = await fetch(URLBase + '1');

    const plant1 = await responsePlant1.json();

    this.setState({
      data: plant1
    });

    console.log(this.state.data);
  };

  rechargeScreen = () => {
    this.loadPlantsData();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonRefreshContainer}>
          <Button
            style={styles.refreshButton}
            icon={<Icon name="refresh" size={20} />}
            onPress={this.rechargeScreen}
            buttonStyle={styles.refreshButton}
          />
        </View>
        <View style={styles.plantsContainer}>
          <Plant
            name="Pimenteira"
            currentTemperature={this.state.data.temperatura}
            airHumidity={this.state.data.umidade_ar}
            soilHumidity={this.state.data.umidade_solo}
          />
          <Divider color="#ddd" thickness={0.5} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1F1F28'
  },
  buttonRefreshContainer: {
    marginLeft: '85%',
    marginBottom: 0,
    width: '13%',
    height: '13%'
  },
  refreshButton: {
    backgroundColor: '#00CC55',
    top: -140
  },
  plantsContainer: {
    top: -180
  }
});
