import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

import Plant from '../components/Plant';

const URL = 'http://192.168.1.11:3000/plants/';

export default class PlantListScreen extends Component {
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
    const plants = response.data;

    this.setState({
      data: [...this.state.data, ...plants.plants],
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
    <Plant name={item.name} humidity={item.humidity} lightOn={item.lightOn} />
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
