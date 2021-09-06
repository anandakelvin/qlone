import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

export default ({ text, backgroundColor, onPressOut, ...props }: {onPressOut?(): void , text: string; backgroundColor?: string}) => {
  return (
    <TouchableOpacity
      onPressOut = {onPressOut}
      style={{
        backgroundColor: backgroundColor || colors.header,
        padding: 15,
        paddingVertical: 8,
        borderRadius: 10,
        elevation: 3,
      }}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
