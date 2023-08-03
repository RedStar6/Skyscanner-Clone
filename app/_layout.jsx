import { SplashScreen, Stack } from 'expo-router';
import { useState, useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function Layout() {

  return( 
  <SafeAreaProvider>
    <Stack screenOptions={{
      headerShown: false,
    }} />
    
    </SafeAreaProvider>)

}
