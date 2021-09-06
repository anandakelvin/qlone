import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import AssetScreen from "./screens/AssetScreen";
import colors from "./constants/colors";
import VisitEntryScreen from "./screens/VisitEntryScreen";
import NewCarScreen from "./screens/NewCarScreen";
import CameraScreen from "./screens/CameraScreen";
import { AppContext } from "./contexts";
import { CarRecords, Cars, FuelType, RootStackParamList, Transmission } from "./types";

const Stack = createStackNavigator<RootStackParamList>();

const initialCars = {
  a1s1d2d3d4: {
    name: 'Honda Brio RS',
    year: "2019",
    transmission: Transmission.MT,
    fuelType: FuelType.Gasoline,
    police: "B 1902 WZU",
  },
};
const initialRecords = {
  wekjda123123: {
    carId: "a1s1d2d3d4",
    timestamp: 1630481542651,
    km: '29000',
    note: "Kaca retak",
  },
};

export default function App() {
  const [cars, setCars] = useState<Cars>(initialCars);
  const [records, setRecords] = useState<CarRecords>(initialRecords);
  return (
    <AppContext.Provider value={{ cars, records, setCars, setRecords }}>
      <NavigationContainer
        theme={{
          ...DarkTheme,
          colors: { ...DarkTheme.colors, background: colors.white },
        }}
      >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Camera" component={CameraScreen} />
          <Stack.Screen name="NewCar" component={NewCarScreen} />
          <Stack.Screen name="Asset" component={AssetScreen} />
          <Stack.Screen name="VisitEntry" component={VisitEntryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}