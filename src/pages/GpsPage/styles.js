import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#7D008B'
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
    },
    containerMap:{
        flex: 1,
        position: 'relative',
        
    },
    mapStyle: {
       flex: 1,


    },

    containerOptions:{
        flexDirection: "row",
        padding: 15,
        position: "absolute",
        width: '100%',
        zIndex: 1,
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    TargetIconOut:{
        borderRadius: 41,
        borderWidth: 3,
        borderColor: '#FBC81D',
        width: 82,
        position: 'relative'
    },
    TargetIconIn:{
        height: 76,
        width: 76,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 38,
        borderWidth: 3,
        borderColor: '#510073'
    },
    TargetIcon:{
        fontSize: 50,
        textAlign: 'center',
        color: '#510073'
    },
    inputsLocal:{
        position: "absolute",
        right: 15,
        bottom: 50,
        zIndex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        
    },

    loading:{
        position: 'absolute',
        alignSelf: 'center',
        top: '40%'
    },

    lowOpacity:{
        opacity: 0.6
    }

    
    
})