import React from 'react';
import { View } from 'react-native';

const Divider = props => {
  return <View style={[{ borderColor: props.color }, { borderWidth: props.thickness }]}></View>;
};

export default Divider;
