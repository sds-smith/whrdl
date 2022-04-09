import * as React from 'react';
import { View, Button } from 'react-native';

const LetterKey = (props) => {
    const {title} = props
    return (
        <View>
          <Button title={title} /><br/>        
        </View>
    )
}

export default LetterKey