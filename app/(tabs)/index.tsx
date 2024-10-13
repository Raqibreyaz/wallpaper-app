import {View} from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Suggested" component={Suggested} />
    </Tab.Navigator>
  );
}

function Library(){
  return <View>
Home Screen
  </View>
}
function Liked(){
  return <View>
Liked Wallpapers
  </View>
}
function Suggested(){
  return <View>
Suggested Wallpapers
  </View>
}