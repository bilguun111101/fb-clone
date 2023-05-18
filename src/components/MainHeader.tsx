import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import React from "react";

import {
  FontAwesome,
  FontAwesome5,
  Feather,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

import { Main, Navbar, Notification, Profile, Stream, Users } from "../screens";

const renderScene = SceneMap({
  main: Main,
  users: Users,
  stream: Stream,
  profile: Profile,
  notification: Notification,
  navbar: Navbar,
});

const MainHeader = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "main", title: "home", icon: FontAwesome },
    { key: "users", title: "users", icon: Feather },
    { key: "stream", title: "live-tv", icon: MaterialIcons },
    { key: "profile", title: "user", icon: Feather },
    { key: "notification", title: "notifications-outline", icon: Ionicons },
    { key: "navbar", title: "bars", icon: FontAwesome },
  ]);
  return (
    <View style={{ flex: 1, position: "relative", backgroundColor: "#EAEDED" }}>
      <View style={styles.container}>
        <Pressable>
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: 100, height: 30 }}
          />
        </Pressable>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <Pressable>
            <Feather name="search" size={18} color="black" />
          </Pressable>
          <Pressable>
            <FontAwesome5 name="facebook-messenger" size={18} color="black" />
          </Pressable>
        </View>
      </View>

      <TabView
        onIndexChange={setIndex}
        renderScene={renderScene}
        navigationState={{ index, routes }}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={{
              backgroundColor: "#fff",
              borderBottomWidth: 0.5,
              borderColor: "silver",
              paddingHorizontal: 5,
            }}
            indicatorStyle={{ backgroundColor: "transparent" }}
            renderLabel={({ focused, route }) => {
              const { icon: Icon, title } = route;
              return (
                <Icon
                  name={title}
                  size={20}
                  color={focused ? "blue" : "black"}
                />
              );
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  bottomContainer: {
    width: "100%",
    paddingBottom: 5,
    flexDirection: "row",
    marginBottom: 1,
    justifyContent: "space-between",
  },
});

export default MainHeader;
