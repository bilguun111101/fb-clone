import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  Animated,
  RefreshControl,
} from "react-native";
import { memo, useCallback, useState } from "react";
import { StorySection, Post } from "../components";
import { FontAwesome } from "@expo/vector-icons";
import { useHeader } from "../context";
import theme from "../context/theme";

const Main = () => {
  const { Change, remove, Height } = useHeader();
  // const AnimatedHeaderValue = new Animated.Value(0);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const onScroll = useCallback(
    (e: any) => {
      console.log(e.nativeEvent.contentOffset.y);
      // if (!remove && e.nativeEvent.contentOffset.y >= 50) {
      //   Change();
      // } else if (remove && e.nativeEvent.contentOffset.y <= 50) {
      //   Change();
      // }
      // AnimatedHeaderValue.interpolate({
      //   inputRange: [0, 50],
      //   outputRange: ["", ""],
      //   extrapolate: "clamp",
      // });
    },
    [remove, Change, Height]
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        // onScroll={Animated.event([
        //   { nativeEvent: { contentOffset: { y: AnimatedHeaderValue } } },
        // ])}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        scrollEventThrottle={16}
      >
        <View style={styles.headerSearchContent}>
          <View>
            <Pressable style={styles.avatar}>
              <Image
                source={require("../../assets/test.jpg")}
                style={{ width: "100%", height: "100%" }}
              />
            </Pressable>
          </View>
          <View style={styles.searchSection}>
            <TextInput
              placeholder="write something here..."
              style={styles.search}
            />
          </View>
          <View>
            <Pressable>
              <FontAwesome name="file-photo-o" size={24} color="green" />
            </Pressable>
          </View>
        </View>

        <StorySection />
        <View>
          {/* {new Array(20).fill(1).map((el, idx) => {
            return <Post key={idx} />;
          })} */}
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={new Array(20).fill(1)}
            renderItem={(item) => <Post />}
            keyExtractor={(item, index) => `index-${index}`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey.primary,
  },
  headerSearchContent: {
    gap: 10,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 10,
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
  searchSection: {
    flex: 1,
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
  search: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    borderColor: theme.colors.grey.primary,
  },
});

export default memo(Main);
