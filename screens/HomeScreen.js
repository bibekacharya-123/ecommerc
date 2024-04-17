import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  Pressable,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const list = [
    {
      id: "0",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoRst5MyJsX6RCYlsS58RjfXVMBuSaFC6VUh_t2UB7w&s",
      name: "T-Shirt",
      price: "3000",
      details:"her is the details about the produc"
    },
    {
      id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1KQHJnu2JX5pNGRtEMZKHfrE7DGE9axtk5pVxPvFiQg&s",
      name: "Hodiee",
      price: "3000",
      details:"her is the details about the produc"
    },
    {
      id: "2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNxF_H25dT6VITsvsfOtNRC95317d_AqRWYd3wef8VWg&s",
      name: "Pant",
      price: "3000",
      details:"her is the details about the produc"
    },
    {
      id: "3",
      image:
        "https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/7/z/r/8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.jpeg?q=90&crop=true",
      name: "Shoes",
      price: "3000",
      details:"her is the details about the produc"
    },
  ];
  const lists = [
    {
      id: "0",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoRst5MyJsX6RCYlsS58RjfXVMBuSaFC6VUh_t2UB7w&s",
      name: "T-Shirt",
      offer: "30%",
      details: "order now for the exciting offer  ",
      price: "3000",
    },
    {
      id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1KQHJnu2JX5pNGRtEMZKHfrE7DGE9axtk5pVxPvFiQg&s",
      name: "Hodiee",
      offer: "30%",
      details: "order now for the exciting offer ",
      price: "3000",
    },
    {
      id: "2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNxF_H25dT6VITsvsfOtNRC95317d_AqRWYd3wef8VWg&s",
      name: "Pant",
      offer: "30%",
      details: "order now for the exciting offer  ",
      price: "3000",
    },
    {
      id: "3",
      image:
        "https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/7/z/r/8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.jpeg?q=90&crop=true",
      name: "Shoes",
      offer: "30%",
      details: "order now for the exciting offer  ",
      price: "3000",
    },
  ];
  const images = [
    "https://media.centrepointstores.com/i/centrepoint/SP_Offers_Block06MAR18.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBQdOsQPUrnIanPlNRb87yUPgN-XnDH7HndbH6ZAm0A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVhDpjOLJBuahbsAgvjV9Bn7OA-FQeicbmAwZ9ziFGw&s",
  ];
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 40 : 0,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView>
        <View
          style={{
            backgroundColor: "#00CED1",
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
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
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            gap: 5,
            padding: 10,
            backgroundColor: "#AFEEEE",
          }}
        >
          <EvilIcons name="location" size={28} color="black" />
          <Pressable>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              Deliver to Bibek Acharya - Anamnagar
            </Text>
          </Pressable>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>

        <FlatList
          data={list}
          horizontal={true}
          renderItem={({ item, index }) => {
            return (
              <Pressable onPress={() => navigation.navigate("Product",{
                data:item,
              })}
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Image
                  style={{ width: 150, height: 150, resizeMode: "contain" }}
                  source={{ uri: item.image }}
                />
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    marginTop: 5,
                  }}
                >
                  {item.name}
                </Text>
              </Pressable>
            );
          }}
        />
        <SliderBox images={images} />
        <Text
          style={{
            backgroundColor: "#AFEEEE",
            textAlign: "center",
            fontSize: 20,
            margin: 4,
          }}
        >
          Trending Deals OF The Week
        </Text>
        <FlatList
          data={lists}
          renderItem={({ item, index }) => {
            return (
              <Pressable onPress={()=>navigation.navigate("Offer",{
                data:item,
              })}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  margin: 20,
                }}
              >
                <Image
                  style={{ width: 180, height: 150, resizeMode: "contain" }}
                  source={{ uri: item.image }}
                />
                <View style={{ flexDirection: "column" }}>
                  <Text
                    style={{
                      textAlign: "left",
                      fontSize: 25,
                      fontWeight: "500",
                    }}
                  >
                    {item.name}
                  </Text>
                  <View
                    style={{
                      backgroundColor: "red",
                      height: 30,
                      width: 100,
                      borderRadius: 10,
                      margin: 4,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontSize: 20,
                        fontWeight: "500",
                        marginTop: 5,
                      }}
                    >
                      up to {item.offer}
                    </Text>
                      <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontSize: 20,
                        fontWeight: "500",
                        marginTop: 5,
                      }}
                    >
                      up to {item.offer}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: "yellow",
                      borderRadius: 10,
                      height: 30,
                      width:100,
                      alignItems: "flex-start",
                      justifyContent:'center'
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 18,
                        fontWeight: "500",
                        marginLeft:10
                      }}
                    >
                      {item.price}
                    </Text>
                  </View>
                </View>
              </Pressable>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
