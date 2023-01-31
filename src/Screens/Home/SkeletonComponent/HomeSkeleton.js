import { View, ScrollView } from 'react-native'
import React from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const HomeSkeleton = () => {
  return (

    <ScrollView contentContainerStyle={{alignItems: 'center'}}>

    <SkeletonPlaceholder borderRadius={4} backgroundColor={'#2A282E'} highlightColor={'#4F4D54'} speed={800}>
      <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 100, marginTop: 30}}>
        <View style={{width: 160, height: 40}}/>
        <View style={{width: 50, height: 50, borderRadius: 50, marginLeft: 45}} />
      </View>

      <View style={{width: 355, height: 45, marginTop: 30, borderRadius: 20, }}/>

      <View style={{flexDirection: 'row'}}>
        <View style={{width: 80, height: 30, marginTop: 20, }}/>
        <View style={{width: 80, height: 30, marginTop: 20, marginLeft: 10,}}/>
        <View style={{width: 80, height: 30, marginTop: 20, marginLeft: 10, }}/>
        <View style={{width: 80, height: 30, marginTop: 20, marginLeft: 10,}}/>
      </View>

      <View style={{width: 175, height: 40, marginTop: 25, }}/>

      <View style={{width: 375, height: 250, marginTop: 20,}}/>

    </SkeletonPlaceholder>
    </ScrollView>
  )
}

export default HomeSkeleton