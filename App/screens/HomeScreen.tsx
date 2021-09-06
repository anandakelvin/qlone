import React from "react";
import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import MyScreen from "../components/MyScreen";
import {
  Ionicons,
  SimpleLineIcons,
  Feather,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import colors from "../constants/colors";
import MyHeader from "../components/MyHeader";
import Subheader from "../components/Subheader";
import SimpleButton from "../components/SimpleButton";
import { useFetchCars } from "../hooks";
import ListItem from "../components/ListItem";

export default ({ navigation }) => {
  const [cars, loading] = useFetchCars();

  return (
    <MyScreen loading={loading}>
      <Header />
      <Subheader>
        <View style={styles.subHeaderContainer}>
          <Feather name="search" size={25} />
          <TextInput
            style={{ flex: 1, marginHorizontal: 15 }}
            placeholder="Merk, model, tipe, no polisi"
          />
          <TouchableOpacity onPressOut={() => navigation.navigate("Camera")}>
            <AntDesign name="qrcode" size={25} />
          </TouchableOpacity>
        </View>
      </Subheader>
      <View style={{ flexDirection: "row", margin: 15, marginBottom: 0 }}>
        <SimpleButton text="Semua" />
      </View>

      {loading ? (
        <></>
      ) : cars && Object.entries(cars)[0] ? (
        <View style={{ flex: 1 }}>
          <FlatList
            style={{ padding: 10 }}
            contentContainerStyle={{ paddingBottom: 20 }}
            data={Object.entries(cars)}
            keyExtractor={(item) => item[0]}
            renderItem={({ item }) => {
              const car = item[1];
              const carId = item[0];
              return (
                <ListItem
                  onPressOut={() => navigation.navigate("Asset", { carId })}
                >
                  <FontAwesome name="car" size={35} />
                  <View style={{ marginLeft: 15 }}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 16,
                        marginBottom: 5,
                      }}
                    >{`${car.name}`}</Text>
                    <Text style={{ color: colors.grey }}>{car.police}</Text>
                  </View>
                </ListItem>
              );
            }}
          />
        </View>
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 15 }}>
            Anda tidak memiliki aset
          </Text>
          <SimpleButton onPressOut={() => navigation.navigate("Asset")} text="Tambahkan" />
        </View>
      )}
    </MyScreen>
  );
};

const Header = () => (
  <MyHeader>
    <Text style={{ fontSize: 25, fontWeight: "bold" }}>Hi, Kelvin Ananda</Text>
    <SimpleLineIcons
      style={{ marginLeft: "auto", marginRight: 20 }}
      name="bell"
      size={25}
    />
    <Ionicons name="person-circle-outline" size={35} />
  </MyHeader>
);

const styles = StyleSheet.create({
  subHeaderContainer: {
    padding: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.headerSearch,
    opacity: 50,
    borderRadius: 15,
  }
})