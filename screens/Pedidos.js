// ./screens/Pedidos.js

import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Pedidos = () => {
  return (
    <View style={styles.center}>
      <Text>Tela de Pedidos</Text>
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

export default Pedidos;