import React, { ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import colors from "../constants/colors";

export default ({ children, onPressOut, ...props }: {onPressOut?(): void, children: ReactNode}) => {
  return (
    <TouchableOpacity
      style={{
        elevation: 5,
        borderRadius: 5,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        borderColor: colors.lightGrey,
        backgroundColor: colors.white,
        borderWidth: 1,
        margin: 7,
        marginBottom: 7,
      }}
      onPressOut={onPressOut}
    >
      {children}
    </TouchableOpacity>
  );
};
