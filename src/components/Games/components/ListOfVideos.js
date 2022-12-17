import { View, Text, FlatList, StyleSheet, ImageBackground, Image } from 'react-native'
import React from 'react'
import COlORS from '../../constants/colors';
import ItemSeparator from '../../constants/ItemSeparator'
import { getYoutubePoster } from '../../services/GameServices'
import { TouchableOpacity } from 'react-native-gesture-handler'


const ListOfVideos = (props) => {

  const GameVideos = props.dataVideos; 

  return (
    <View style = {{marginLeft: 10}}>
      <FlatList 
              data={GameVideos} 
              keyExtractor={(item, index) => {
              return  index.toString();
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{position: 'relative', marginTop: 20}}
              ItemSeparatorComponent={() => <ItemSeparator width={20} />}
              ListHeaderComponent={() => <ItemSeparator width={30} /> }
              ListFooterComponent={() => <ItemSeparator width={40} />}
              renderItem={({ item, index }) => 
              <TouchableOpacity activeOpacity={0.7}>
                  <ImageBackground imageStyle={{borderRadius:12}} style={styles.Vids} source={{uri: getYoutubePoster(item.video_id)}}/>
              </TouchableOpacity>
                  
            }
            
          />

    </View>
  )
}

const styles = StyleSheet.create({
    Vids: {
      backgroundColor: COlORS.light_gray,
      width: 280,
      height: 160,
      borderRadius: 12
    }
  })

export default ListOfVideos

/*
export default class ScreenshotVideos extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <FlatList 
              extraData= {this.props.dataVideos}
              keyExtractor={(item, index) => {
              return  index.toString();
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{position: 'relative', marginTop: 20}}
              ItemSeparatorComponent={() => <ItemSeparator width={20} />}
              ListHeaderComponent={() => <ItemSeparator width={30} /> }
              ListFooterComponent={() => <ItemSeparator width={40} />}
              renderItem={({ item, index }) => 
          <ImageBackground imageStyle={{borderRadius: 12}} style = {styles.Screenshot} source={{uri: getImage(item.image_id)}}/>
              
          </ImageBackground>
                
        }
              
      />
  
      </View>
    )
  }
}

*/