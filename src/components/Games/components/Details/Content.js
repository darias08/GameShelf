import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import COlORS from '../../../constants/colors'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Content = () => {
  return (
    <View style = {{flexDirection:'column', marginTop: 10}}>

        <View style={styles.projectRow}>

            <View style={styles.projectText}>
              <MaterialIcons name= "format-list-bulleted" style = {styles.bulletIcon}/>
              <Text style={styles.gameSeries}>Game Series</Text>
            </View>


          <View>
            <TouchableOpacity activeOpacity={0.5}>
                <FontAwesome name="chevron-right" size={15} style={{marginRight: 30, marginTop: 5}} />
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.newRow}>

            <View style={styles.projectText}>
              <FontAwesome name= "code-fork" style = {styles.forkIcon}/>
              <Text style={styles.gameVersions}>Game Version or Bundles</Text>
            </View>


          <View>
            <TouchableOpacity activeOpacity={0.5}>
                <FontAwesome name="chevron-right" size={15} style={{marginRight: 30, marginTop: 5}} />
            </TouchableOpacity>
          </View>

        </View>


        <View style={styles.newRow}>

            <View style={styles.projectText}>
              <FontAwesome name= "code-fork" style = {styles.forkIcon}/>
              <Text style={styles.gameVersions}>DLC</Text>
            </View>


          <View>
            <TouchableOpacity activeOpacity={0.5}>
                <FontAwesome name="chevron-right" size={15} style={{marginRight: 30, marginTop: 5}} />
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.newRow}>

            <View style={styles.projectText}>
              <FontAwesome name= "code-fork" style = {styles.forkIcon}/>
              <Text style={styles.gameVersions}>Game Version or Bundles</Text>
            </View>


          <View>
            <TouchableOpacity activeOpacity={0.5}>
                <FontAwesome name="chevron-right" size={15} style={{marginRight: 30, marginTop: 5}} />
            </TouchableOpacity>
          </View>

        </View>


    </View>
  )
}

const styles = StyleSheet.create({
    gameSeries: {
        backgroundColor: COlORS.dark_gray,
        alignSelf: 'flex-start',
        marginLeft: 25

    },

    projectRow: {
        backgroundColor: COlORS.dark_gray,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderRadius: 10,
        marginRight: 50,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 25
      },

      newRow: {
        backgroundColor: COlORS.dark_gray,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderRadius: 10,
        marginRight: 50,
        marginTop: 15,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 25
      },

    projectText: {
        flex: 1,
        flexDirection: 'row',
      },

      gameSeries: {
        marginLeft: 10,
        color: COlORS.white,
        fontSize: 14,
      },

      gameVersions: {
        marginLeft: 15,
        color: COlORS.white,
        fontSize: 14,
      },

      bulletIcon: {
        fontSize: 25,
        color: COlORS.light,
        marginLeft: 10,
      },

      forkIcon: {
        fontSize: 25,
        color: COlORS.light,
        marginLeft: 10,
        paddingLeft: 5
      },
})

export default Content