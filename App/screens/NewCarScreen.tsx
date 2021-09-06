import { Entypo, SimpleLineIcons } from "@expo/vector-icons";
import { useFormik } from "formik";
import React, { useCallback, useContext, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import InputFrame from "../components/InputFrame";
import LargeButton from "../components/LargeButton";
import MyHeader from "../components/MyHeader";
import MyScreen from "../components/MyScreen";
import Subheader from "../components/Subheader";
import { Picker } from "@react-native-picker/picker";
import { delay, validateCar } from "../utils";
import { nanoid } from "nanoid/non-secure";
import { AppContext } from "../contexts";
import { Car, Cars, FuelType, RootStackParamList, Transmission } from "../types";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'NewCar'>;

export default ({ route, navigation }: Props) => {
  const initialFormikValues: Car = {
    fuelType: "",
    police: "",
    name: route.params ? route.params.name : '',
    year: "",
    transmission: "",
  }
  const { setCars } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: initialFormikValues,
    onSubmit: handleSubmit,
    validate: validateCar
  });


  function handleSubmit(val: Car){
    setLoading(() => true);
    delay().then(() => {
      setCars((prev: Cars) => ({
        ...prev,
        [nanoid()]: {...val},
      }));
      navigation.navigate("Home");
    });
  }

  return (
    <MyScreen loading={loading}>
      <Header navigation={navigation} title="Tambahkan mobil" />
      <Subheader />
      <ScrollView style={{ margin: 15 }}>
        <InputFrame label="Nama*">
          <TextInput
            onChangeText={formik.handleChange("name")}
            onBlur={formik.handleBlur("name")}
            value={formik.values.name}
            style={{ flex: 1, padding: 10 }}
            placeholder="Input nama"
          />
        </InputFrame>
        <InputFrame label="Nomor polisi*">
          <TextInput
            onChangeText={formik.handleChange("police")}
            onBlur={formik.handleBlur("police")}
            value={formik.values.police}
            style={{ flex: 1, padding: 10 }}
            placeholder="Nomor polisi"
          />
        </InputFrame>
        <InputFrame label="Jenis bahan bakar">
          <Picker
            selectedValue={formik.values.fuelType}
            onValueChange={(itemValue, itemIndex) =>
              formik.setFieldValue("fuelType", itemValue)
            }
            style={{ borderWidth: 5, flex: 1, marginVertical: 10 }}
          >
            {!formik.values.fuelType && (
              <Picker.Item label="Pilih jenis bbm" value="" />
            )}
            <Picker.Item label="Bensin" value={FuelType.Gasoline} />
            <Picker.Item label="Solar" value={FuelType.Diesel} />
          </Picker>
        </InputFrame>
        <InputFrame label="Jenis transmisi">
          <Picker
            selectedValue={formik.values.transmission}
            onValueChange={(itemValue, itemIndex) =>
              formik.setFieldValue("transmission", itemValue)
            }
            style={{ borderWidth: 5, flex: 1, marginVertical: 10 }}
          >
            {!formik.values.transmission && (
              <Picker.Item label="Pilih transmisi" value="" />
            )}
            <Picker.Item label="M/T" value={Transmission.MT} />
            <Picker.Item label="A/T" value={Transmission.AT} />
          </Picker>
        </InputFrame>
        <InputFrame label="Tahun produksi">
          <TextInput
            onChangeText={formik.handleChange("year")}
            onBlur={formik.handleBlur("year")}
            value={formik.values.year}
            style={{ flex: 1, padding: 10 }}
            placeholder="Tahun produksi"
          />
        </InputFrame>
        <View style={{ margin: 10 }} />
        <LargeButton onPressOut={formik.handleSubmit} text="Tambahkan"/>
      </ScrollView>
    </MyScreen>
  );
};

function Header({ navigation, title }) {
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
}
