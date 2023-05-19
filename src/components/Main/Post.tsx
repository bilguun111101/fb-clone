import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import React from "react";
import theme from "../../context/theme";

const Post = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.avatarSection}>
          <Image
            source={require("../../../assets/test.jpg")}
            style={styles.avatar}
          />
        </Pressable>
        <View>
          <Pressable>
            <Text style={styles.username}>Raj__2255</Text>
          </Pressable>
          <Text style={styles.postText}>One of the most popular</Text>
        </View>
        <View style={styles.postBtnsSection}>
          <Pressable>
            <AntDesign name="close" size={18} color="black" />
          </Pressable>
        </View>
      </View>

      <View style={styles.postImageSection}>
        <Image
          source={require("../../../assets/test.jpg")}
          style={styles.postImage}
        />
      </View>

      <View style={styles.amountOfAccessSection}>
        <View style={styles.likeSection}>
          <AntDesign name="like1" size={20} color="black" />
          <Text style={styles.likeText}>pari roy and 453 others</Text>
        </View>

        <Pressable>
          <Text style={styles.likeText}>251 comments</Text>
        </Pressable>
      </View>

      <View style={styles.likeCommentSendSection}>
        <Pressable style={styles.likeCommentSendBtnsSection}>
          <AntDesign name="like1" size={23} color="grey" />
          <Text style={styles.likeCommentSendBtnsText}>Like</Text>
        </Pressable>

        <Pressable style={styles.likeCommentSendBtnsSection}>
          <EvilIcons name="comment" size={23} color="grey" />
          <Text style={styles.likeCommentSendBtnsText}>Comment</Text>
        </Pressable>

        <Pressable style={styles.likeCommentSendBtnsSection}>
          <AntDesign name="sharealt" size={23} color="grey" />
          <Text style={styles.likeCommentSendBtnsText}>Share</Text>
        </Pressable>
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
  postImageSection: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "black",
  },
  postImage: {
    width: "100%",
    height: 200,
    backgroundColor: "black",
  },
  avatarSection: {
    width: 35,
    height: 35,
    borderRadius: 100,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: { width: "100%", height: "100%" },
  username: { fontWeight: "500", fontSize: 11 },
  postText: { fontWeight: "300", fontSize: 9 },
  postBtnsSection: {
    flexDirection: "row",
    gap: 5,
    position: "absolute",
    right: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  amountOfAccessSection: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.grey.primary,
    justifyContent: "space-between",
  },
  likeSection: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  likeText: { fontWeight: "500", fontSize: 12 },
  likeCommentSendSection: {
    width: "100%",
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  likeCommentSendBtnsSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  likeCommentSendBtnsText: {
    color: "grey",
    fontSize: 12,
    fontWeight: "400",
  },
});
