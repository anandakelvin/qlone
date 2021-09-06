import { StatusBar } from "expo-status-bar";
import React, { ReactNode } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../constants/colors";
import Spinner from "react-native-loading-spinner-overlay";

type Props = {
  children?: ReactNode;
  loading?: boolean;
  loadingLabel?: string;
}

export default function ({ children, loading, loadingLabel }: Props) {

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar />
          <Spinner
            textContent={loadingLabel}
            visible={loading}
            color={colors.black}
          />
          {children}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    borderColor: colors.black,
  },
});
