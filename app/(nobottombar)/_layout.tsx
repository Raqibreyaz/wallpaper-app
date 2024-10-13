import { Link, Slot } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

function Layout() {
  return (
   <View>
    <Link href={"/"}>Go Back</Link>
    <Slot/>
   </View>
  )
}

export default Layout