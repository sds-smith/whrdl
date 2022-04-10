import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as React from 'react'
import { useState } from 'react'
import Header from './Components/Header'
import Board from './Components/Board'
import Keyboard from './Components/Keyboard'

export default function App() {
  const board = {}
  const guesses = ['guess1', 'guess2', 'guess3', 'guess4', 'guess5', 'guess6']
  guesses.forEach(guess => {
    board[guess] = ['','','','','']
  })

  const [guessState, setGuessState] = useState(board)  
  const [currentGuess, setCurrentGuess] = useState(guesses[0])
  const [currentLetter,setCurrentLetter] = useState(0)
  const [targetWord, setTargetWord] = useState('orate'.toUpperCase())

  const handleLetterEntry = (letter) => {

    switch (currentGuess) {
      case guesses[0] : 
        setGuessState(guessState => ({...guessState, guess1 : guessState.guess1.splice(currentLetter, 1, letter)}))
        break
      case guesses[1] : 
        setGuessState(guessState => ({...guessState, guess2 : guessState.guess2.splice(currentLetter, 1, letter)}))
        break
      case guesses[2] : 
        setGuessState(guessState => ({...guessState, guess3 : guessState.guess3.splice(currentLetter, 1, letter)}))
        break
      case guesses[3] : 
        setGuessState(guessState => ({...guessState, guess4 : guessState.guess4.splice(currentLetter, 1, letter)}))
        break
      case guesses[4] : 
        setGuessState(guessState => ({...guessState, guess5 : guessState.guess5.splice(currentLetter, 1, letter)}))
        break
      case guesses[5] : 
        setGuessState(guessState => ({...guessState, guess6 : guessState.guess6.splice(currentLetter, 1, letter)}))
        break 
      default :
        break   
    }
    setCurrentLetter(currentLetter => currentLetter + 1)
  }

  const handleDelete = () => {
    setCurrentLetter(currentLetter => currentLetter - 1)
    let currentWord
    switch (currentGuess) {
      case 'guess1' : 
        currentWord = guessState.guess1
        currentWord = currentWord.slice(0, currentLetter)
        setGuessState(guessState => ({...guessState, guess1 : currentWord}))
        break
      case 'guess2' : 
        currentWord = guessState.guess2
        currentWord = currentWord.slice(0, currentLetter)
        setGuessState(guessState => ({...guessState, guess2 : currentWord}))
        break
      case 'guess3' : 
        currentWord = guessState.guess3
        currentWord = currentWord.slice(0, currentLetter)
        setGuessState(guessState => ({...guessState, guess3 : currentWord}))
        break
      case 'guess4' : 
        currentWord = guessState.guess4
        currentWord = currentWord.slice(0, currentLetter)
        setGuessState(guessState => ({...guessState, guess4 : currentWord}))
        break
      case 'guess5' : 
        currentWord = guessState.guess5
        currentWord = currentWord.slice(0, currentLetter)
        setGuessState(guessState => ({...guessState, guess5 : currentWord}))
      break
      case 'guess6' : 
        currentWord = guessState.guess6
        currentWord = currentWord.slice(0, currentLetter)
        setGuessState(guessState => ({...guessState, guess6 : currentWord}))
        break 
      default :
        break   
    }
  }

  const handleWordEntry = () => {
    const target = []
    for (let j = 0; j < targetWord.length; j ++) {
      target.push(targetWord[j])
    }
    const currentWord = guessState[currentGuess]
    for (let i = 0; i < currentWord.length; i ++) {
      if (currentWord[i] === targetWord[i]) {
        //Document.getElementById(i).style = {backgroundColor: '#00ff00'}
      } else if (target.includes(currentWord[i])) {
        //make the cell backgroundColor yellow
      } else {
        //make the cell backgroundColor gray
      }
    }
    if (guessState[currentGuess] === targetWord) {
      window.alert('YOU WIN!')
    } else if (currentGuess === 'guess6') {
      window.alert('wha wha (sad trombone)')
    } else {
      const nextGuess = guesses[guesses.indexOf(currentGuess)+1]
      setCurrentGuess(nextGuess)
      setCurrentLetter(0)
    }
  }


  return (
    <View style={styles.container}>
      <Header />
      <Board
        guessState={guessState}
        currentGuess={currentGuess}
        currentLetter={currentLetter}
        handleLetterEntry={handleLetterEntry}
        handleWordEntry={handleWordEntry}
      />
      <Keyboard 
        handleWordEntry={handleWordEntry} 
        handleLetterEntry={handleLetterEntry}
        handleDelete={handleDelete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

