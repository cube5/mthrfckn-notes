import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.appHeader}>
          <Text style={styles.appTitle}>Welcome to React <span role="img">⚛</span>️</Text>
        </View>
        <Text style={styles.appIntro}>
          To get started, <code>src/App.js</code> and save to reload.
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  appHeader: {
    flex: 1,
    backgroundColor: '#222',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  appTitle: {
    fontSize: 28,
    color: 'white'
  },
  appIntro: {
    flex: 2,
    fontSize: 18,
    textAlign: 'center'
  },
  appLogo: {
    height: 80
  }
})
