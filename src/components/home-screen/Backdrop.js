import {
    View,
    Text,
    FlatList,
    ScrollView,
    Image,
    Dimensions,
    Animated
  } from 'react-native';
  import {getImage} from '../services/GameServices';
  import LinearGradient from 'react-native-linear-gradient';
  import COlORS from '../constants/colors';
  import MaskedView from '@react-native-masked-view/masked-view';
  import { Svg, Rect } from 'react-native-svg';


  const {width, height} = Dimensions.get('window');
  
  const Backdrop = ({games, scrollZ}) => {

    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const BACKDROP_HEIGHT = height * 0.45;
    const SPACING = 10;
    const ITEM_SIZE = width * 0.6;
  
    return (
      <View style={{height: BACKDROP_HEIGHT, position: 'absolute', width}}>

        <ScrollView horizontal={true} style={{width: '100%'}}>
        
        <FlatList
          data={games}
          removeClippedSubviews={false}
          contentContainerStyle={{width, height: BACKDROP_HEIGHT}}
          keyExtractor={(item) => {
          return  item.id.toString();
          }}

          renderItem={({ item, index }) => {

            const inputRange = [
                (index - 1) * ITEM_SIZE,
                index * ITEM_SIZE
            ]

            const translateX = scrollZ.interpolate({
                inputRange,
                outputRange: [0, width]
            })
            
          return (
            <Animated.View
                removeClippedSubviews={false}
                style={{position: 'absolute', width: translateX, height, overflow: 'hidden'}}
              >
              <Image
                blurRadius={1}
                resizeMode='stretch'
                source={{ uri: getImage(item.cover.image_id) }}
                style={{
                  width,
                  height: BACKDROP_HEIGHT,
                  position: 'absolute'
                }}
              />
              </Animated.View>
            );
        }}
        />
  
          <LinearGradient
            colors={['rgba(60, 60, 60, 0.0)', 'rgba(0, 0, 0, 0.7)']}
            style={{
              height: BACKDROP_HEIGHT,
              width,
              position: 'absolute',
              bottom: 0,
            }}
          />
        </ScrollView>
      </View>
    );
  };
  
  export default Backdrop;
  