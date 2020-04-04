import {StyleSheet, Dimensions} from 'react-native'

const Window = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 81,
        paddingBottom: 119,
        paddingHorizontal:75,
        backgroundColor: "#7D008B"
    },
    logoHome:{
        width: 207 * 1.3,
        height: 174 * 1.3,
        marginBottom: 60,
        resizeMode: 'stretch'
    },
    btHomeText:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: "bold",
        fontSize: 21,
        lineHeight: 21,
        color: "#510073"

    },

    btHomeIn:{
        backgroundColor: '#FFFFFF',
        padding: 15,
        width: Window.width*0.5,
        height: 70,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#510073',
        borderWidth: 6
    },

    btHomeOut:{
        borderRadius: 16,
        borderColor: '#FBC81D',
        borderWidth: 3        
    }

})