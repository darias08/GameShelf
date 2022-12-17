import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COlORS from '.././constants/colors';

const PSInput = ({
    error, 
    password, 
    onFocus=()=>{},
    ...props
    }) => {

        const [isFocused, setIsFocused] = React.useState(false);
        const [hidePassword, setHidePassword] = React.useState(password);

    return <View style={{marginBottom: 20}}>
    
       
        <View style={[style.inputContainer, {borderColor: error ? COlORS.red:isFocused ? COlORS.blue: COlORS.light}]}>
            <TextInput
            placeholderTextColor={'grey'}
            secureTextEntry={hidePassword}
            selectionColor={COlORS.blue} 
            autoCorrect={false}
            onFocus={()=> {
                onFocus();
                setIsFocused(true);
            }}

            onBlur={() => {
                setIsFocused(false);
            }}
            style={{flex:1}}{...props} 
            />
            {password && (
            <Icon 
            onPress={() =>setHidePassword(!hidePassword)}
            style={{fontSize: 22, color: COlORS.darkBlue}} 
            name={hidePassword ? 'eye-outline' : "eye-off-outline"}
            />)}
            
        </View>
        {error && (
        <Text style = {{color: COlORS.red, fontSize: 14, marginTop: 10, marginLeft: 65,}}>
            {error}
        </Text>
        )}
    </View>;
};

const style = StyleSheet.create({
    label: {
        marginVertical: 10,
        fontSize: 14,
        color: COlORS.white
    },

    inputContainer:{
        height: 55,
        backgroundColor: COlORS.dark_gray,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.9,
        alignItems: 'center',
        borderRadius: 30
    }

});

export default PSInput;