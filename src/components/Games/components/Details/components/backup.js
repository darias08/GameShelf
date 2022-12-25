const toggleModal = () => {
    closeModal(false)
  }

<View>
      <Modal
        statusBarTranslucent={true}
        style={{ margin: 0 }}
        animationIn='fadeIn'
        animationInTiming={300}
        animationOut='fadeOut'
        animationOutTiming={500}
        onBackButtonPress={() => closeModal(false)}
        isVisible={showModal}
        onBackdropPress={() => closeModal(false)}>
        {/* () => closeModal(false) */}
        
        <View style = {{flex: 1, backgroundColor: COlORS.black, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity activeOpacity={0.7} onPress = {toggleModal} style={{ marginBottom: 175, marginLeft: 300, position: 'relative'}}>
          <Image style= {{width: 45, height: 45}} source={require('../../../../Images/Icons/Close-button.png')}/>
        </TouchableOpacity>

            <View style={styles.containerVideo}>
              {/* <ActivityIndicator size={25} />  */}

                
                <YoutubePlayer
                  
                  webViewProps={{
                    injectedJavaScript: `
                    var element = document.getElementsByClassName('container')[0];
                    element.style.position = 'unset';
                    true;
                    `,
                  }}
                  play={playing}
                  webViewStyle={{width: width - 15}}
                  videoId={vidData1}
                /> 
                

            </View>
        </View>
      </Modal>
    </View>