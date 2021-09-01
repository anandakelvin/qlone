import React, { createContext, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import AssetScreen from "./screens/AssetScreen";
import colors from "./constants/colors";
import VisitEntryScreen from "./screens/VisitEntryScreen";

const Stack = createStackNavigator();

export const AppContext = createContext();
const initialCars = {
  a1s1d2d3d4: {
    brand: "Honda",
    model: "Brio",
    type: "RS",
    year: "2019",
    transmission: "M/T",
    fuel: "Bensin",
    color: "Abu-abu",
    police: "B 1902 WZU",
  },
};
const initialHistories = {
  wekjda123123: {
    carId: "a1s1d2d3d4",
    timestamp: 1630481542651,
    kilometre: 29000,
    note: "Kaca retak",
  },
};
export default function App() {
  const [cars, setCars] = useState(initialCars);
  const [histories, setHistories] = useState(initialHistories);
  return (
    <AppContext.Provider value={{ cars, histories, setCars, setHistories }}>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: { ...DefaultTheme.colors, background: colors.white },
        }}
      >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Asset" component={AssetScreen} />
          <Stack.Screen name="VisitEntry" component={VisitEntryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
