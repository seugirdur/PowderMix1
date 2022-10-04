// ./screens/Historico.js

import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Historico = () => {
  return (
    <View style={styles.center}>
      <Text>Tela de Historico</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Historico;