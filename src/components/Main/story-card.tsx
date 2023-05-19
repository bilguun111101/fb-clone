import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import theme from "../../context/theme";

interface StoryCardProps {
  index: number;
  lastIndex: number;
}

const StoryCard: FC<StoryCardProps> = ({ index, lastIndex }) => {
  return (
    <ImageBackground
      source={require("../../../assets/test.jpg")}
      style={{
        ...styles.content,
        marginRight: index === lastIndex ? 20 : null,
      }}
    >
      <View style={styles.avatarSection}>
        <Image
          source={require("../../../assets/test.jpg")}
          style={styles.avatar}
        />
      </View>
    </ImageBackground>
  );
};

export default StoryCard;

const styles = StyleSheet.create({
  content: {
    marginLeft: 10,
    width: 70,
    height: 120,
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
  },
  avatarSection: {
    width: 35,
    height: 35,
    padding: 3,
    borderWidth: 3,
    borderRadius: 100,
    borderColor: theme.colors.blue.primary,
  },
  avatar: { width: "100%", height: "100%", borderRadius: 100 },
});
