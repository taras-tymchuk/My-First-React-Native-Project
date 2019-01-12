import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class GreetingScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textBox}>
          Hi! How are you? Do you want to get to know me more? Click the "About developer" button down here :)
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'aqua',
  },
  textBox: {
    fontSize: 25,
    textAlign: 'center',
    marginLeft: 50,
    marginRight: 50
  }
});
