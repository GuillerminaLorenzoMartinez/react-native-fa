import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";

const HomeScreen: React.FC = () => {
  const [data, setData] = useState<any>(null);

  const handleSearch = () => {
    console.log("Search clicked");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fundingawards.nihr.ac.uk/api/latest/6"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  interface AwardDetails {
    id: string;
    title: string;
    type: string;
    startDate: string;
    contractingOrg: string;
    investigatorName: string;
  }

  const getAwardDetails = (data: any): AwardDetails[] => {
    return data.documents.map((document: any) => {
      const id = document.id;
      const title = document.award_title;
      const type = document.award_type;
      const startDate = new Date(document.start_date).toLocaleDateString(
        "en-US",
        { month: "long", year: "numeric" }
      );
      const contractingOrg = document.contracting_org;
      const investigatorName = document.lead_investigator_name;

      return {
        id,
        title,
        type,
        startDate,
        contractingOrg,
        investigatorName,
      };
    });
  };

  const awardDetails = data ? getAwardDetails(data) : [];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <SearchBar onSearch={handleSearch} />
          {awardDetails.length > 0 && (
            <View>
              <Text style={styles.title}>Latest Awards</Text>
              {awardDetails.map((award) => (
                <View key={award.id}>
                  <Text style={styles.subtitle}>{award.title}</Text>
                  <Text style={styles.text}>{award.type} Award</Text>
                  <Text style={styles.text}>
                    Start Date:
                    <Text style={styles.boldText}>{award.startDate}</Text>
                  </Text>
                  <Text style={styles.text}>
                    Contracting Organisation:
                    <Text style={styles.boldText}>{award.contractingOrg}</Text>
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
    marginLeft: 20,
    marginVertical: 10,
    textAlign: "left",
  },
  text: {
    fontSize: 20,
    color: "black",
    marginLeft: 20,
    marginVertical: 10,
    textAlign: "left",
  },
});

export default HomeScreen;
