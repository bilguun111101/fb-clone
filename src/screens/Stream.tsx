import { memo, useCallback, useEffect, useMemo, useState } from "react";
import theme from "../context/theme";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ViewStyle,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { Following, ForYou, Gaming, Live, Reels } from "../components";

const renderScene = SceneMap({
  for_you: ForYou,
  live: Live,
  gaming: Gaming,
  reels: Reels,
  following: Following,
});

const Stream = () => {
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();
  const [routes] = useState([
    { key: "main", title: "home" },
    { key: "users", title: "users" },
    { key: "stream", title: "live-tv" },
    { key: "profile", title: "user", icon: Feather },
    { key: "notification", title: "notifications-outline" },
    { key: "navbar", title: "bars" },
  ]);
  // const [focused, setFocused] = useState<boolean[]>(() => {
  //   let array = new Array(buttons.length).fill(false);
  //   array[0] = true;
  //   return array;
  // });
  // const onSubmitBtn = useCallback(
  //   (idx: number) => {
  //     setFocused((old) =>
  //       old.map((el, index) => (idx === index ? true : false))
  //     );
  //   },
  //   [focused]
  // );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Watch</Text>
          <View style={styles.headerBtnSection}>
            <Pressable style={styles.searchBtn}>
              <FontAwesome name="user" size={15} color="black" />
            </Pressable>
            <Pressable style={styles.searchBtn}>
              <Feather name="search" size={15} color="black" />
            </Pressable>
          </View>
        </View>

        <View style={styles.typeOfWhatButtonsSection}>
          {/* {buttons.map((el, idx) => {
            const { title } = el;
            return (
              <Pressable
                style={typeOfWhatButton(focused[idx])}
                onPress={() => onSubmitBtn(idx)}
                key={idx}
              >
                <Text
                  style={{
                    ...styles.typeOfWhatButtonText,
                    color: focused[idx] ? theme.colors.blue.primary : "black",
                  }}
                >
                  {title}
                </Text>
              </Pressable>
            );
          })} */}
          <TabView
            onIndexChange={setIndex}
            renderScene={renderScene}
            navigationState={{ index, routes }}
            initialLayout={{ width: layout.width }}
            renderTabBar={(props) => (
              <TabBar
                {...props}
                // style={styles.tabbar}
                indicatorStyle={{ backgroundColor: theme.colors.blue.primary }}
                renderLabel={({ focused, route }) => {
                  // const { icon: Icon, title } = route;
                  // return (
                  //   <Icon
                  //     name={title}
                  //     size={24}
                  //     color={focused ? theme. : "black"}
                  //   />
                  // );
                  return <View></View>;
                }}
              />
            )}
          />
        </View>

        {/* <TabView
        /> */}
      </View>
    </ScrollView>
  );
};

export default memo(Stream);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey.primary,
  },
  headerContainer: {
    backgroundColor: "#fff",
  },
  headerSection: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    fontWeight: "500",
    fontSize: 20,
  },
  searchBtn: {
    width: 25,
    height: 25,
    borderRadius: 100,
    flexDirection: "row",
    backgroundColor: theme.colors.grey.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  headerBtnSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  typeOfWhatButtonsSection: {
    // paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    overflow: "scroll",
    width: "100%",
    // padding: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 10,
    marginBottom: 0.1,
  },
  typeOfWhatButtonText: {
    fontWeight: "600",
    fontSize: 10,
  },
});

const typeOfWhatButton = (color: boolean): ViewStyle => ({
  // backgroundColor: color ? theme.colors.blue.primary : "#fff",
  paddingHorizontal: 7,
  paddingVertical: 3,
  borderRadius: 5,
});
