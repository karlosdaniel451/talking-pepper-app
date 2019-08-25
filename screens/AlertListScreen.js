import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

import Alert from '../components/Alert';

const URL = 'http://192.168.1.11:3000/api/alerts/';

export default class AlertListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      loading: false
    };
  }

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    if (this.state.loading) return;

    const { page } = this.state;

    this.setState({
      loading: true
    });

    const response = await axios.get(URL);
    const alerts = response.data;

    thereAreNoAlerts();

    this.setState({
      data: [...this.state.data, ...alerts.alerts],
      page: page + 1,
      loading: false
    });
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  };

  renderItem = ({ item }) => (
    <Alert plantName={item.plant_name} time={item.time} message={item.message} value={item.value} />
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ marginTop: 30 }}
          contentContainerStyle={styles.list}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={this.loadRepositories}
          onEndReachedThreshold={0.1}
          ListFooterComponent={this.renderFooter}
        />
      </View>
    );
  }
}

const thereAreNoAlerts = () => {
  return (
    <View>
      <Text>Não existe nenhum alerta :)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1F1F28'
  },
  list: {
    paddingHorizontal: 20
  },
  text: {
    color: '#eee'
  },
  loading: {
    alignSelf: 'center',
    marginVertical: 20
  }
});
