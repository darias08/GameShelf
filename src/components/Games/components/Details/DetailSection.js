import {View, Text} from 'react-native';
import React from 'react';
import ReadMore from '@fawazahmed/react-native-read-more';
import COlORS from '../../../constants/colors';
import ItemSeparator from '../../../constants/ItemSeparator';
import AgeRated from './AgeRated';
import Genres from './Genres';
import VideoSection from './VideoSection';
import { ScrollView } from 'react-native-gesture-handler';
import Video_Cover from '../Video_Cover';

const Details = (props) => {
  const ageRated = props.ageRating;
  const videoCover = props.videoCover;
  console.log(videoCover)

  return (
    <ScrollView nestedScrollEnabled={true} style={{backgroundColor: 'black', flex: 1}}>
      <AgeRated ageRated={ageRated} />

      <Video_Cover videoCover = {videoCover}/>
      {/* <VideoSection/> */}
      {/* <Genres /> */}
    </ScrollView>
  );
};

export default Details;
