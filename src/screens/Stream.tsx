import { memo } from "react";
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
} from "react-native";

const buttons = ["For you", "Live", "Gaming", "Reels", "Following"];

const Stream = () => {
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
          {buttons.map((el, idx) => {
            return (
              <Pressable>
                <Text></Text>
              </Pressable>
            );
          })}
        </View>
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
    width: "100%",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    overflow: "scroll",
    gap: 5,
  },
});

const addRemoveBtn = (color: boolean): ViewStyle => ({
  backgroundColor: color ? theme.colors.blue.primary : theme.colors.grey.button,
});
