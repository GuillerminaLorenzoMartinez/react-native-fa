import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ShortSearchBar from "../components/ShortSearchBar";
import { getAwardsDetails } from "../utils/getAwardsDetails";
import { fetchData } from "../utils/fetchLastSix";
import { useNavigation } from "@react-navigation/native";

const AwardsAndOutputs: React.FC = () => {
  const navigation = useNavigation<any>();
  const [data, setData] = useState<any>(null);

  const handleSearch = () => {
    console.log("Search clicked");
  };

  useEffect(() => {
    const usefetchData = async () => {
      const data = await fetchData();
      setData(data);
    };

    usefetchData();
  }, []);

  const awardDetails = data ? getAwardsDetails(data) : [];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <ShortSearchBar onSearch={handleSearch} />
          <View>
            {awardDetails && (
              <View>
                <Text style={styles.subtitle}>Awards</Text>
                {awardDetails.map((award) => (
                  <View key={award.id}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("AwardDetail")}
                    >
                      <Text style={styles.text}>• {award.title}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}
          </View>
          <View>
            <Text style={styles.subtitle}>Outputs</Text>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("OutputDetail")}
              >
                <Text style={styles.text}>• Output name 1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("OutputDetail")}
              >
                <Text style={styles.text}>• Output name 2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("OutputDetail")}
              >
                <Text style={styles.text}>• Output name 3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("OutputDetail")}
              >
                <Text style={styles.text}>• Output name 4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("OutputDetail")}
              >
                <Text style={styles.text}>• Output name 5</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
    margin: 20,
    textAlign: "left",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#193E72",
    margin: 20,
    textAlign: "left",
  },
  boldText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginHorizontal: 20,
    marginVertical: 10,
    textAlign: "left",
  },
  text: {
    fontSize: 20,
    color: "black",
    marginHorizontal: 20,
    marginVertical: 10,
    textAlign: "left",
  },
});

export default AwardsAndOutputs;
