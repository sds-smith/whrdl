import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Keyboard = () => {

    return (
        <View style={keyboardStyles.main}>
            <Text style={{fontSize: 40}}>Keyboard goes Here</Text>
        </View>
    )
}

const keyboardStyles = StyleSheet.create ({
    main: {
        flex: 3,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderWidth: 5
    }

})

export default Keyboard;