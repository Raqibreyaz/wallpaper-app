import { Wallpaper } from "@/hooks/useWallpapers";
import { Image, StyleSheet, View } from "react-native";

export const ImageCard = ({ wallpaper }:{wallpaper:Wallpaper}) => {
  return (
    <View>
      <Image
        source={{ uri: wallpaper.url }}
        alt={wallpaper.name}
        style={styles.image}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 300,
  },
});
