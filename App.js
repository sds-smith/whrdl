import { StyleSheet, View } from 'react-native';
import * as React from 'react'
import { useState, useEffect } from 'react'
import Header from './Components/Header'
import Board from './Components/Board'
import Keyboard from './Components/Keyboard'
import Datamuse from './util/Datamuse';

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
  const [targetWord, setTargetWord] = useState('ORATE')

  useEffect(() => {
    Datamuse.getTargetWord(setTargetWord)
  },[])

  const handleLetterEntry = (letter) => {
    const guessArray = guessState[currentGuess]
    guessArray[currentLetter]=letter
    setGuessState(guessState => ({...guessState, currentGuess : guessArray}))
    currentLetter < 5 && setCurrentLetter(currentLetter => currentLetter + 1)
  }

  const handleDelete = () => {
    if (currentLetter > 0) {
      setCurrentLetter(currentLetter => currentLetter - 1)
      let currentWord = guessState[currentGuess]
      currentWord.splice(currentLetter-1, 1, '')
      setGuessState(guessState => ({...guessState, currentGuess : currentWord}))
    }
  }

  const handleWordEntry = async () => {
    const currentWord = guessState[currentGuess]
    const currentMatches = letterMatches[currentGuess]
    const current = {}
    const target = {}

    for (let j = 0; j < targetWord.length; j ++) {
      let currentLetter = currentWord[j]
      let targetLetter = targetWord[j]
      if (current[currentLetter]) {
        current[currentLetter].push(j)
      } else {
        current[currentLetter] = [j]
      }
      if (target[targetLetter]) {
        target[targetLetter].push(j)
      } else {
        target[targetLetter] = [j]
      }
    }

    if (await Datamuse.validWord(currentWord.join('').toLowerCase()) === true) {
    for (let i = 0; i < currentWord.length; i ++) {
      let keyColor
      const keyMatch = currentWord[i]
      if (target[keyMatch]) {
        if (target[keyMatch].length) {
          if (target[keyMatch].includes(i)) {
              currentMatches[i] = '#0f0' //green
              keyColor = '#0f0' //green
              target[keyMatch].splice(target[keyMatch].indexOf(i), 1)
              current[keyMatch].splice(current[keyMatch].indexOf(i), 1)
          } else {
              keyColor = '#ff0' //yellow
              if (current[keyMatch].length <= target[keyMatch].length) {
                currentMatches[i] = '#ff0' //yellow
              } else {
                current[keyMatch].splice(current[keyMatch].indexOf(i), 1)
                currentMatches[i] = '#999' //gray
              }
            }
        } else {
          currentMatches[i] = '#999'  //gray
        }
      } else {
          currentMatches[i] = '#999' //gray
          keyColor = '#999' //gray
      }
      // *******************************
      setKeyboardMatch((keyboardMatch) => ({
        ...keyboardMatch, [currentWord[i]] : keyColor
      }))
      setLetterMatches((letterMatches) => ({
        ...letterMatches, currentGuess : currentMatches
      }))
      // *******************************
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
  } else {
   window.alert('NOT IN WORD LIST')
  }
  }

  const handleReset = () => {
    setGuessState(board) 
    setLetterMatches(matches) 
    setKeyboardMatch(keyMatches)
    setCurrentGuess(guesses[0])
    setCurrentLetter(0)
    setHeaderMessage('')
    Datamuse.getTargetWord(setTargetWord)
  }

  const handleHint = () => {
    Datamuse.getHint(targetWord)
  }

  return (
    <View style={styles.container}>
      <Header 
        headerMessage={headerMessage} 
        handleReset={handleReset}
        handleHint={handleHint}
      />
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
  }
});