import {StyleSheet} from 'react-native'



export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },
    header:{

        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
        marginTop: 29,
        flexDirection: 'row',
        backgroundColor: '#7D008B'
    },
    logoHeader:{
        height: 58*1.1,
        width: 70*1.1,
        resizeMode: 'stretch'
    },
    returnButtom:{
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderColor: '#510073',
        borderWidth: 3,
        textAlign: 'center',
        textAlignVertical: 'center'
        
    },

    returnButtomOut:{
        borderColor: '#FBC81D',
        borderWidth: 2,
        borderRadius: 22,
        position: 'absolute',
        left: 10
    }
})