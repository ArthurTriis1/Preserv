import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';


const SelectLayer = props => {

    const [show, setShow] = useState(true)


    const {call, name} = props;

    function invertShow(){
        setShow(!show)
        if(call){
            call({name, show})
        }
    }


    return (
        <TouchableOpacity style={show ? styles.OutLine: styles.OutLineClicked}  activeOpacity={1} onPress={invertShow} >
            <View style={show? styles.btStyle : styles.btStyleClicked}>
                <Text style={show? styles.text : styles.textClicked}>{name}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default SelectLayer;
