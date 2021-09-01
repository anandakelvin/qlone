import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

export default ({ text, backgroundColor, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: backgroundColor || colors.header,
        padding: 15,
        paddingVertical: 8,
        borderRadius: 10,
        elevation: 3,
      }}
      {...props}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
