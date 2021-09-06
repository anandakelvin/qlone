import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import colors from "../constants/colors";

const MyHeader = ({ children }: {children: ReactNode}) => {
  return <View style={styles.container}>{children}</View>;
};
const Rowstyle = ({ children }: {children: ReactNode}) => {
  return (
    <View style={{ ...styles.container, justifyContent: "space-between" }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
  flexDirection: "row",
  alignItems: "center",
  padding: 15,
  paddingTop: 50,
  paddingBottom: 5,
  backgroundColor: colors.header,}
});
MyHeader.RowStyle = Rowstyle;

export default MyHeader;
