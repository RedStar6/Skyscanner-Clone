import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        
    },
    inner:{
        width:'90%',
        height:'90%',
        justifyContent:'space-between'
    },
    logo:{
        width:'30%',
        height:'30%',
        resizeMode:'contain',
        alignSelf:'center',
    },
    backgroundVideo:{
        position:'absolute',
        top:0,
        right:0,
        left:0,
        bottom:0,
        opacity:0.8
      },
    bottom_section:{
        rowGap:10
    },
    links:{
        alignItems:'center',
        padding:10,
        borderRadius:10,
        fontWeight:'bold',
        textAlign:'center',
    }

})

export default styles