import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import React from "react";
import theme from "../../context/theme";

const UserCard = () => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.avatarSection}>
        <Image
          style={styles.avatar}
          source={require("../../../assets/test.jpg")}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.username}>Sarnai Sarnai</Text>
        <View style={styles.addRemoveBtnSection}>
          <Pressable style={addRemoveBtn(true)}>
            <Text style={{ ...styles.addRemoveBtnText, color: "white" }}>
              Add friend
            </Text>
          </Pressable>
          <Pressable style={addRemoveBtn(false)}>
            <Text style={{ ...styles.addRemoveBtnText, color: "black" }}>
              Remove
            </Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatarSection: {
    width: 60,
    height: 60,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    gap: 5,
  },
  username: {
    fontWeight: "500",
    fontSize: 13,
  },
  addRemoveBtnSection: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  addRemoveBtn: {
    width: "48%",
    paddingVertical: 4,
    borderRadius: 5,
  },
  addRemoveBtnText: {
    fontWeight: "500",
    fontSize: 13,
    textAlign: "center",
  },
});

const addRemoveBtn = (color: boolean): ViewStyle => ({
  ...styles.addRemoveBtn,
  backgroundColor: color ? theme.colors.blue.primary : theme.colors.grey.button,
});

// const addRemoveBtnText = (color: string): ViewStyle => ({
//   ...styles.addRemoveBtnText,
// });
