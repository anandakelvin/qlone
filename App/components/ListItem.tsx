import React, { ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import colors from "../constants/colors";

type Props = {
  onPressOut?(): void;
  children: ReactNode;
}

export default ({ children, onPressOut}: Props) => {
  return (
    <TouchableOpacity
      style={{
        elevation: 2,
        borderRadius: 15,
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
