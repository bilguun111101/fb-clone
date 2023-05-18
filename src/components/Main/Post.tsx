import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const Post = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={{
            borderRadius: 100,
            width: 35,
            height: 35,
            overflow: "hidden",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../../assets/test.jpg")}
            style={{ width: "100%", height: "100%" }}
          />
        </Pressable>

        <View>
          <Pressable>
            <Text style={{ fontWeight: "500", fontSize: 11 }}>Raj__2255</Text>
          </Pressable>
          <Text style={{ fontWeight: "300", fontSize: 9 }}>
            One of the most popular
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 5,
            position: "absolute",
            right: 0,
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <Pressable>
            <AntDesign name="close" size={18} color="black" />
          </Pressable>
        </View>
      </View>

      <View style={{ width: "100%", height: 150 }}>
        <Image
          source={require("../../../assets/test.jpg")}
          style={{ width: "100%", height: "auto", zIndex: 100 }}
        />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    flexDirection: "row",
    position: "relative",
    gap: 5,
  },
});
