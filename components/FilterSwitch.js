import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const FilterSwitch = ({ title, value, onChange }) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{title}</Text>
      <Switch
        value={value}
        onValueChange={onChange}
        thumbColor={Colors.primary}
        trackColor={{ true: Colors.accent }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
});
export default FilterSwitch;
