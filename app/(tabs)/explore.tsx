import { Link } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Explore = () => {
  return (
    <SafeAreaView>
    <Text>explore</Text>
    <Link href={"/accountinfo"}>Account Information</Link>
    </SafeAreaView>
  )
}

export default Explore