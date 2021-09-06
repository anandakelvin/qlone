import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

export default ({ text, onPressOut, ...props }: {text: string, onPressOut(): void}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.black,
        borderRadius: 40,
        padding: 15,
      }}
      onPressOut={onPressOut}
    >
      <Text
        style={{
          color: colors.white,
          fontSize: 20,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
