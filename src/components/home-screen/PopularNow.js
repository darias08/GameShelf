import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import ItemSeparator from '../constants/ItemSeparator';
import COlORS from '../constants/colors';
import {getImage} from '../services/GameServices';
import {Carousel, Pagination} from 'react-native-snap-carousel-v4';
import LinearGradient from 'react-native-linear-gradient';
import GameRating from '../Games/components/Details/components/GameRating';

const PopularNow = props => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [index, setIndex] = useState(0);

  const isCarousel = useRef();



  const renderItem = ({item, index}) => {
    const artworkCover = () => {
      if (item.artworks) {
        const artwork = item.artworks[0];

        return artwork.image_id;
      }
    };

    const developer = () => {
      if (item.involved_companies) {
        return item.involved_companies.map(item => {
          if (item.developer === true) {
            return <Text key={item.id}>{item.company.name}</Text>;
          }
        });
      }
    };

    return (
      <ImageBackground
        imageStyle={{
          borderRadius: 15,
          borderWidth: 5,
          borderColor: '#404040',
        }}
        resizeMode={'stretch'}
        style={{
          backgroundColor: COlORS.dark_gray,
          borderRadius: 10,
          height: 250,
          width: 375,
          marginLeft: 25,
        }}
        source={{uri: getImage(artworkCover())}}>
        <View
          style={{
            flex: 1,
            borderRadius: 15,
            backgroundColor: 'rgba(0,0,0, 0.6)',
          }}>
          <View style={{}}>
            <Text style={styles.gameTitle}>{item.name}</Text>

            <Text style={styles.developerTitle}>{developer()}</Text>

            <View style={{alignSelf: 'flex-start', height: 40}}>
              <FlatList
                data={item.genres}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                style={{paddingLeft: 20}}
                renderItem={({item, index}) => {
                  if (index === 0)
                    return <Text style={styles.genresText}>{item.name}</Text>;
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              position: 'absolute',
              marginTop: 130,
            }}>
            <TouchableOpacity
              style={{marginLeft: 25, marginTop: 45}}
              activeOpacity={0.9}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                colors={['#2634C3', '#424FDA']}
                style={{borderRadius: 10}}>
                <Text style={styles.seeMoreButton}>See More</Text>
              </LinearGradient>
            </TouchableOpacity>

            <GameRating Rating={item.total_rating} />
          </View>
        </View>
      </ImageBackground>
    );
  };


  return (
    <ScrollView style={{width: '100%'}}>
      <View style={styles.projectRow}>
        <View style={styles.projectText}>
          <Text style={styles.titlePopularNow}>Most Popular now</Text>
        </View>
      </View>

      <SafeAreaView style={{}}>
        <View style={{flexDirection: 'row'}}>
          <Carousel
            layout='default'
            data={props.data}
            sliderWidth={365}
            sliderHeight={250}
            itemWidth={365}
            loop={true}
            onSnapToItem={index => setIndex(index)}
            activeSlideAlignment="start"
            ListFooterComponent={() => <ItemSeparator width={50} />}
            renderItem={renderItem}
            loopClonesPerSide={10}
          />
          
        </View>

        <Pagination
          dotsLength={props.data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            marginHorizontal: -5,
            marginTop: -10,
            backgroundColor: COlORS.lightBlue,
          }}
          tappableDots={true}
          inactiveDotStyle={{
            backgroundColor: COlORS.light,
            width: 15,
            height: 15,
            borderRadius: 10,
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </SafeAreaView>

          
      {/* <FlatList
        data={props.data}
        keyExtractor={item => item.id.toString()} 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingLeft: 30}}
        initialNumToRender={10}
        ItemSeparatorComponent={() => <ItemSeparator width={15} />}
        ListHeaderComponent={() => <ItemSeparator width={20} />}
        ListFooterComponent={() => <ItemSeparator width={35} />}
        renderItem={({item}) => {
          if (item.cover.image_id) {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  props.navigation.navigate('GamePreview', {
                    gameId: item.id
                  })
                }>
                <Image
                  resizeMode="cover"
                  style={styles.containerGames}
                  source={{uri: getImage(item.cover.image_id)}}
                />
              </TouchableOpacity>
            );
          }
        }}
      /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titlePopularNow: {
    fontSize: 20,
    marginLeft: 10,
    color: COlORS.white,
    fontFamily: 'RobotoSlab-Regular'
  },

  seeMoreButton: {
    color: 'white',
    paddingHorizontal: 45,
    paddingVertical: 12,
    borderRadius: 10,
  },

  developerTitle: {
    color: '#E5E3EA',
    fontSize: 14,
    fontFamily: 'RobotoSlab-Regular',
    marginLeft: 25,
    marginTop: 5,
  },

  genresText: {
    color: COlORS.light,
    fontSize: 12,
    fontFamily: 'RobotoSlab-Regular',
    marginLeft: 5,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COlORS.grey,
    backgroundColor: '#0C0C0D',
  },

  containerGames: {
    backgroundColor: COlORS.light_gray,
    height: 200,
    width: 150,
    borderRadius: 15,
  },

  gameTitle: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'RobotoSlab-Bold',
    marginLeft: 25,
    marginTop: 30,
    width: 270,
  },

  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  projectText: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
  },

  projectRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 15,
    marginTop: 25,
    marginBottom: 20,
  },

  moreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },

  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default PopularNow;
