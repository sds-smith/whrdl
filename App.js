import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as React from 'react'
import { useState } from 'react'
import Header from './Components/Header'
import Board from './Components/Board'
import Keyboard from './Components/Keyboard'

export default function App() {
  const board = {
    guess1 : '',
    guess2 : '',
    guess3 : '',
    guess4 : '',
    guess5 : '',
    guess6 : ''
  }

  const [guessState, setGuessState] = useState(board)  
  const [currentGuess, setCurrentGuess] = useState('guess1')
  const [currentLetter,setCurrentLetter] = useState(0)
  const [targetWord, setTargetWord] = useState('orate')


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
