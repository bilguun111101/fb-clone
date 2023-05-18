import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { memo } from "react";
import { StorySection } from "../components";
import Post from "../components/Main/Post";

const Main = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EAEDED" }}>
      <ScrollView>
        <View style={styles.headerSearchContent}>
          <Pressable style={styles.avatar}>
            <Image
              source={require("../../assets/test.jpg")}
              style={{ width: "100%", height: "100%" }}
            />
          </Pressable>

          <TextInput
            placeholder="write something here..."
            style={{
              height: 40,
              borderWidth: 1,
              borderRadius: 30,
              paddingHorizontal: 20,
              borderColor: "#EAEDED",
            }}
          />

          <Pressable
            style={{
              width: 30,
              height: 30,
              borderWidth: 2,
              borderColor: "green",
              borderRadius: 4,
            }}
          ></Pressable>
        </View>

        <View style={styles.typeBtnContent}>
          <Pressable>
            <Text style={{ fontWeight: "700", fontSize: 15 }}>stories</Text>
          </Pressable>
          <Pressable>
            <Text style={{ fontWeight: "700", fontSize: 15 }}>reels</Text>
          </Pressable>
        </View>

        <StorySection />

        <>
          {new Array(20).fill(1).map((el, idx) => {
            return <Post key={idx} />;
          })}
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerSearchContent: {
    gap: 10,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 100,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  typeBtnContent: {
    width: "100%",
    marginVertical: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "space-around",
  },
});

export default memo(Main);
