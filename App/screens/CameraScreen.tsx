import React, { useState, useEffect, useCallback } from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import MyScreen from "../components/MyScreen";
import { useIsFocused } from "@react-navigation/native";
import Subheader from "../components/Subheader";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, 'Camera'>;

export default ({ route, navigation }: Props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    navigation.navigate("NewCar", { name: data });
  };

  return (
    <MyScreen>
      {
        hasPermission === null ? 
          <SafeAreaView style={styles.centered}>
            <View style={{height: 50}} />
            <Text style={styles.text}>Requesting for camera permission</Text>
            <View style={{height: 50}} />
            <Text style={styles.text}>Please select allow!</Text>
          </SafeAreaView> :
        hasPermission === false ? 
          <SafeAreaView style={styles.centered}>
            <View style={{height: 50}} />
            <Text style={styles.text}>No access to camera</Text>
          </SafeAreaView> :
        isFocused && 
          <BarCodeScanner
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
            onBarCodeScanned={handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
      }
    </MyScreen>
  );
}

const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center', alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})