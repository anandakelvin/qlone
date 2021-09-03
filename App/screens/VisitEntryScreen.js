import { Entypo, SimpleLineIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import React, { useContext, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import InputFrame from "../components/InputFrame";
import MyHeader from "../components/MyHeader";
import MyScreen from "../components/MyScreen";
import Subheader from "../components/Subheader";
import LargeButton from "../components/LargeButton";
import { delay } from "../utils/helper";
import { nanoid } from "nanoid/non-secure";
import { AppContext } from "../contexts/AppContext";

export default ({ route, navigation }) => {
  const { setHistories } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const { carId } = route.params;

  return (
    <MyScreen loading={loading}>
      <Header navigation={navigation} title="Catat Kunjungan" />
      <Subheader />
      <Formik
        initialValues={{ kilometre: "", note: "" }}
        onSubmit={({ kilometre, note }) => {
          setLoading(() => true);
          delay().then(() => {
            setHistories((prev) => ({
              ...prev,
              [nanoid()]: {
                carId,
                timestamp: Date.now(),
                kilometre: Number(kilometre),
                note,
              },
            }));
            navigation.navigate("Asset", { ...route.params });
          });
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={{ margin: 15 }}>
            <InputFrame label="Kilometer masuk">
              <TextInput
                onChangeText={handleChange("kilometre")}
                onBlur={handleBlur("kilometre")}
                value={values.kilometre}
                style={{ flex: 1, padding: 10 }}
                placeholder="Masukkan kilometer"
                keyboardType="numeric"
              />
            </InputFrame>
            <InputFrame label="Catatan">
              <TextInput
                onChangeText={handleChange("note")}
                onBlur={handleBlur("note")}
                value={values.note}
                style={{ flex: 1, padding: 10 }}
                placeholder="Catatan masuk"
              />
            </InputFrame>
            <View style={{ margin: 10 }} />
            <LargeButton text="Catat kunjungan" onPressOut={handleSubmit} />
          </View>
        )}
      </Formik>
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
