import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import colors from "../constants/colors";

type Props = {
  children: ReactNode;
  spacedBetween?: boolean;
}

const MyHeader = ({ children, spacedBetween }: Props) => {
  return (
    <View style={[styles.container, spacedBetween && {justifyContent: "space-between"}]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
  flexDirection: "row",
  alignItems: "center",
  padding: 15,
  paddingTop: 50,
  paddingBottom: 10,
  backgroundColor: colors.header,}
});

export default MyHeader;
