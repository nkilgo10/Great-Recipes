import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "./MealItem";

const MealList = ({ data, navigation }) => {
  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <MealItem
            title={itemData.item.title}
            onSelect={() => {
              navigation.navigate({
                routeName: "MealDetail",
                params: {
                  mealId: itemData.item.id,
                  mealTitle: itemData.item.title,
                },
              });
            }}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordabilty={itemData.item.affordability}
            image={itemData.item.imageUrl}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
