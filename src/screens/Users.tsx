import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { memo, useCallback, useState } from "react";
import UserCard from "../components/Users/user-card";
import { FlatList } from "react-native-gesture-handler";
import theme from "../context/theme";

const Users = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Friends</Text>
          <Pressable style={styles.searchBtn}>
            <Feather name="search" size={15} color="black" />
          </Pressable>
        </View>
        <View style={styles.requestBorder}>
          <View style={styles.requestSection}>
            <Pressable style={styles.headerBtn}>
              <Text style={styles.headerBtnText}>Request</Text>
            </Pressable>
            <Pressable style={styles.headerBtn}>
              <Text style={styles.headerBtnText}>Your Friends</Text>
            </Pressable>
          </View>
        </View>
      </>

      <>
        <Text style={styles.suggestTitle}>People you may know</Text>
        <>
          {/* {new Array(20).fill(false).map((el, idx) => (
            <UserCard key={idx} />
          ))} */}
          <FlatList
            data={new Array(20).fill(false)}
            renderItem={(item) => <UserCard />}
            keyExtractor={(item, index) => `index-${index}`}
          />
        </>
      </>
    </ScrollView>
  );
};

export default memo(Users);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  headerSection: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "space-between",
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
  requestBorder: {
    width: "100%",
    backgroundColor: theme.colors.grey.primary,
    paddingBottom: 1,
  },
  requestSection: {
    gap: 5,
    paddingVertical: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerBtn: {
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: theme.colors.grey.primary,
  },
  headerBtnText: {
    fontSize: 11,
    fontWeight: "600",
  },
  suggestTitle: {
    fontSize: 15,
    fontWeight: "800",
    marginVertical: 10,
  },
});
