import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LetterKey from './Key.js'

const Keyboard = (props) => {

    const {handleLetterEntry, handleDelete, handleWordEntry, keyboardMatch} = props

    return (
        <View style={keyboardStyles.main}>
            <View style={keyboardStyles.row}>
                <LetterKey  title='Q' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='W' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='E' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='R' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='T' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='Y' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='U' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='I' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='O' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='P' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>               
            </View>
            <View style={keyboardStyles.row}>
                <LetterKey  title='A' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='S' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='D' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='F' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='G' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='H' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='J' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='K' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='L' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
            </View>
            <View style={keyboardStyles.row}>
                <FunctionKey  title='ENTER' handlePress={handleWordEntry}/>
                <LetterKey  title='Z' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='X' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='C' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='V' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='B' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='N' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='M' keyboardMatch={keyboardMatch} onPress={(letter)=>handleLetterEntry(letter)}/>
                <FunctionKey className={'large'} title='&#9003;' handlePress={handleDelete} />
            </View>
        </View>
    )
}

const FunctionKey = (props) => {
    const {className, title, handlePress} = props
    return (
        <TouchableOpacity style={keyboardStyles.funcButton} onPress={handlePress} >
            <Text style={className === 'large' ? keyboardStyles.buttonTextLg : keyboardStyles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const keyboardStyles = StyleSheet.create ({
    main: {
        flex: 3,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    funcButton: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        borderRadius: 10,   
        backgroundColor: '#e6e6e6'       
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 15
    },
    buttonTextLg: {
        fontSize: 40
    }
})

export default Keyboard;