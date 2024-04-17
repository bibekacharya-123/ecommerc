import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const OfferPage = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const addToCart = () => {
    navigation.navigate('Cart');
  };

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#00CED1",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: "white",
            borderRadius: 3,
            height: 38,
            flex: 1,
          }}
        >
          <AntDesign
            style={{ paddingLeft: 10 }}
            name="search1"
            size={24}
            color="black"
          />
          <TextInput
            style={{ fontSize: 18 }}
            placeholder="search stitches 24"
          />
        </Pressable>
        <Feather name="mic" size={24} color="black" />
      </View>
      <View style={{ flex: 1, marginTop: 40 }}>
        <Image
          source={{ uri: route.params.data.image }}
          style={{ width: "80%", height: 300 }}
        />
      </View>
      <Text style={{ fontSize: 30, marginLeft: 20 }}>
        {route.params.data.name}
      </Text>
      <View
        style={{
          backgroundColor: "red",
          height: 30,
          justifyContent: "center",
          width: 100,
          margin: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ fontSize: 20, marginLeft: 20 }}>
          {" "}
          up to{route.params.data.offer}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "yellow",
          height: 30,
          justifyContent: "center",
          width: 100,
          margin: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ fontSize: 20, marginLeft: 20 }}>
          {route.params.data.price}
        </Text>
      </View>
      <TouchableOpacity
        onPress={addToCart}
        style={{
          backgroundColor: "#3498db",
          padding: 10,
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          marginLeft: 40,
          marginTop: 50,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default OfferPage;

const styles = StyleSheet.create({});
