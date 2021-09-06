import { Entypo, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
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
import { CarRecord, RootStackParamList } from "../types";
import { useFetchCar, useFetchHistories } from "../hooks";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Asset'>;

export default ({ route, navigation }: Props) => {
  const { carId } = route.params;
  const [car, loading] = useFetchCar(carId);
  const [records, loadingRecords] = useFetchHistories();

  return (
    <MyScreen loading={loading || loadingRecords}>
      <Header navigation={navigation} title={car && car.police} />
      <Subheader />
      <Text style={styles.carName}>
        {car && car.name}
      </Text>
      {car && (
        <View style={styles.infoTags}>
          <>
            {car.year && <SimpleButton text={car.year} />}
            {car.transmission && <SimpleButton text={car.transmission} />}
            {car.fuelType && <SimpleButton text={car.fuelType} />}
          </>
        </View>
      )}
      <View style={styles.burgerBun} >
      {!loading && (
        <LargeButton
          onPressOut={() => navigation.navigate("VisitEntry", { carId })}
          text="Catat Kunjungan"
        />
      )}
      </View>
      {
        records &&
        Object.values(records).some(
          (el: CarRecord) => el.carId === carId
        ) && (
          <View style={{ flex: 1 }}>
            <FlatList
              style={{ padding: 10 }}
              contentContainerStyle={{ paddingBottom: 20 }}
              data={Object.entries(records).filter(
                (el: [string, CarRecord]) => el[1].carId === carId
              )}
              keyExtractor={(item) => item[0]}
              renderItem={({ item }) => {
                const record: CarRecord = item[1];
                const recordId: string = item[0];
                return (
                  <ListItem>
                    <FontAwesome name="car" size={35} />
                    <View style={{ marginLeft: 15 }}>
                      <Text style={styles.listItemDate}>
                        {new Date(record.timestamp).toDateString()}
                      </Text>
                      {record.km ? 
                        <Text style={{ color: colors.grey }}>
                          {`KM ${record.km}${record.note && ' - Note: '+record.note}`}
                        </Text> : <></>
                      }
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
    <MyHeader spacedBetween={true}>
      <TouchableOpacity onPressOut={() => navigation.goBack()}>
        <Entypo name="chevron-left" size={40} />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
      <TouchableOpacity>
        <SimpleLineIcons name="options-vertical" size={25} />
      </TouchableOpacity>
    </MyHeader>
  );
};

const styles = StyleSheet.create({
  infoTags: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 50,
  },
  burgerBun: {
    marginTop: 30,
    borderTopWidth: 15,
    borderBottomWidth: 15,
    borderColor: colors.headerSearch,
    padding: 15,
  },
  carName: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
  },
  listItemDate: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
})