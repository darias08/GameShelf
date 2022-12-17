import React from 'react';
import {View, StyleSheet, useWindowDimensions, ActivityIndicator, Text} from 'react-native';
import COLORS from '../constants/colors'

const LoaderLogin = ({visible = false}) => {
    const {height, width} = useWindowDimensions();
        
    return visible && 
    <View style={[style.container, {height, width}]}>
        <View style ={style.Loader}>
            <ActivityIndicator size="large" color={COLORS.blue} />
            <Text style = {{marginLeft: 15, fontSize:16, color: COLORS.white, fontWeight: 'bold'}} >Signing in...</Text>
        </View>
    </View>;

}

const style = StyleSheet.create({

    Loader: {
        height: 70,
        backgroundColor: COLORS.dark_gray,
        marginHorizontal: 50,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    container: {
        position: "absolute",
        zIndex: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center'
    },
});


export default LoaderLogin;