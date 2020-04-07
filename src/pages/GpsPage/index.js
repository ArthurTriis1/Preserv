import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity, Image, Text, ActivityIndicator } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import logoImg from '../../assets/logo.png'
import MapView, {Marker, Callout} from 'react-native-maps';
import styles from "./styles"

import SelectLayer from '../../components/SelectLayer'
import SelectBairro from '../../components/SelectBairro'

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


import apiGov from '../../services/apiGov'


export default function GpsPage() {

    const navigation = useNavigation();

    const[region, setRegion] = useState({
        latitude:  -8.063169,
        longitude: -34.871139,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });
    
    //#region Estados
    const [loading, setLoading] = useState(true);
    const [dropped, setDropped] = useState(false);
    const [bairros, setBairros] = useState([]);

    const [layerPreservativos, setLayerPreservativos] = useState([]);
    const [preserv, setPreserv] = useState(false)

    const [layerTeste, setLayerTeste] = useState([]);
    const [teste, setTeste] = useState(false)
    
    const [layerPrevencao, setLayerPrevencao] = useState([]);
    const [prevencao, setPrevencao] = useState(false)

    const [layerTratamento, setLayerTratamento] = useState([]);
    const [tratamento, setTratamento] = useState(false)
    //#endregion


    async function getGeolocation(){
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            console.error("deu ruim")
        }
    
        let location = await Location.getCurrentPositionAsync({});

        return{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        }
    }

    function plotMap(layer){
        return (layer.map(marker => (
            <Marker
                pinColor= "#510073"
                coordinate={{   
                                latitude: Number(marker.latitude),
                                longitude: Number(marker.longitude)
                            }}
                key={"teste"+marker._id}
                onPress={() =>{ navigation.navigate('DetailsLocation', marker)}}

                
            />)
        ))
    }

    useEffect(()=>{
        apiGov.get('datastore_search_sql?sql=SELECT%20distinct%20bairro%20from%20"e21b7420-de0f-4130-ac90-c6d5a08f84a2"order%20by%20bairro')
            .then((resp) => {
                const results = resp.data.result.records.map((r) => {return r['bairro']});
                setBairros(results);
                
            })
        apiGov.get('datastore_search_sql?sql=SELECT%20servico,bairro,fone,nome_oficial,servico,endereço,longitude,latitude,_id%20from%20"e21b7420-de0f-4130-ac90-c6d5a08f84a2"')
            .then((resp) => {
                const results = resp.data.result.records;
                setLayerPreservativos(results);
            })
        apiGov.get('datastore_search?resource_id=7f3a2046-1372-4e6f-b269-802bf17ef832&limit=5')
            .then((resp) => {
                const results = resp.data.result.records;
                setLayerTeste(results);
            })
        apiGov.get('datastore_search?resource_id=9aa8298b-8ffb-4801-a7d5-461d44f3ee24&limit=5')
            .then((resp) => {
                const results = resp.data.result.records;
                setLayerPrevencao(results);
            })
        apiGov.get('datastore_search?resource_id=7f3a2046-1372-4e6f-b269-802bf17ef832&limit=5')
        .then((resp) => {
            const results = resp.data.result.records;
            setLayerTratamento(results);
        })

    },[]);
 


    function navigateBack(){
        navigation.goBack();
    } 


    return (
        <View style={styles.container}> 

            <View style={styles.header}>
                <TouchableOpacity onPress={navigateBack} style={styles.returnButtomOut}>
                    <Feather name="arrow-left" size={34} style={styles.returnButtom} color="#510073"/>
                </TouchableOpacity>
                <Image source={logoImg} style={styles.logoHeader}/>
            </View>
            
            
            <View style={styles.containerMap}>
                <MapView style={styles.mapStyle} 
                        initialRegion={{
                            latitude:  -8.063169,
                            longitude: -34.871139,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                        region={region}
                        onRegionChangeComplete={()=>{setLoading(false)}}
                        onRegionChange={(reg)=>{setLoading(true); setRegion({reg})}}>
                        
                        {/* Layer de Preservativos */}
                        {preserv && plotMap(layerPreservativos)}

                        {/* Layer de Testes */}
                        {teste && plotMap(layerTeste)}

                        {/* Layer de Prevencao */}
                        {prevencao && plotMap(layerPrevencao)}

                        {/* Layer de Tratamento */}
                        {tratamento && plotMap(layerTratamento)}

                </MapView>

                {loading && <ActivityIndicator size="large" color="#510073" style={styles.loading}/> }

                <View style={[styles.containerOptions, loading &&  styles.lowOpacity]}>
                    <SelectLayer style={styles.select} name="PRESERVATIVO"          call={(data) => {setPreserv(data.show)}}    />
                    <SelectLayer style={styles.select} name="TESTE DE IST"          call={(data) => {setTeste(data.show)}}      />
                    <SelectLayer style={styles.select} name="PREVENÇÃO DE URGÊNCIA" call={(data) => {setPrevencao(data.show)}}  />
                    <SelectLayer style={styles.select} name="Tratamento"            call={(data) => {setTratamento(data.show)}} />
                </View>

                
                <View style={[styles.inputsLocal, dropped && {height: 450}, loading &&  styles.lowOpacity]}>
                    <TouchableOpacity onPress={async ()=>{
                           const location = await getGeolocation();
                           setRegion({
                            latitude:  location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                            })
                        }}>
                        <View style={styles.TargetIconOut}>
                            <View style={styles.TargetIconIn}>
                                <MaterialCommunityIcons name='target' style={styles.TargetIcon}></MaterialCommunityIcons>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <SelectBairro style={styles.bairro} 
                                  bairros={bairros} 
                                  stateChange={(callback => setDropped(callback))}
                                  callGo={(data)=>setRegion(data)}/>
                    

                </View>
            
                
            </View>
            
        </View>
    );
}
