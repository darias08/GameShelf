import { View, Text, StyleSheet, StatusBar, Dimensions, FlatList, ActivityIndicator } from 'react-native'
import React, {useState, useCallback, useRef, useEffect} from 'react'
import YoutubePlayer from "react-native-youtube-iframe";
import COlORS from './colors';


const dimensionsForScreen = Dimensions.get("window")

const VideoScreen = ({route}) => {

    const [playing, setPlaying] = useState(true)
    const {videoId}  = route.params;
    const [isLoading, setLoading] = useState(true)


    const onStateChange = useCallback((state) => {
        if (state === "ended") {
          setPlaying(false);
        }
      }, []);
    
    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    const getYoutubeVideo = () => {

        

        return (
            <FlatList 
                data={videoId}
                style= {{marginTop: 250, position: 'absolute'}}
                keyExtractor={(item, index) => {
                return  index.toString();
                }}
                renderItem={({ item, index }) => {
                
                if (index === 1) {
                    return(
                    <View style = {styles.container}>
                    <YoutubePlayer
                        forceAndroidAutoplay 
                        width={dimensionsForScreen.width}
                        height={350}
                        play={playing}
                        videoId={item.video_id}
                        onChangeState={onStateChange}
                    />
                    </View>
                        )
                      }
                    }
                }
                />
        )
    }


    return (
        <View style = {styles.container}>
            <StatusBar  hidden/>
            {getYoutubeVideo()}
                
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
})
export default VideoScreen

// /*

//  <FlatList 
//                 data={videoId}
//                 style= {{marginTop: 250, position: 'absolute'}}
//                 keyExtractor={(item, index) => {
//                 return  index.toString();
//                 }}
//                 renderItem={({ item, index }) => {
                
//                 if (index === 1) {
//                     return(
//                     <View style = {styles.container}>
//                     {/* <YoutubePlayer
//                         forceAndroidAutoplay 
//                         width={dimensionsForScreen.width}
//                         height={350}
//                         play={playing}
//                         videoId={item.video_id}
//                         onChangeState={onStateChange}
//                     /> */}
//                     </View>
//                         )
//                       }
//                     }
//                 }
//                 />

//                 