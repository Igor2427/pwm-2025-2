import React from "react";
import { List, ListItem, Layout, Text } from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  { id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba", title: "First Item" },
  { id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63", title: "Second Item" },
  { id: "58694a0f-3da1-471f-bd96-145571e29d72", title: "Third Item" },
];

(() => {
  for (let i = 4; i < 100; i++) {
    DATA.push({
      id: `id-${i}`,
      title: `Item ${i}`,
    });
  }
})();

const Item = ({ title }) => (
  <Layout
    level="2"
    style={{
      backgroundColor: "#c6edd1ff",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
    }}
  >
    <Text category="h5">{title}</Text>
  </Layout>
);

export const FlatListExample = () => (
  <Layout level="1" style={{ flex: 1, backgroundColor: "beige" }}>
    <SafeAreaView style={{ flex: 1 }}>
      <List
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  </Layout>
);
