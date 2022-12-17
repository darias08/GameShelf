import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import COLORS from '../constants/colors'

const Button = ({title, onPress=() => {}}) => {
    return (
        <TouchableOpacity 
        style={style.button}  
        activeOpacity={0.7} 
        onPress={onPress}> 
            
            <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 16}}>{title}</Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 14,
    },

    button: {
        height: 55, 
        width: '100%',
        backgroundColor: "#1E1EA8",
        borderRadius: 10,
        justifyContent:"center", 
        alignItems: 'center',
        marginVertical: 20
    },

    inputContainer:{
        height: 55,
        backgroundColor: COLORS.light_gray,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.9,
        alignItems: 'center',
    }

});


export default Button;