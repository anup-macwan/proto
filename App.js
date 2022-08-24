import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const HomeStack = () =>  (
  <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name='Home' component={Home}/>
    <Stack.Screen name='Detail' component={Detail}/>
  </Stack.Navigator>
)

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Pressable onPress={() => navigation.navigate('Detail')}><Text>Go to Detail</Text></Pressable>
      <Pressable onPress={() => navigation.navigate('Account', {screen:'Settings'})}><Text>Go to Settings</Text></Pressable>
      <Pressable onPress={() => navigation.navigate('Account', {screen:'Profile'})}><Text>Go to Profile</Text></Pressable>
      <StatusBar style="auto" />
    </View>
  )
}
const Detail = () => {
  return (
    <View style={styles.container}>
      <Text>Detail</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const ProfileStack = () => (
  <Stack.Navigator initialRouteName='Settings' screenOptions={{headerShown: false,}}>
  
  <Stack.Group screenOptions={{presentation: 'modal'}}>
    <Stack.Screen name='Settings' component={Settings} options={{presentation: 'modal'}}/>
    <Stack.Screen name='Profile' component={Profile}  options={{presentation: 'modal'}}/>
    <Stack.Screen name='Preference' component={Preference} />
  
  </Stack.Group>
  </Stack.Navigator>
)

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Pressable onPress={() => navigation.navigate('Settings')}><Text>Go to Settings</Text></Pressable>
      <Pressable onPress={() => navigation.navigate('Preference')}><Text>Go to Preference</Text></Pressable>
      <StatusBar style="auto" />
    </View>
  )
}
const Settings = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Pressable onPress={() => navigation.navigate('Profile')}><Text>Go to Profile</Text></Pressable>
      <Pressable onPress={() => navigation.navigate('Preference')}><Text>Go to Preference</Text></Pressable>
      <StatusBar style="auto" />
    </View>
  )
}
const Preference = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Preference</Text>
      <Pressable onPress={() => navigation.navigate('Profile')}><Text>Go to Profile</Text></Pressable>
      <StatusBar style="auto" />
    </View>
  )
}

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName='App'>
      <Drawer.Screen name='App' component={HomeStack}/>
      <Drawer.Screen name='Account' component={ProfileStack}/>
    </Drawer.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
