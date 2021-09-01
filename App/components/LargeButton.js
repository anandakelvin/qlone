import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default ({ text, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.black,
        borderRadius: 40,
        padding: 15,
      }}
      {...props}
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
