import { StatusBar } from "expo-status-bar";
import React, { ReactNode, useCallback } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../constants/colors";
import Spinner from "react-native-loading-spinner-overlay";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

function MyScreen({ children, title, loading, loadingLabel, ...props }: 
  {children?: ReactNode, title?: string, loading?: boolean, loadingLabel?: string}) {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        title,
      });
    }, [])
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      //   keyboardVerticalOffset={insets.top}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
        <View style={styles.screen} {...props}>
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
function ScrollV({ children, ...props }) {
  return (
    <ScrollView style={styles.scrollView} {...props}>
      {children}
    </ScrollView>
  );
}

MyScreen.ScrollView = ScrollV;
export default MyScreen;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 0,
    // borderWidth: 5,
    borderColor: colors.black,
  },
  scrollView: {
    borderColor: colors.black,
    borderWidth: 0,
    paddingVertical: 5,
  },
});
