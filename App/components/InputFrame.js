import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../constants/colors";

export default function InputFrame({ label, children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    position: "absolute",
    color: colors.black,
    paddingHorizontal: 3,
    top: -12,
    left: 40,
    backgroundColor: colors.white,
  },
  container: {
    marginVertical: 6,
    borderWidth: 1,
    borderColor: colors.black,
    padding: 5,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    borderRadius: 5,
  },
});
