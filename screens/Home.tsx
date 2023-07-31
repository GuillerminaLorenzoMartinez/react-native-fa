import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import SearchBar from "../components/SearchBar";
import { getAwardsDetails } from "../utils/getAwardsDetails";
import { fetchData } from "../utils/fetchLastSix";
import { useNavigation } from "@react-navigation/native";

const Home: React.FC = () => {
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
          <SearchBar onSearch={handleSearch} />
          {awardDetails && (
            <View>
              <Text style={styles.title}>Latest Awards</Text>
              <View>
                {awardDetails.map((award) => (
                  <View key={award.id}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("AwardDetail", {
                          id: award.id,
                          title: award.title,
                        })
                      }
                    >
                      <Text style={styles.subtitle}>{award.title}</Text>
                    </TouchableOpacity>

                    <Text style={styles.text}>{award.type} Award</Text>
                    <Text style={styles.text}>
                      Start Date:
                      <Text style={styles.boldText}>{award.startDate}</Text>
                    </Text>
                    <Text style={styles.text}>
                      Contracting Organisation:
                      <Text style={styles.boldText}>
                        {award.contractingOrg}
                      </Text>
                    </Text>
                    <Text style={styles.text}>
                      Chief Investigator:
                      <Text style={styles.boldText}>
                        {award.investigatorName}
                      </Text>
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}
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

export default Home;
