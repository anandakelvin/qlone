import React from "react";
import { View } from "react-native";

export default ({ children }) => {
  return (
    <View
      style={{
        padding: 20,
        paddingTop: 15,
        backgroundColor: colors.header,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        // margin: -10,
        // borderWidth: 2,
      }}
    >
      {children}
    </View>
  );
};
