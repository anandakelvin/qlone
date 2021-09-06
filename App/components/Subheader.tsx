import React, { ReactNode } from "react";
import { View } from "react-native";
import colors from "../constants/colors";

export default ({ children }: {children?: ReactNode}) => {
  return (
    <View
      style={{
        padding: 20,
        paddingTop: 10,
        backgroundColor: colors.header,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
      }}
    >
      {children}
    </View>
  );
};
