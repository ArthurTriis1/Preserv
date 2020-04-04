import {StyleSheet} from 'react-native';

 const styles = StyleSheet.create({
    containerBairro:{
        alignItems: 'center',
        marginTop: 10,
        
    },
    OutLine:{
        borderColor: "#FBC81D",
        borderWidth: 1,
    },
    btStyle:{
        backgroundColor: '#FFF',
        borderColor: "#510073",
        borderWidth: 2,
        padding: 6,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10
    },
    text:{
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 12,
        color: '#510073',
        fontWeight: 'bold',
    },
    list:{
        maxHeight: 400,
        width: 160,
        backgroundColor: '#FFF',
        position: 'absolute',
        bottom: 42,
        padding: 5
    },
    bairroOptions:{
        textAlign: 'center',
        color: '#7D008B',
        textTransform: 'uppercase',
        padding: 5,
        fontWeight: 'bold',
        borderBottomColor: '#F9F9F9',
        borderBottomWidth: 3
    },
    OutLineClicked:{
        borderColor: "#510073",
        borderWidth: 1,
    },
    btStyleClicked:{
        backgroundColor: '#7D008B',
        borderColor: "#FBC81D",
        borderWidth: 2,
        padding: 6,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10
    },
    textClicked:{
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 12,
        color: '#FBC81D',
        fontWeight: 'bold',
    },
})

export default styles;