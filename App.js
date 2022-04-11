import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as React from 'react'
import { useState } from 'react'
import Header from './Components/Header'
import Board from './Components/Board'
import Keyboard from './Components/Keyboard'

export default function App() {

  const board = {}
  const matches = {}
  const guesses = ['guess1', 'guess2', 'guess3', 'guess4', 'guess5', 'guess6']
  guesses.forEach(guess => {
    board[guess] = ['','','','','']
    matches[guess] = ['#fff','#fff','#fff','#fff','#fff']
  })
  const keyMatches = {}
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (let i = 0; i < letters.length; i ++) {
    const letter = letters[i]
    keyMatches[letter] = '#e6e6e6'
  }
  const [guessState, setGuessState] = useState(board) 
  const [letterMatches, setLetterMatches] = useState(matches) 
  const [keyboardMatch, setKeyboardMatch] = useState(keyMatches)
  const [currentGuess, setCurrentGuess] = useState(guesses[0])
  const [currentLetter,setCurrentLetter] = useState(0)
  const [headerMessage, setHeaderMessage] = useState('')
  const [targetWord, setTargetWord] = useState('orate'.toUpperCase())

  const handleLetterEntry = (letter) => {
    const guessArray = guessState[currentGuess]
    guessArray[currentLetter]=letter
    setGuessState(guessState => ({...guessState, currentGuess : guessArray}))
    setCurrentLetter(currentLetter => currentLetter + 1)
  }

  const handleDelete = () => {
    setCurrentLetter(currentLetter => currentLetter - 1)
    let currentWord = guessState[currentGuess]
    currentWord.splice(currentLetter, 1, '')
    setGuessState(guessState => ({...guessState, currentGuess : currentWord}))
  }

  const handleWordEntry = () => {
    const target = []
    for (let j = 0; j < targetWord.length; j ++) {
      target.push(targetWord[j])
    }
    const currentWord = guessState[currentGuess]
    const currentMatches = letterMatches[currentGuess]
    for (let i = 0; i < currentWord.length; i ++) {
      const keyMatch = currentWord[i]
      if (currentWord[i] === target[i]) {
        currentMatches[i] = '#0f0'
        setKeyboardMatch(keyboardMatch => ({
          ...keyboardMatch, keyMatch :'#0f0'
        }))
        setLetterMatches((letterMatches) => ({
          ...letterMatches, currentGuess : currentMatches
        }))
      } else if (target.includes(currentWord[i])) {
        currentMatches[i] = '#ff0'
        setKeyboardMatch(keyboardMatch => ({
          ...keyboardMatch, keyMatch :'#ff0'
        }))
        setLetterMatches((letterMatches) => ({
          ...letterMatches, currentGuess : currentMatches
        }))
      } else {
        currentMatches[i] = '#999'
        setKeyboardMatch(keyboardMatch => ({
          ...keyboardMatch, keyMatch :'#999'
        }))        
        setLetterMatches((letterMatches) => ({
          ...letterMatches, currentGuess : currentMatches
        }))
      }
    }
    if (guessState[currentGuess].join('') === targetWord) {
      const guesses = currentGuess === 'guess1' ? 'GUESS' : 'GUESSES'
      setHeaderMessage(`YOU WIN IN ${currentGuess[5]} ${guesses}!!`)
    } else if (currentGuess === 'guess6') {
      setHeaderMessage('wha wha (sad trombone)')
    } else {
      const nextGuess = guesses[guesses.indexOf(currentGuess)+1]
      setCurrentGuess(nextGuess)
      setCurrentLetter(0)
    }
  }


  return (
    <View style={styles.container}>
      <Header headerMessage={headerMessage}/>
      <Board
        guessState={guessState}
        letterMatches={letterMatches}
        currentGuess={currentGuess}
        currentLetter={currentLetter}
        handleLetterEntry={handleLetterEntry}
        handleWordEntry={handleWordEntry}
      />
      <Keyboard 
        handleWordEntry={handleWordEntry} 
        handleLetterEntry={handleLetterEntry}
        handleDelete={handleDelete}
        keyboardMatch={keyboardMatch}
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

