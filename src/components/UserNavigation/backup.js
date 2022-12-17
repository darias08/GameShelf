export default function UserIsSignedIn() {
  
  const navigation = useNavigation();
  //const Stack = createNativeStackNavigator();
  const Stack = createSharedElementStackNavigator();

  return (
    
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
        headerShown: false
        }}
      >

      {/* Profile Screen */}
      <Stack.Screen name="Tabs"  component= {MyTabs} options={{headerShown: false}}/>      
      
      <Stack.Screen 
      name="Profile" 
      component={ProfileScreen} 
      options={{
      headerTintColor: "white",
      headerTransparent: true,
      title: '',
      headerStyle: {backgroundColor: 'transparent'},
      animation: 'slide_from_right',
      headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={25} color="white" style={{paddingRight:30, paddingLeft: 30}}/>
      </TouchableOpacity>  
      ),
      }}/>
      
      {/* Playstation Screen */}
      <Stack.Screen 
      name="Playstation" 
      component={PlaystationScreen}
      options={{
      headerTintColor: "white",
      headerTransparent: true,
      title: '',
      headerStyle: {backgroundColor: 'transparent'},
      animation: 'slide_from_right',  
      headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={25} color="white" style={{paddingRight:30, paddingLeft: 30}}/>
      </TouchableOpacity>  
      ),
      }} />

      <Stack.Screen name = 'HomeScreen' component={HomeScreen} />

      
      <Stack.Screen 
      name="GamePreview" 
      component={GamePreviewScreen}
      options
      sharedElements={(route, otherRoute, showing) => {
        if (otherRoute.name === 'GameDetails') {
          return [
           {
            
           }
          ]
        }

        const { item } = route.params;
          return [
            {
            id: `item.${item.id}.game`,
            animation: 'move',
            resize: 'clip',
        // align: ''left-top'
        },
      ];
      }}
      />

      <Stack.Screen
        name='GameDetails'
        component={GameDetails}
      />

    </Stack.Navigator>
  
  )
}