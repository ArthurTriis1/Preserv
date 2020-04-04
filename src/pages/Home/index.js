import React from 'react';
import {Text, View, Button, Image, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function App() {

    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <Image source={logoImg} style={styles.logoHome}/>
            <TouchableOpacity onPress={()=>{navigation.navigate('GpsPage')}}>
                <View style={styles.btHomeOut}>
                    <View style={[styles.btHomeIn, {backgroundColor: '#FBC81D'}]}>
                        <Text style={styles.btHomeText}>IR</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <View style={styles.btHomeOut}>
                    <View style={styles.btHomeIn}>
                        <Text style={styles.btHomeText}>SOBRE</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                
                <View style={styles.btHomeOut}>
                    <View style={styles.btHomeIn}>
                        <Text style={styles.btHomeText}>AJUDA</Text>
                    </View>
                </View>
                
            </TouchableOpacity>
        </View>
    );
}