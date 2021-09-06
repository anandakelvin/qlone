import { Entypo, SimpleLineIcons } from "@expo/vector-icons";
import { Formik, useFormik } from "formik";
import React, { useCallback, useContext, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import InputFrame from "../components/InputFrame";
import MyHeader from "../components/MyHeader";
import MyScreen from "../components/MyScreen";
import Subheader from "../components/Subheader";
import LargeButton from "../components/LargeButton";
import { delay } from "../utils";
import { nanoid } from "nanoid/non-secure";
import { AppContext } from "../contexts";
import { CarRecord, CarRecords, RootStackParamList } from "../types";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'VisitEntry'>;

export default ({ route, navigation }: Props) => {
  const initialFormikValues: CarRecord = {
    km: "", note: "", carId: "", timestamp: 0,
  }
  const { setRecords } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: initialFormikValues,
    onSubmit: handleSubmit,
  });

  function handleSubmit(val: CarRecord){
    setLoading(() => true);
    delay().then(() => {
      setRecords((prev: CarRecords) => ({
        ...prev,
        [nanoid()]: {...val},
      }));
      navigation.navigate("Asset", { ...route.params });
    });
  }

  useFocusEffect(useCallback(()=>{
    formik.setFieldValue('timestamp', Date.now())
    formik.setFieldValue('carId', route.params.carId)
  }, []))

  return (
    <MyScreen loading={loading}>
      <Header navigation={navigation} title="Catat Kunjungan" />
      <Subheader />
      <ScrollView style={{ margin: 15 }}>
        <InputFrame label="Kilometer masuk">
          <TextInput
            onChangeText={formik.handleChange("km")}
            onBlur={formik.handleBlur("km")}
            value={formik.values.km}
            style={{ flex: 1, padding: 10 }}
            placeholder="Masukkan kilometer"
            keyboardType="numeric"
          />
        </InputFrame>
        <InputFrame label="Catatan">
          <TextInput
            onChangeText={formik.handleChange("note")}
            onBlur={formik.handleBlur("note")}
            value={formik.values.note}
            style={{ flex: 1, padding: 10 }}
            placeholder="Catatan masuk"
          />
        </InputFrame>
        <View style={{ margin: 10 }} />
        <LargeButton onPressOut={formik.handleSubmit} text="Catat kunjungan" />
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
