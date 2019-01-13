import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { WebBrowser } from 'expo';
import { ScrollView } from 'react-native-gesture-handler';

export default class AboutDeveloperScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/my-photo.png')}></Image>
        </View>
        <View style={styles.infoContainer}>
          <Text>
            lorem20
          </Text>
        </View>
      </ScrollView>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
  },
  imageContainer: {

  },
  infoContainer: {

  }
});
