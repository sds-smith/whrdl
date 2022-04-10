import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const LetterKey = (props) => {
    const {title, onPress, keyboardMatch} = props
    return (
        <View style={keyStyles.main}>
          <TouchableOpacity 
            style={[keyStyles.button, {backgroundColor: keyboardMatch[title]}]}
            onPress={()=>onPress(title)}
          >
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                {title}
              </Text>
          </TouchableOpacity>   
        </View>
    )
}

const keyStyles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    margin: 4,
    backgroundColor: '#e6e6e6',
    borderRadius: 5
  },
  button: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'center',
  }
})

export default LetterKey