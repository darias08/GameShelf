import { View, Text, FlatList, StyleSheet, ImageBackground, Image } from 'react-native'
import React from 'react'
import COlORS from '../constants/colors'
import ItemSeparator from '../constants/ItemSeparator'
import { getImage } from '../services/GameServices'


const Screenshots = (props) => {

  const Screenshot = props.dataScreenshot; 

  return (
    <View style = {{marginLeft: 10}}>
      <FlatList 
              data={Screenshot} 
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

              <ImageBackground imageStyle={{borderRadius:12}} style={styles.Screenshot} source={{uri: getImage(item.image_id)}}/>
                  
            }
            
          />

    </View>
  )
}

const styles = StyleSheet.create({
    Screenshot: {
      backgroundColor: COlORS.light_gray,
      width: 280,
      height: 160,
      borderRadius: 12
    }
  })

export default Screenshots

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