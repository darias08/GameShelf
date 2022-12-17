import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import FontAwesome  from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'
import COlORS from '../../constants/colors';

const GameTabs = (props) => {

  return (
    <View>
        <View style={styles.gameSeries}>
            <View style={styles.projectText}>
                <Foundation name= "list-bullet" style = {styles.bulletlistIcon}/>
                <Text style={styles.gameSeriesText}>Game Series</Text>
                </View>
            <View style={styles.moreContainer}>
                <TouchableOpacity activeOpacity={0.5}>
                    <FontAwesome name="chevron-right" size={15} style={styles.moreIcon} />
                </TouchableOpacity>
            </View>          
        </View>

        
    </View>
  )
}

{/* <View>
        {/* List of bundles for a game }
        <View style={styles.gameSeries}>
            <View style={styles.projectText}>
                <Foundation name= "list-bullet" style = {styles.bulletlistIcon}/>
                <Text style={styles.gameSeriesText}>Game Series</Text>
                </View>
            <View style={styles.moreContainer}>
                <TouchableOpacity activeOpacity={0.5}>
                    <FontAwesome name="chevron-right" size={15} style={styles.moreIcon} />
                </TouchableOpacity>
            </View>          
        </View>

        {/* Game Bundles }
        <View style={styles.gameBundles}>
            <View style={styles.projectText}>
                <FontAwesome name= "code-fork" style = {styles.Icon}/>
                <Text style={styles.bundleText}>Game Versions and Bundles</Text>
                </View>
            <View style={styles.moreContainer}>
                <TouchableOpacity activeOpacity={0.5}>
                    <FontAwesome name="chevron-right" size={15} style={styles.moreIcon} />
                </TouchableOpacity>
            </View>          
        </View>

        {/*Game developer games}
        <View style={styles.DeveloperGames}>
            <View style={styles.projectText}>
                <FontAwesome name= "code" style = {styles.IconDeveloper}/>

                <View style={{flexDirection: 'column', marginTop: 5, marginLeft: 38}}>
                <ScrollView horizontal={true}  style={{ width: "100%" }}>
                <FlatList data={props.developerName} renderItem={({ item, index }) => {

                if (index === 0) {
                return (
                    <Text style = {styles.developerText}>{item.company.name}</Text>
                )}
                }
            }
            />
                
            </ScrollView>
            <Text style={{marginLeft: 13, marginBottom: 5, fontSize: 10, color: COlORS.grey}}>Developer</Text>
            </View>
            </View>

            <View style={styles.moreContainer}>
            <TouchableOpacity activeOpacity={0.5}>
                <FontAwesome name="chevron-right" size={15} style={styles.moreIcon} />
            </TouchableOpacity>
            </View>          
        </View>
        
         {/*Game publisher games}
        <View style={styles.DeveloperGames}>
            <View style={styles.projectText}>
                <MaterialCommunityIcons name= "publish" style = {styles.IconPublish}/>

                <View style={{flexDirection: 'column', marginTop: 5, marginLeft: 38}}>
                <ScrollView horizontal={true}  style={{ width: "100%" }}>
                <FlatList data={props.developerName} renderItem={({ item, index }) => {

                if (index === 0) {
                return (
                    <Text style = {styles.developerText}>{item.company.name}</Text>
                )}
                }
            }
            />
                
            </ScrollView>
            <Text style={{marginLeft: 13, marginBottom: 5, fontSize: 10, color: COlORS.grey}}>Publisher</Text>
            </View>
            </View>

            <View style={styles.moreContainer}>
            <TouchableOpacity activeOpacity={0.5}>
                <FontAwesome name="chevron-right" size={15} style={styles.moreIcon} />
            </TouchableOpacity>
            </View>          
        </View>

        {/* Game Official Website }
        <View style={styles.gameBundles}>
            <View style={styles.projectText}>
                <MaterialCommunityIcons name= "web" style = {styles.Icon}/>
                <Text style={styles.officialWebText}>Official Website</Text>
                </View>
            <View style={styles.moreContainer}>
                <TouchableOpacity activeOpacity={0.5}>
                    <FontAwesome name="chevron-right" size={15} style={styles.moreIcon} />
                </TouchableOpacity>
            </View>          
        </View>
    </View> */}

const styles = StyleSheet.create({
    projectText: {
        flex: 1,
        flexDirection: 'row',
        width: Dimensions.get('window').width
      },
    
      gameSeries: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginLeft: 40,
        marginRight: 30,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: COlORS.dark_gray,
        borderRadius: 10
      },

      gameBundles: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10,
        marginLeft: 40,
        marginRight: 30,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: COlORS.dark_gray,
        borderRadius: 10
      },

      DeveloperGames: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10,
        marginLeft: 40,
        marginRight: 30,
        paddingHorizontal: 10,
        backgroundColor: COlORS.dark_gray,
        borderRadius: 10
      },

      gameSeriesText: {
        marginLeft: 50,
        position: 'absolute',
        color: COlORS.white,
        fontSize: 13,
      },

      bundleText: {
        marginLeft: 50,
        position: 'absolute',
        color: COlORS.white,
        fontSize: 13,
      },

      officialWebText: {
        marginLeft: 50,
        position: 'absolute',
        color: COlORS.white,
        fontSize: 13,
      },

      developerText: {
        marginLeft: 12,
        position: 'relative',
        color: COlORS.white,
        fontSize: 13,
      },

      moreContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30,
      },

      Icon: {
        fontSize: 20,
        color: COlORS.white,
        marginLeft: 15,
      },

      bulletlistIcon: {
        fontSize: 20,
        color: COlORS.white,
        marginLeft: 12,
      },

      IconDeveloper: {
        fontSize: 20,
        color: COlORS.white,
        position: 'absolute',
        marginLeft: 10,
        paddingTop: 12,
      },

      IconPublish: {
        fontSize: 20,
        color: COlORS.white,
        position: 'absolute',
        marginLeft: 10,
        paddingTop: 12,
      },
})

export default GameTabs