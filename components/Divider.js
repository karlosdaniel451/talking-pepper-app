import { View } from 'react-native';

const Divider = () => {
  return <View style={[{ borderColor: props.color }, { borderWidth: props.thickness }]}></View>;
};

export default Divider;
