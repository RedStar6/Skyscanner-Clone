import { Tabs } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
  return( 
    <SafeAreaProvider>
       <Tabs screenOptions={{
    headerShown:false
  }}>
    <Tabs.Screen 
    name='Explore'/>
     <Tabs.Screen 
    name='Trips'
     />
    <Tabs.Screen 
    name='Profile'/>
    

  </Tabs>
    </SafeAreaProvider>
 )
}
