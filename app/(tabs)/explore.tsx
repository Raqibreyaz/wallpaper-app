import { ImageCard } from "@/components/ImageCard";
import {ThemedView} from "@/components/ThemedView"
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpapers } from "@/hooks/useWallpapers";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const Explore = () => {
  const wallpapers = useWallpapers();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            style={{ flex: 1 }}
            source={{
              uri: wallpapers[0]?.url ?? "",
            }}
          />
        }
      >
        <ThemedView style={styles.container}>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers}
              renderItem={({ item }) => <ImageCard wallpaper={item} />}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers}
              renderItem={({ item }) => <ImageCard wallpaper={item} />}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
        </ThemedView>
      </ParallaxScrollView>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
});
