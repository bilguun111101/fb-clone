import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Animated,
  Pressable,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useRef,
  useState,
} from "react";

import { useNavigation } from "@react-navigation/native";

import {
  FontAwesome,
  FontAwesome5,
  Feather,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

import Main from "../screens/Main";
// import { Navbar, Notification, Profile, Stream, Users } from "../screens";
import { useHeader } from "../context";
import theme from "../context/theme";

const takeWidth = () => {
  let width = Dimensions.get("window").width;
  return width / 6;
};

const buttons = [
  { key: "Main", title: "home", icon: FontAwesome, value: 0 },
  { key: "Users", title: "users", icon: Feather, value: 1 },
  { key: "Stream", title: "live-tv", icon: MaterialIcons, value: 2 },
  { key: "Profile", title: "user", icon: Feather, value: 3 },
  {
    key: "Notification",
    title: "notifications-outline",
    icon: Ionicons,
    value: 4,
  },
  { key: "Navbar", title: "bars", icon: FontAwesome, value: 5 },
];

// const renderScene = SceneMap({
//   main: Main,
//   users: Users,
//   stream: Stream,
//   profile: Profile,
//   notification: Notification,
//   navbar: Navbar,
// });

const MainHeader: FC<PropsWithChildren> = ({ children }) => {
  // const layout = useWindowDimensions();
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  const [focused, setFocused] = useState<number>(0);
  const navigation = useNavigation<any>();
  const [nameOfScreen, setNameOfScreen] = useState<string>("Main");
  // const [index, setIndex] = React.useState(0);
  // const [routes] = React.useState([
  //   { key: "main", title: "home", icon: FontAwesome },
  //   { key: "users", title: "users", icon: Feather },
  //   { key: "stream", title: "live-tv", icon: MaterialIcons },
  //   { key: "profile", title: "user", icon: Feather },
  //   { key: "notification", title: "notifications-outline", icon: Ionicons },
  //   { key: "navbar", title: "bars", icon: FontAwesome },
  // ]);

  const layoutBtnOnSubmit = useCallback(
    (num: number, screenName: string) => {
      Animated.timing(tabOffsetValue, {
        toValue: takeWidth() * num,
        duration: 100,
        useNativeDriver: true,
      }).start();
      setFocused(num);
      setNameOfScreen(screenName);
      navigation.navigate(screenName);
    },
    [focused, navigation, nameOfScreen]
  );

  const { Height } = useHeader();

  return (
    <View style={styles.mainContainer}>
      {/* <ScrollView onScroll={(e) => console.log(e.nativeEvent.contentOffset.y)}> */}
      <Animated.View style={[styles.container, { height: Height() }]}>
        <Pressable>
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: 100, height: 30 }}
          />
        </Pressable>
        <View style={styles.headerBtnsSection}>
          <Pressable>
            <Feather name="search" size={18} color="black" />
          </Pressable>
          <Pressable>
            <FontAwesome5 name="facebook-messenger" size={18} color="black" />
          </Pressable>
        </View>
      </Animated.View>
      {/* <TabView
        onIndexChange={setIndex}
        renderScene={renderScene}
        navigationState={{ index, routes }}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
          {...props}
          style={styles.tabbar}
          indicatorStyle={{ backgroundColor: "blue" }}
          renderLabel={({ focused, route }) => {
            const { icon: Icon, title } = route;
            return (
              <Icon
              name={title}
              size={24}
              color={focused ? "blue" : "black"}
              />
              );
            }}
            />
            )}
          /> */}
      <View style={styles.layout}>
        <View style={styles.layoutBtnsSection}>
          {buttons.map((el, idx) => (
            <Pressable
              key={idx}
              onPress={() => layoutBtnOnSubmit(el.value, el.key)}
              style={styles.layoutBtn}
            >
              {
                <el.icon
                  name={el.title}
                  size={20}
                  color={
                    el.value === focused ? theme.colors.blue.primary : "black"
                  }
                />
              }
            </Pressable>
          ))}
        </View>
        <Animated.View
          style={{
            width: takeWidth(),
            height: 2,
            transform: [{ translateX: tabOffsetValue }],
            ...styles.animationTab,
          }}
        />
      </View>

      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: "relative",
    backgroundColor: theme.colors.grey.primary,
  },
  container: {
    width: "100%",
    // paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingRight: 10,
    // height: 50,
  },
  bottomContainer: {
    width: "100%",
    paddingBottom: 5,
    flexDirection: "row",
    marginBottom: 1,
    justifyContent: "space-between",
  },
  headerBtnsSection: { flexDirection: "row", gap: 5, alignItems: "center" },
  tabbar: {
    backgroundColor: "#fff",
    borderBottomWidth: 0.5,
    borderColor: theme.colors.grey.primary,
  },

  animationTab: {
    backgroundColor: theme.colors.blue.primary,
    position: "absolute",
    borderRadius: 40,
    bottom: 0,
  },

  layout: {
    height: 40,
    zIndex: 100,
    marginBottom: 0.5,
    position: "relative",
    backgroundColor: "#fff",
    borderBottomColor: "black",
    width: Dimensions.get("window").width,
  },
  layoutBtnsSection: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  layoutBtn: {
    width: takeWidth(),
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MainHeader;
