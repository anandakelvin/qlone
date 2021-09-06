import React, { ReactNode } from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../constants/colors";

export default function InputFrame({ label, children }: {label: string, children: ReactNode}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    position: "absolute",
    color: colors.black,
    paddingHorizontal: 3,
    top: -12,
    left: 30,
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
