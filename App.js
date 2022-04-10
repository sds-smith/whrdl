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

  const [guessState, setGuessState] = useState(board) 
  const [letterMatches, setLetterMatches] = useState(matches) 
  const [currentGuess, setCurrentGuess] = useState(guesses[0])
  const [currentLetter,setCurrentLetter] = useState(0)
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
        currentWord = currentWord.splice(currentLetter, 1)
        setGuessState(guessState => ({...guessState, guess1 : currentWord}))
        break
      case 'guess2' : 
        currentWord = guessState.guess2
        currentWord = currentWord.splice(currentLetter, 1)
        setGuessState(guessState => ({...guessState, guess2 : currentWord}))
        break
      case 'guess3' : 
        currentWord = guessState.guess3
        currentWord = currentWord.splice(currentLetter, 1)
        setGuessState(guessState => ({...guessState, guess3 : currentWord}))
        break
      case 'guess4' : 
        currentWord = guessState.guess4
        currentWord = currentWord.splice(currentLetter, 1)
        setGuessState(guessState => ({...guessState, guess4 : currentWord}))
        break
      case 'guess5' : 
        currentWord = guessState.guess5
        currentWord = currentWord.splice(currentLetter, 1)
        setGuessState(guessState => ({...guessState, guess5 : currentWord}))
      break
      case 'guess6' : 
        currentWord = guessState.guess6
        currentWord = currentWord.splice(currentLetter, 1)
        setGuessState(guessState => ({...guessState, guess6 : currentWord}))
        break 
      default :
        break   
    }
  }

  const handleWordEntry = () => {
    const target = []
    for (let j = 0; j < target.length; j ++) {
      target.push(targetWord[j])
    }
    const currentWord = guessState[currentGuess]
    for (let i = 0; i < currentWord.length; i ++) {
      if (currentWord[i] === target[i]) {
        setLetterMatches()
      } else if (target.includes(currentWord[i])) {
        //setLetterMatches(letterMatches[currentGuess][i]='#ff0')
      } else {
        //setLetterMatches(letterMatches[currentGuess][i]='#a9a9a9')
      }
    }
    if (guessState[currentGuess].join('') === targetWord) {
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

