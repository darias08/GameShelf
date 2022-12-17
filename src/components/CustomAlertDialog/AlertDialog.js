import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';
import COLORS from '.././Colors/colors'


const AlertDialog = ({visible = false}) => {

    const [modalVisible, setModalVisible] = React.useState(false);
    

    return visible &&

    <View>
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        setModalVisible(!modalVisible)
        }
    }
    >
        <View style ={style.MainContainer}>
        
            <View style = {style.topPart}>
                <Text style = {style.alertTitleTextStyle}>Invalid Email</Text>
                
            </View>

            <View style = {style.middlePart}>
                <Text style = {style.alertMessageTextStyle}>Please provide a valid email address! </Text>
            </View>

            <View style = {style.bottomPart}>
                <TouchableOpacity  onPress={() => setModalVisible(true)}>
                    <Text style = {style.okText}>Understood</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    </Modal>
</View>

}

const style = StyleSheet.create({

    OverlayContainer: {
        position: "absolute",
        zIndex: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center'
    },

    MainContainer: {
        flexDirection: 'column',
        height: '20%',
        width: '88%',
        justifyContent: 'center',
        backgroundColor: COLORS.dark_gray,
        justifyContent: 'center',
        position: "absolute",
        zIndex: 10,
        marginHorizontal: 30,
        marginTop: 300,
        borderRadius: 20,
        elevation: 20
        
    },

    topPart: {
        flex: 0.5,
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 4,
        paddingTop: 10
        },

    middlePart: {
        flex: 1,
        width: '100%',
        textAlign: 'center',
        padding: 4,
        fontSize: 16,
    },

    bottomPart: {
        flex: 0.5, 
        width: '100%',
        flexDirection: 'row',
        padding: 8,
        justifyContent: 'space-evenly'
    },

    alertTitleTextStyle: {
        flex:1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.white,
        marginTop: 10,
        marginRight: 190

    },

    alertMessageTextStyle: {
       color: '#fff',
       textAlign: 'justify',
       fontSize: 16,
       marginLeft: 30,
       marginTop: 25,
       position: 'absolute'
    },

    okText:  {
        fontSize: 14,
        color: COLORS.blue,
    }
    
});


export default AlertDialog;

/*

    MainContainer: {
        flexDirection: 'column',
        height: '25%',
        width: '80%',
        justifyContent: 'center',
        backgroundColor: COLORS.dark_gray,
        justifyContent: 'center',
        position: "absolute",
        zIndex: 10,
        marginHorizontal: 50,
        marginTop: 300,
    },

    topPart: {
    flex: 0.5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00FF00',
    paddingHorizontal: 2,
    paddingVertical: 4,
    },

    middlePart: {
    flex: 1,
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 4,
    fontSize: 16,
    marginVertical: 2,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    color: '#FFF'
    },

    bottomPart: {
        flex: 0.5, 
        width: '100%',
        borderWidth: 1,
        borderColor: '#00066F',
        flexDirection: 'row',
        padding: 4,
        justifyContent: 'space-evenly'
    },
    */