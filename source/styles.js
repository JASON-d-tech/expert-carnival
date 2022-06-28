import {getStatusBarHeight} from 'react-native-status-bar-height';
console.log(getStatusBarHeight());
console.log(getStatusBarHeight(true));

export const colors ={
    buttons:"#ff8c52",
    grey1:"#bebebe",
    grey2:"#43484d",
    grey3:"#86939e",
    grey4:"#bdc6cf",
    grey5:"#e1e8ee",
    grey6:"#eeeeee",
    grey7:"#F2f9f9",
    grey8:"#d6d6d6",
    cardComment:"#86939e",
    cardBackground:"white",
    lightGreen:"#66DF48",
    blue:"#286ef0",
    black:"000000",
    white:"#ffffff",
    darkBlue:"#2d328a",
    pageBackground:"white",   
}


export const parameters ={
    StatusBarHeight: getStatusBarHeight(),
    headerHeight:70,

    styledButton:{
        backgroundColor:"#ff8c52",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#ff8c52",
        height:50,
        paddingHorizontal:20,
        width:'100%'

    },

    buttonTitle:{
        color:"white",
        fontsize:20,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3,
    }
    
}
export const title={
    color:'#ff8c52',
    fontsize:20,
    fontWeight:'bold'
}