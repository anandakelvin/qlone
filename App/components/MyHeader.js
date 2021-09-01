import React from "react";
import { View } from "react-native";

const MyHeader = ({ children }) => {
  return <View style={styles}>{children}</View>;
};
const Rowstyle = ({ children }) => {
  return (
    <View style={{ ...styles, justifyContent: "space-between" }}>
      {children}
    </View>
  );
};

const styles = {
  flexDirection: "row",
  alignItems: "center",
  padding: 15,
  paddingTop: 50,
  paddingBottom: 5,
  backgroundColor: colors.header,
};
MyHeader.RowStyle = Rowstyle;

export default MyHeader;
