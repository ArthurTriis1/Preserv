import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


import Home from './pages/Home'
import GpsPage from './pages/GpsPage'
import DetailsLocation from './pages/DetailsLocation'

const AppStack = createStackNavigator();


export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="GpsPage" component={GpsPage}/>
                <AppStack.Screen name="DetailsLocation" component={DetailsLocation}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )

}