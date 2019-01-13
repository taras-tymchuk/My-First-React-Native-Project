import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { WebBrowser, AuthSession } from 'expo';
import { ScrollView } from 'react-native-gesture-handler';

export default class AboutDeveloperScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/my-photo.png')} resizeMode={'contain'} style={styles.imageStyle}></Image>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.textBox}>
            Hi again!
            My name is Taras and I'm studying Web development at Softserve IT Academy. I'm 20 and I'm full of inspiration.
            But let's speak not about programming. I have a few hobbies also. I'm keen on reading and football.
            Missing match of my
            <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}> favourite team </Text>
            is impossible thing. That's it, shortly about myself :)
          </Text>
        </View>

      </View>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://www.fcbarcelona.com/en/');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blanchedalmond',
  },
  imageContainer: {
    flex: 3,
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'black',
    padding: 5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: '100%'
  },
  infoContainer: {
    flex: 2,
    margin: 20,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox: {
    textAlign: 'center',
    fontSize: 16,
  },
  helpLinkText: {
    fontSize: 16,
    color: '#2e78b7',
  },
});
