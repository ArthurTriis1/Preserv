import React, {useEffect, useState} from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { Feather} from '@expo/vector-icons'
import { useRoute, useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png'

import styles from './styles';

import {PLACES_KEY} from 'react-native-dotenv'

import apiPlaces from '../../services/apiPlaces'

export default function LocationDetails() {

    const navigation = useNavigation();
    
    const {params} = useRoute();
    const [openHours, setOpenHours] = useState({})
    const [place_id, setPlace_id] = useState('')

    async function getResPlaces(){
        const respPlaces = await apiPlaces.get(`json?input=${params.nome_oficial}&inputtype=textquery&fields=place_id,opening_hours&key=${PLACES_KEY}`)
        setOpenHours(respPlaces.data.candidates[0].opening_hours)
        setPlace_id(respPlaces.data.candidates[0].place_id)
        console.log(openHours, place_id)
    }
    
    
    useEffect(()=>{
        getResPlaces()
    },[params.nome_oficial])
    
    function navigateBack(){
        navigation.goBack();
    } 

    return (
        <View style={styles.container}> 

            <View style={styles.header}>
                <TouchableOpacity onPress={navigateBack} style={styles.returnButtomOut}>
                    <Feather name="x" size={30} style={styles.returnButtom} color="#510073"/>
                </TouchableOpacity>
                <Image source={logoImg} style={styles.logoHeader}/>
            </View>

        </View>
    );
}
