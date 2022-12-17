import { View, Text, StyleSheet, StatusBar, Dimensions, FlatList } from 'react-native'
import React, {useState, useCallback, useRef} from 'react'
import YoutubePlayer from "react-native-youtube-iframe";
import { SharedElement } from 'react-navigation-shared-element';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const dimensionsForScreen = Dimensions.get("window")

const NewReleaseVideos = ({route}) => {

    const [playing, setPlaying] = useState(true)
    const {videoId, item}  = route.params;

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
          setPlaying(false);
        }
      }, []);

    return (
    <View style={styles.container}>
        <StatusBar  backgroundColor={'black'}/>
            <View style={styles.videoContainer}>
            
            
                <YoutubePlayer 
                    play={playing}
                    videoId={videoId}
                    onChangeState={onStateChange}
                    height={300}
                    width={dimensionsForScreen.width}
                    webViewProps={{
                    injectedJavaScript: `
                        var element = document.getElementsByClassName('container')[0];
                        element.style.position = 'unset';
                        element.style.paddingBottom = 'unset';
                        true;
                    `,
                    }}
                /> 
                
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    //transform: [{ rotate: "90deg" }],
    videoContainer: {
        marginTop: 250,
        position: 'absolute' 
    }
})
export default NewReleaseVideos