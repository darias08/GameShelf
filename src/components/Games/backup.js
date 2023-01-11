<View key={item.id}>
              <ScrollView
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}>
                {/***************Back Button****************/}
                <View style={styles.projectRow}>
                  <View style={styles.projectText}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                      <Feather
                        name={'chevron-left'}
                        size={35}
                        color={'white'}
                      />
                    </TouchableOpacity>

                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        marginLeft: 95,
                        marginTop: 5,
                      }}>
                      Game Details
                    </Text>
                  </View>

                  {/***************More Button****************/}
                  <View style={styles.moreContainer}>
                    <TouchableOpacity activeOpacity={0.5}>
                      <Feather
                        name="more-horizontal"
                        size={30}
                        style={styles.moreIcon}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {/***************Game Cover****************/}
                <View
                  style={{flexDirection: 'row', marginLeft: 33, marginTop: 35}}>
                  <ImageBackground
                    imageStyle={{borderRadius: 20}}
                    style={styles.containerGame}
                    resizeMode="cover"
                    source={{
                      uri: getImage(item.cover.image_id),
                    }}></ImageBackground>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: 'white',
                      fontFamily: 'RobotoSlab-Regular',
                      marginTop: 25,
                      textAlign: 'center',
                      width: 300,
                    }}>
                    {item.name}
                  </Text>

                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <FlatList
                      data={item.genres}
                      keyExtractor={item => item.id.toString()}
                      numColumns={2}
                      style={{marginTop: 10}}
                      renderItem={({item, index}) => {
                        if (index === 0 || index === 1) {
                          return (
                            <Text
                              style={{
                                marginLeft: 5,
                                color: COlORS.light,
                                fontFamily: 'RobotoSlab-Regular',
                                fontSize: 10,
                                padding: 10,
                                borderRadius: 10,
                                backgroundColor: '#242425',
                              }}>
                              {item.name}
                            </Text>
                          );
                        }
                      }}
                    />
                  </ScrollView>

                  {item.total_rating && displayRating
                    ? !isNaN(roundRating) && (
                        <View style={{flexDirection: 'row', marginTop: 11}}>
                          <StarRatingDisplay
                            starSize={20}
                            rating={roundRating}
                            enableHalfStar={true}
                            style={{marginTop: 3}}
                            maxStars={5}
                            starStyle={{width: 10}}
                          />

                          <Text
                            style={{
                              color: 'white',
                              fontSize: 16,
                              marginLeft: 15,
                              marginRight: 5,
                              fontFamily: 'RobotoSlab-Bold',
                            }}>
                            {roundRating}
                          </Text>
                        </View>
                      )
                    : null}
                </View>

                <Text style={styles.Description}>Description</Text>

                <SafeAreaView style={styles.safe}>
                  <View style={styles.root}>
                    <ReadMore
                      seeMoreStyle={{color: COlORS.blue}}
                      animate={true}
                      seeLessStyle={{color: COlORS.blue}}
                      seeMoreText="Read more"
                      seeLessText="Read less"
                      style={styles.textStyle}
                      numberOfLines={9}>
                      <Text style={{lineHeight: 22}}>{}</Text>
                    </ReadMore>
                  </View>
                </SafeAreaView>

                {/* Release Date & Developer */}
                <View style={{flexDirection: 'row'}}>
                  {/* <View style={{flexDirection: 'column'}}>
                    <Text style={{color: 'white', fontSize: 18, fontFamily: 'RobotoSlab-Regular', marginLeft: 30, marginTop: 20}}>Release Date </Text>
                    <Text style={{marginTop: 10, marginLeft: 30, fontSize: 14, fontFamily: 'RobotoSlab-Regular', color: COlORS.grey}}>{date}</Text>
                  </View> */}

                  <View style={{flexDirection: 'column'}}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        fontFamily: 'RobotoSlab-Regular',
                        marginLeft: 45,
                        marginTop: 20,
                      }}>
                      Developer{' '}
                    </Text>

                    {/* <View style={{ marginLeft: 45, flexWrap: 'wrap'}}>
                    {
                      involveCompanies.map((item, index) => {
                        if (index === 1) {
                          return(
                            <Text key={item.id} style={{marginTop: 10, fontSize: 14, fontFamily: 'RobotoSlab-Regular', color: COlORS.grey, width: width / 2}}>{item.company.name}</Text>
                          )
                        }
                      })
                    }

                    </View> */}
                  </View>
                </View>

                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'RobotoSlab-Regular',
                    fontSize: 16,
                    marginTop: 30,
                    marginLeft: 30,
                  }}>
                  Media
                </Text>
                {/* <Media videoCover = {Videos} screenshots = {Screenshot}/> */}

                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'RobotoSlab-Regular',
                    fontSize: 16,
                    marginTop: 45,
                    marginLeft: 35,
                  }}>
                  More Information
                </Text>

                {/* <Content involveCompanies={involveCompanies}/>  */}

                {/* <AvailablePlatforms gamePlatforms={gamePlatforms}/>

            <GameCapability gameModes= {gameModes} playerPerspectives = {playerPerspectives} ganeEngine = {gameEngine}/> */}

                {/* <SimilarGames navigation={navigation} similarGames={similarGames} /> */}
              </ScrollView>
            </View>