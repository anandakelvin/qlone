import React from "react";
import { TouchableOpacity } from "react-native";
import colors from "../constants/colors";

export default ({ children, ...props }) => {
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
        marginVertical: 5,
      }}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};
