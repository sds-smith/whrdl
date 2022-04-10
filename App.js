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
    const guessArray = []
    switch (currentGuess) {
      case guesses[0] : 
        guessState.guess1.forEach(ltr => {
          guessArray.push(ltr)
        })
        guessArray[currentLetter]=letter
        setGuessState(guessState => ({...guessState, guess1 : guessArray}))
        break
      case guesses[1] : 
        guessState.guess2.forEach(ltr => {
          guessArray.push(ltr)
        })
        guessArray[currentLetter]=letter
        setGuessState(guessState => ({...guessState, guess2 : guessArray}))
        break
      case guesses[2] : 
        guessState.guess3.forEach(ltr => {
          guessArray.push(ltr)
        })
        guessArray[currentLetter]=letter
        setGuessState(guessState => ({...guessState, guess3 : guessArray}))
        break
      case guesses[3] : 
        guessState.guess4.forEach(ltr => {
          guessArray.push(ltr)
        })
        guessArray[currentLetter]=letter
        setGuessState(guessState => ({...guessState, guess4 : guessArray}))
        break
      case guesses[4] : 
        guessState.guess5.forEach(ltr => {
          guessArray.push(ltr)
        })
        guessArray[currentLetter]=letter
        setGuessState(guessState => ({...guessState, guess5 : guessArray}))
        break
      case guesses[5] :
        guessState.guess6.forEach(ltr => {
          guessArray.push(ltr)
        })
        guessArray[currentLetter]=letter 
        setGuessState(guessState => ({...guessState, guess6 : guessArray}))
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
        currentWord.splice(currentLetter, 1)
        setGuessState(guessState => ({...guessState, guess1 : currentWord}))
        break
      case 'guess2' : 
        currentWord = guessState.guess2
        currentWord.splice(currentLetter, 1)
        setGuessState(guessState => ({...guessState, guess2 : currentWord}))
        break
      case 'guess3' : 
        currentWord = guessState.guess3
        currentWord.splice(currentLetter, 1)
        setGuessState(guessState => ({...guessState, guess3 : currentWord}))
        break
      case 'guess4' : 
        currentWord = guessState.guess4
        currentWord.splice(currentLetter, 1)
        setGuessState(guessState => ({...guessState, guess4 : currentWord}))
        break
      case 'guess5' : 
        currentWord = guessState.guess5
        currentWord.splice(currentLetter, 1)
        setGuessState(guessState => ({...guessState, guess5 : currentWord}))
      break
      case 'guess6' : 
        currentWord = guessState.guess6
        currentWord.splice(currentLetter, 1)
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
    const currentMatches = letterMatches[currentGuess]
    for (let i = 0; i < currentWord.length; i ++) {
      if (currentWord[i] === target[i]) {
        currentMatches[i] = '#0f0'
        keyboardMatch[currentWord[i]] = '#0f0'
        setLetterMatches((letterMatches) => ({
          ...letterMatches, currentGuess : currentMatches
        }))
      } else if (target.includes(currentWord[i])) {
        currentMatches[i] = '#ff0'
        keyboardMatch[currentWord[i]] = '#ff0'
        setLetterMatches((letterMatches) => ({
          ...letterMatches, currentGuess : currentMatches
        }))
      } else {
        currentMatches[i] = '#999'
        keyboardMatch[currentWord[i]] = '#999'
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

