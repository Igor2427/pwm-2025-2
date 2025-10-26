import React from "react";
import { Layout, Text, Button, Input, List, ListItem } from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";

const names = [
  "Daisy Lambert", "Mario Cummings", "Nylah Dickerson", "Flynn Costa", "Robin Kerr",
  "Louie Francis", "Daniella Kennedy", "Maxwell Jaramillo", "Guadalupe Avila", "Jaylen Morse",
  "Kairi Roach", "Caspian Crawford", "Aubree Hail", "Hector Palacios", "Bria Clay",
  "Yosef Juarez", "Juliet Ponce", "Langston Sanchez", "Aria Person", "Moses Leach",
  "Martha Ruiz", "Austin Vance", "Maxine Bates", "Ellis Wilcox", "Ashlyn Santos",
  "Walker Gilbert", "Jocelyn Phillips", "Andrew Ortiz", "Anna Rivers", "Bear Huffman",
  "Hayley Crosby", "Tristen Cisneros", "Janelle Meadows", "Wayne Hampton", "Leona Vang",
  "Jimmy Oliver", "Camille Kramer", "Kylan Cole", "Margaret Brewer", "Cruz Garza",
  "River Marquez", "Malakai McKinney", "Gwendolyn Hahn", "Kabir Jensen", "Jane Martin",
  "Mateo Ramos", "Alice Finley", "Calum Espinoza", "Lucille Levy", "Harold Gibbs",
];

// Agrupar nomes por letra inicial
const sectionNames = [];
(() => {
  names.forEach((name) => {
    const firstLetter = name[0];
    if (!sectionNames.find((value) => value.title === firstLetter)) {
      sectionNames.push({ title: firstLetter, data: [] });
    }
    sectionNames.find((value) => value.title === firstLetter).data.push(name);
    sectionNames.sort((a, b) => a.title.localeCompare(b.title));
    sectionNames.forEach((section) => section.data.sort());
  });
})();

export const SectionListExample = () => (
  <Layout level="1" style={{ flex: 1 }}>
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }} edges={["top"]}>
      {sectionNames.map((section) => (
        <Layout key={section.title} style={{ marginVertical: 10 }}>
          <Text category="h4" style={{ marginBottom: 8 }}>
            {section.title}
          </Text>
          <List
            data={section.data}
            renderItem={({ item }) => (
              <ListItem
                title={(evaProps) => <Text {...evaProps}>{item}</Text>}
                style={{
                  backgroundColor: "#f9c2ff",
                  marginVertical: 4,
                  borderRadius: 8,
                }}
              />
            )}
          />
        </Layout>
      ))}
    </SafeAreaView>
  </Layout>
);
