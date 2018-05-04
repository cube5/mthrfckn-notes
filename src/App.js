import React, { Component } from 'react'
import "./font.css";
// import { View, Text, TextInput, StyleSheet } from 'react-native'

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.app}>
//         <View style={styles.appHeader}>
//           <Text style={styles.appTitle}>Welcome to React <span role="img">⚛</span>️</Text>
//         </View>
//         <Text style={styles.appIntro}>
//           To get started, <code>src/App.js</code> and save to reload.
//         </Text>
//         <View style={{flex: 3}}>
//           <TextInput
//             placeholder="Type here to start writing"
//             multiline
//             numberOfLines={20}
//             underlineColorAndroid={"transparent"}
//           />
//         </View>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   app: {
//     flex: 1
//   },
//   appHeader: {
//     flex: 1,
//     backgroundColor: '#222',
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   appTitle: {
//     fontSize: 28,
//     color: 'white'
//   },
//   appIntro: {
//     flex: 2,
//     fontSize: 18,
//     textAlign: 'center'
//   },
//   appLogo: {
//     height: 80
//   }
// })
