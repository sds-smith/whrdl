import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const LetterKey = (props) => {
    const {title} = props
    return (
        <View style={keyStyles.main}>
          <TouchableOpacity style={keyStyles.button}><Text style={{fontWeight: 'bold', fontSize: 20}}>{title}</Text></TouchableOpacity>   
        </View>
    )
}

const keyStyles = StyleSheet.create({
  main: {
    height: '100%',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10
  },
  button: {
    paddingHorizontal: 20,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }
})

export default LetterKey