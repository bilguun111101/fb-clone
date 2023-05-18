import { StyleSheet, Text, View } from "react-native";
import { memo } from "react";

const Users = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Users</Text>
    </View>
  );
};

export default memo(Users);

const styles = StyleSheet.create({});
