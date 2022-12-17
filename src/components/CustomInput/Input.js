import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../constants/colors'

const Input = ({
    label, 
    iconName, 
    error, 
    password, 
    onFocus=()=>{},
    ...props
    }) => {

        const [isFocused, setIsFocused] = React.useState(false);
        const [hidePassword, setHidePassword] = React.useState(password);

    return <View style={{marginBottom: 20}}>
    
        <Text style={style.label}>{label}</Text>
        <View style={[style.inputContainer, {borderColor: error ? COLORS.red:isFocused ? COLORS.blue: COLORS.light}]}>
            <Icon name={iconName} style={{fontSize:22, marginRight: 10, color: COLORS.darkBlue}} />
            <TextInput
            placeholderTextColor={'grey'}
            secureTextEntry={hidePassword}
            selectionColor={COLORS.blue} 
            autoCorrect={false}
            onFocus={()=> {
                onFocus();
                setIsFocused(true);
            }}

            onBlur={() => {
                setIsFocused(false);
            }}
            style={{flex:1, color: 'white'}}{...props} 
            />
            {password && (
            <Icon 
            onPress={() =>setHidePassword(!hidePassword)}
            style={{fontSize: 22, color: COLORS.darkBlue}} 
            name={hidePassword ? 'eye-outline' : "eye-off-outline"}
            />)}
            
        </View>
        {error && (
        <Text style = {{color: COLORS.red, fontSize: 14, marginTop: 7}}>
            {error}
        </Text>
        )}
    </View>;
};

const style = StyleSheet.create({
    label: {
        marginVertical: 10,
        fontSize: 14,
        color: COLORS.light
    },

    inputContainer:{
        height: 55,
        backgroundColor: COLORS.dark_gray,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.9,
        alignItems: 'center',
    }

});

export default Input;