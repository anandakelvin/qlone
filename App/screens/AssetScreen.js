import { Entypo, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LargeButton from "../components/LargeButton";
import ListItem from "../components/ListItem";
import MyHeader from "../components/MyHeader";
import MyScreen from "../components/MyScreen";
import SimpleButton from "../components/SimpleButton";
import Subheader from "../components/Subheader";
import colors from "../constants/colors";
import { useFetchCar, useFetchHistories } from "../utils/hooks";

export default ({ route, navigation }) => {
  const { carId } = route.params;
  const [car, loading] = useFetchCar(carId);
  const [carsHistories, loadingHistories] = useFetchHistories();

  return (
    <MyScreen loading={loading || loadingHistories}>
      <Header navigation={navigation} title={car && car.police} />
      <Subheader />
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          marginVertical: 15,
          textAlign: "center",
        }}
      >
        {car && `${car.brand} ${car.model} ${car.type} `}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginHorizontal: 50,
        }}
      >
        {car && (
          <>
            <SimpleButton text={car.year} />
            <SimpleButton text={car.transmission} />
            <SimpleButton text={car.fuel} />
            <SimpleButton text={car.color} />
          </>
        )}
      </View>
      <View
        style={{
          marginTop: 30,
          borderTopWidth: 15,
          borderBottomWidth: 15,
          borderColor: colors.headerSearch,
          padding: 15,
        }}
      >
        {!loading && (
          <LargeButton
            onPressOut={() => navigation.navigate("VisitEntry", { carId })}
            text="Catat Kunjungan"
          />
        )}
      </View>
      {!loading &&
        carsHistories &&
        Object.entries(carsHistories).filter(
          (el) => el[1].carId === carId
        )[0] && (
          <View style={{ flex: 1 }}>
            <FlatList
              style={{ padding: 10 }}
              contentContainerStyle={{ paddingBottom: 20 }}
              data={Object.entries(carsHistories).filter(
                (el) => el[1].carId === carId
              )}
              keyExtractor={(item) => item[0]}
              renderItem={({ item }) => {
                const history = item[1];
                const historyId = item[0];
                return (
                  <ListItem
                  // onPressOut={() => navigation.navigate("Asset", { carId })}
                  >
                    <FontAwesome name="car" size={35} />
                    <View style={{ marginLeft: 15 }}>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                          marginBottom: 5,
                        }}
                      >
                        {new Date(history.timestamp).toDateString()}
                      </Text>
                      <Text
                        style={{ color: colors.grey }}
                      >{`KM ${history.kilometre} - Note: ${history.note}`}</Text>
                    </View>
                  </ListItem>
                );
              }}
            />
          </View>
        )}
    </MyScreen>
  );
};

const Header = ({ navigation, title }) => {
  return (
    <MyHeader.RowStyle>
      <TouchableOpacity onPressOut={() => navigation.goBack()}>
        <Entypo name="chevron-left" size={40} />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
      <TouchableOpacity>
        <SimpleLineIcons name="options-vertical" size={25} />
      </TouchableOpacity>
    </MyHeader.RowStyle>
  );
};
