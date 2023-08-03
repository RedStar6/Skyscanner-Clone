import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, View, Text, Image } from 'react-native'
import { ExploreStyles as styles } from '../../styles/dashboard'
import Skyscanner from '../../assets/images/Skyscanner.png'

const Explore = () => {
  return (
    <SafeAreaView>
      <View>
        <Image source={Skyscanner} style={styles.image} />
      </View>
    </SafeAreaView>
  )
}

export default Explore