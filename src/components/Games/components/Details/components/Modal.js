import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
//import Modal from 'react-native-modal';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import COlORS from '../../../../constants/colors';
import {ActivityIndicator} from 'react-native-paper';
import YoutubePlayer from 'react-native-youtube-iframe';
import Ionicons from 'react-native-vector-icons/Ionicons';


const {width, height} = Dimensions.get('screen');

const ModalTester = ({closeModal, showModal, videoID}) => {
  const [playing, setPlaying] = useState(true);

  const vidData1 = [videoID];

  
  const [visible, setIsVisible] = useState(false);
  const toggleModal = () => {
    closeModal(false);
  };

  return (
    <View>
      <Modal
        animationType="fade"
        visible={showModal}
        onRequestClose={() => closeModal(false)}>
        <View
          style={{
            backgroundColor: COlORS.black,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={toggleModal}
            style={{marginBottom: 195, marginLeft: 300, position: 'relative'}}>
            <Image
              style={{width: 45, height: 45}}
              source={require('../../../../Images/Icons/close_button.png')}
            />
          </TouchableOpacity>

          
          

          {/* <View style={styles.containerVideo}>

            <YoutubePlayer
              // play={playing}
              webViewStyle={{width: width - 10}}
              videoId={vidData1}
            />

            
          </View> */}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  containerVideo: {
    overflow: 'hidden',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: 300,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 230,
  },
});

export default ModalTester;
