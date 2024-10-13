import DownloadPicture from "@/components/BottomSheet";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Account = () => {
  const [pictureOpen, setPictureOpen] = useState<boolean>(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text>account</Text>
        <Button
          title="Open Bottom sheet"
          onPress={() => setPictureOpen(true)}
        ></Button>
        {pictureOpen && (
          <DownloadPicture onClose={() => setPictureOpen(false)} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Account;
