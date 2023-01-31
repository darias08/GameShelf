import { View, Text, Dimensions, Animated, StyleSheet } from 'react-native'
import React, { useRef, useEffect } from 'react'



const Placeholder = ({height, width, borderRadius, marginLeft, position, marginTop, paddingLeft,}) => {

const opacity = useRef(new Animated.Value(0.3));


// if(profile === 'circle') {
//     borderRadius = typeof height === 'string' ? parseInt(height, 10) / 2 : height / 2;
// }

useEffect(() => {

Animated.loop(
    Animated.sequence([
        Animated.timing(opacity.current, {
            toValue: 1,
            useNativeDriver: true,
            duration: 500,
        }),
        Animated.timing(opacity.current, {
            toValue: 0.3,
            useNativeDriver: true,
            duration: 800,
        }),
    ])
).start()

}, [opacity])

  return (
    <Animated.View style={[{opacity: opacity.current, width: width, height: height, borderRadius, marginLeft, position, marginTop, paddingLeft}, styles.skeleton]}>
    
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    skeleton: {
        backgroundColor: '#3D3D3D',
    }
})

export default Placeholder