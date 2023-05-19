import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import StoryCard from "./story-card";
import theme from "../../context/theme";

const array = new Array(20).fill(1);

const Create = () => {
  return (
    <View style={styles.create}>
      <View style={styles.createContent}>
        <Image
          source={require("../../../assets/test.jpg")}
          style={styles.createAvatar}
        />
        <Pressable style={styles.addButton}>
          <Feather name="plus" size={24} color="white" />
        </Pressable>
      </View>

      <Text style={styles.createBottomTitle}>Create story</Text>
    </View>
  );
};

const StorySection = () => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        style={styles.listContent}
        data={array}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          if (!index) return <Create />;
          return <StoryCard lastIndex={array.length - 1} index={index} />;
        }}
        keyExtractor={(item, index) => `index-${index}`}
      />
    </View>
  );
};

export default StorySection;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
    paddingVertical: 20,

    backgroundColor: "#fff",
    flexDirection: "row",
    overflow: "scroll",
    paddingHorizontal: 10,
  },
  create: {
    width: 70,
    height: 120,
    borderRadius: 10,
    overflow: "hidden",
    paddingVertical: 5,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  createContent: { position: "relative", width: "100%", height: "60%" },
  plusIconContent: {
    position: "absolute",
    borderRadius: 100,
    borderWidth: 3,
    width: 35,
    height: 35,
    borderColor: "#fff",
    bottom: -17,
    left: "-50%",
    transform: [{ translateX: 50 }],
  },
  listContent: {
    gap: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    position: "absolute",
    borderRadius: 100,
    borderWidth: 3,
    width: 35,
    height: 35,
    zIndex: 10,
    borderColor: "#fff",
    bottom: -17,
    left: "30%",
    backgroundColor: theme.colors.blue.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  createAvatar: { borderRadius: 5, width: "100%", height: "100%" },
  createBottomTitle: { fontWeight: "600", fontSize: 10, textAlign: "center" },
});
