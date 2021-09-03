import { Entypo, SimpleLineIcons } from "@expo/vector-icons";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
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
import { AppContext } from "../contexts/AppContext";
import { Picker } from "@react-native-picker/picker";
import { delay } from "../utils/helper";
import { nanoid } from "nanoid/non-secure";

export default ({ route, navigation }) => {
  const { setCars } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      fuel: "",
      police: "",
      brand: "",
      model: route.params.name,
      type: "",
      year: "",
      transmission: "",
      color: "",
    },
    onSubmit: (val) => {
      setLoading(() => true);
      delay().then(() => {
        setCars((prev) => ({
          ...prev,
          [nanoid()]: {
            ...val,
          },
        }));
        navigation.navigate("Home");
      });
    },
  });
  return (
    <MyScreen loading={loading}>
      <Header navigation={navigation} title="Tambahkan mobil" />
      <Subheader />
      <ScrollView style={{ margin: 15 }}>
        <InputFrame label="Model">
          <TextInput
            onChangeText={formik.handleChange("model")}
            onBlur={formik.handleBlur("model")}
            value={formik.values.model}
            style={{ flex: 1, padding: 10 }}
            placeholder="Input model"
          />
        </InputFrame>
        <InputFrame label="Tipe">
          <TextInput
            onChangeText={formik.handleChange("type")}
            onBlur={formik.handleBlur("type")}
            value={formik.values.type}
            style={{ flex: 1, padding: 10 }}
            placeholder="Tipe seri mobil"
          />
        </InputFrame>
        <InputFrame label="Merk">
          <TextInput
            onChangeText={formik.handleChange("brand")}
            onBlur={formik.handleBlur("brand")}
            value={formik.values.brand}
            style={{ flex: 1, padding: 10 }}
            placeholder="Input merk"
          />
        </InputFrame>
        <InputFrame label="Nomor polisi">
          <TextInput
            onChangeText={formik.handleChange("police")}
            onBlur={formik.handleBlur("police")}
            value={formik.values.police}
            style={{ flex: 1, padding: 10 }}
            placeholder="Nomor polisi"
          />
        </InputFrame>
        <InputFrame label="Jenis bahan bakar">
          <TextInput
            onChangeText={formik.handleChange("fuel")}
            onBlur={formik.handleBlur("fuel")}
            value={formik.values.fuel}
            style={{ flex: 1, padding: 10 }}
            placeholder="Jenis bbm"
          />
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
            <Picker.Item label="M/T" value="M/T" />
            <Picker.Item label="A/T" value="A/T" />
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
        <InputFrame label="Warna">
          <TextInput
            onChangeText={formik.handleChange("color")}
            onBlur={formik.handleBlur("color")}
            value={formik.values.color}
            style={{ flex: 1, padding: 10 }}
            placeholder="Input warna"
          />
        </InputFrame>
        <View style={{ margin: 10 }} />
        <LargeButton text="Tambahkan" onPressOut={formik.handleSubmit} />
      </ScrollView>
    </MyScreen>
  );
};

function Header({ navigation, title }) {
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
}
