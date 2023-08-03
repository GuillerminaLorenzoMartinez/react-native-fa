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
import { AwardDetails, getAwardsDetails } from "../utils/getAwardsDetails";
import { fetchData } from "../utils/fetchLastSix";
import { useNavigation } from "@react-navigation/native";
import { getOutputsDetails, OutputDetails } from "../utils/getOutputsDetails";

const AwardsAndOutputs: React.FC = () => {
  const navigation = useNavigation<any>();
  const [awardData, setAwardData] = useState<any>(null);
  const [outputData, setOutputData] = useState<OutputDetails[]>([]);

  useEffect(() => {
    const usefetchData = async () => {
      const awards = await fetchData();
      setAwardData(awards);

      const outputs = await getOutputsDetails();
      setOutputData(outputs);
    };

    usefetchData();
  }, []);

  const awardDetails: AwardDetails[] = awardData
    ? getAwardsDetails(awardData)
    : [];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <ShortSearchBar />
          <View>
            {awardDetails && (
              <View>
                <Text style={styles.subtitle}>Awards</Text>
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
              {outputData.map((output) => (
                <View key={output.id}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("OutputDetail", {
                        id: output.id,
                        title: output.title,
                      })
                    }
                  >
                    <Text style={styles.text}>• {output.title}</Text>
                  </TouchableOpacity>
                </View>
              ))}
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
