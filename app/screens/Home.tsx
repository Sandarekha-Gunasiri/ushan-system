import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

interface LoanData {
  id: string;
  customer: string;
  amount: string;
  paid: string;
}

const Home = () => {
  const [data, setData] = useState<LoanData[]>([]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState<LoanData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch("http://128.199.25.88:86/index.php/api/loan/settlement/gayan")
      .then((response) => response.json())
      .then((data: LoanData[]) => {
        setData(data);
        setFilteredData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error ", error);
        setLoading(false);
      });
  };

  const handleButtonClick = (customerId: string) => {
    console.log("Button clicked for customer ID:", customerId);
    navigation.navigate("PaymentDetails", { customerId });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = data.filter(
      (item) =>
        item.customer.toLowerCase().includes(query.toLowerCase()) ||
        item.id.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const renderItem = ({ item }: { item: LoanData }) => (
    <View style={styles.item}>
      <View style={styles.idContainer}>
        <Text style={styles.id}>{item.id}</Text>
      </View>
      <View style={styles.inf}>
        <Text style={styles.htext}>{item.customer}</Text>
        <Text style={styles.text}>Amount: {item.amount}</Text>
      </View>
      <TouchableOpacity onPress={() => handleButtonClick(item.id)}>
        <AntDesign name="rightcircle" style={styles.btn} size={30} />
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#00004B" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Ionicons name="search" size={24} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Customer"
          onChangeText={handleSearch}
          value={searchQuery}
        />
      </View>
      <Text style={styles.header}>Today Collections</Text>

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  searchIcon: {
    color: "#adadad",
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: "#adadad",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#f3f3f3",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 2,
    color: "#00004B",
    marginBottom: 20,
    marginRight: 120,
  },
  item: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    borderColor: "#ffffff",
    justifyContent: "space-around",
    backgroundColor: "#ffffff",
    flexDirection: "row",
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 15,
    paddingLeft: 10,
    marginBottom: 10,
    width: 300,
    flexDirection: "row",
    backgroundColor: "#ffffff",

    alignItems: "center",
    color: "#ccc",
  },
  btn: {
    flex: 1,
    alignItems: "flex-end",
    color: "#00004B",
  },
  idContainer: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#101047",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  id: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    color: "#00004B",
  },
  htext: {
    fontSize: 16,
    color: "#00004B",
    fontWeight: "bold",
  },
  inf: {
    width: 200,
  },
  srch: {
    color: "#adadad",
  },
});

export default Home;
