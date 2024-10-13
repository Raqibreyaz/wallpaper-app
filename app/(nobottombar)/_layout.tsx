import { Link, Slot } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function Layout() {
  return (
   <SafeAreaView>
    {/* <Link href={"/"}>Go Back</Link> */}
    <Slot/>
   </SafeAreaView>
  )
}

export default Layout