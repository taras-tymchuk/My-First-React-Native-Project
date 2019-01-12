import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebBrowser } from 'expo';

export default class AboutDeveloperScreen extends React.Component {
  static navigationOptions = {
    title: 'Info',
  };

  render() {
    return (
      <View styles={styles.container}>
        Hi! How are you? Do you want to get to know me more? Click the "About developer" button down here :)
      </View>
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
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
