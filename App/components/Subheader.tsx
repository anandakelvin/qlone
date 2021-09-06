import React, { ReactNode } from "react";
import { View } from "react-native";
import colors from "../constants/colors";

export default ({ children }: {children?: ReactNode}) => {
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
