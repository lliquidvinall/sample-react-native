/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';


const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainText}>{counter}</Text>
      <TouchableOpacity style={styles.counterButton} onPress={() => setCounter((prevState) => prevState + 1)}>
        <Text style={styles.buttonStyle}>Click Me</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.counterButton} onPress={() => setCounter(0)}>
        <Text style={styles.buttonStyle}>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 30,
    padding: 20,
  },
  counterButton: {
    padding: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 4,
    width: 100,
    marginTop: 10,
  },
  buttonStyle: {
    textAlign: 'center',
  }
});

export default App;
