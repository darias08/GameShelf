
import React, {useState, useRef, useEffect} from 'react';
import { Dimensions, Text, View, Button, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import YoutubePlayer from 'react-native-youtube-iframe';

const NotificationScreen = ({navigation}) => {

  const [elapsed, setElapsed] = useState(0);
  const playerRef = useRef();

  useEffect(() => {
    const interval = setInterval(async () => {
      const elapsed_sec = await playerRef.current.getCurrentTime(); // this is a promise. dont forget to await

      // calculations
      const elapsed_ms = Math.floor(elapsed_sec * 1000);
      const ms = elapsed_ms % 1000;
      const min = Math.floor(elapsed_ms / 60000);
      const seconds = Math.floor((elapsed_ms - min * 60000) / 1000);

      setElapsed(
        min.toString().padStart(2, '0') +
          ':' +
          seconds.toString().padStart(2, '0') +
          ':' +
          ms.toString().padStart(3, '0'),
      );
    }, 100); // 100 ms refresh. increase it if you don't require millisecond precision

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={{flex: 1 , backgroundColor: 'black'}}>
      <YoutubePlayer
        height={250}
        ref={playerRef}
        videoId={'DC471a9qrU4'}
        
      />
        <View style={{flexDirection: 'row', marginLeft: 30}}>
          <Text style={{flex: 1}}>{'elapsed time'}</Text>
          <Text style={{flex: 1, color: 'green'}}>{elapsed}</Text>

         
        </View>

        <Button
        title="log details"
        onPress={() => {
        //   playerRef.current?.getCurrentTime().then(
        //     currentTime => console.log({currentTime})
        //   );
          
        //  playerRef.current?.getVolume().then(
        //   getVolume => console.log({getVolume})
        //  )

       

        //   playerRef.current?.getDuration().then(
        //     getDuration => console.log({getDuration})
        //   );
        }}
      />
      
      <Button
        title="Jump button"

        onPress={() => {
        playerRef.current?.seekTo(30, true)
        }}
      />

    </View>
  );
};


export default NotificationScreen;
