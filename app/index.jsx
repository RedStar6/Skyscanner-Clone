import { Image, Pressable, Text, View, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/home'
import logo from '../assets/images/sky_logo.png'
import backgroundVideo from "../assets/video/vid2.mp4"
import { Video, ResizeMode } from 'expo-av';
import {Link,SplashScreen } from 'expo-router';
import { useState, useEffect } from 'react'


const index = () => {
    const { width, height } = Dimensions.get("window");
    const [ready, setReady] = useState(false)

    useEffect(() => {
      if(ready) {
        SplashScreen.hideAsync()
      }
    }, [ready])
  
    
    return (
        <SafeAreaView style={styles.Container}>
            <Video
                source={backgroundVideo}
                style={styles.backgroundVideo}
                resizeMode={ResizeMode.STRETCH}
                isLooping
                shouldPlay={true}
                onLoadStart={() => setReady((curr) => !curr)}

            />
            <View style={styles.inner}>
                <View>
                    <Image source={logo} style={styles.logo} />
                    <Text style={{
                        color:'white',
                        fontSize:23,
                        textAlign:'center',
                        fontWeight:'bold',
                        marginBottom:3
                    }}>Want Exclusive deals, news and ideas by email?</Text>
                    <Text style={{
                        color:'white',
                        fontSize:15,
                        textAlign:'center'
                    }}>Sign up or log in with Google to get the latest inspiration sent to your inbox.</Text>
                </View>
                <View style={styles.bottom_section}>
                    <Pressable 
                    style={[styles.links,{ 
                        backgroundColor: '#84E9FF'}]}>
                        <Text>CONTINUE WITH GOOGLE</Text>
                    </Pressable>
                    <Link 
                    replace
                    href={'/dashboard'}
                    style={[styles.links,
                        { 
                        backgroundColor: 'white'}]
                        }>
                   
                        <Text>MAYBE LATER</Text>
                    
                    </Link>
                    
                    <Text 
                    style={{ 
                        textAlign: 'center',
                        color:'white',
                        fontSize:13
                        }}>You can opt out of our emails at anytime. Read our <Text style={{ color: '#84E9FF' }}>
                        privacy Policy
                    </Text> to find out more.</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default index