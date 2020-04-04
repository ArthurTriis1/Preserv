import React, {useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList  } from 'react-native';

import styles from './styles';
import geolocation from '../../services/geolocation'

export default function SelectBairro(props) {

    const {bairros} = props;
    const {stateChange} = props;

    const [getBairros, setBairros] = useState(bairros);

    const {callGo} = props

    

    const [clicked, setClicked] = useState(false);

    function click(){
        setClicked(!clicked);
        setBairros(bairros)
        if(stateChange){
            stateChange(!clicked);
        }
    }

    async function Go(bairroName){
        bairroName = bairroName  == "Alto Santa Terezinha " ? "Alto Santa Teresinha" : bairroName
        if(callGo){
            let data = await geolocation.get(`${bairroName}+recife%20brasil&format=json&limit=1`);
            data = data.data[0]
            if (data){
                callGo(
                    {
                        latitude:  Number(data.lat),
                        longitude: Number(data.lon),
                        latitudeDelta: 0.03,
                        longitudeDelta: 0.03,
                    }
                )
            }else{
                callGo(
                    {
                        latitude:  -8.063169,
                        longitude: -34.871139,
                        latitudeDelta: 0.03,
                        longitudeDelta: 0.03,
                    }
                )
            }
            click()
        }

    }

    

    return (
        <View style={styles.containerBairro}>
                {   clicked &&
                    (<View style={styles.list}>
                        <ScrollView>
                            <FlatList
                                data={getBairros}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() =>{Go(item)}}>
                                        <Text style={styles.bairroOptions}>{item}</Text>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={item => item}
                            />
                        </ScrollView>
                    </View>)
                    
                }  
                <TouchableOpacity style={clicked ?  styles.OutLineClicked : styles.OutLine}  activeOpacity={1} onPress={click}>
                    <View style={clicked ?  styles.btStyleClicked: styles.btStyle }>
                        <Text style={clicked ? styles.textClicked : styles.text}>Selecionar Bairro</Text>
                    </View>
                </TouchableOpacity>
        </View>
    );
}
