// ./screens/Inicio.js

import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Inicio = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>Tela de Início</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("Pedidos")} // We added an onPress event which would navigate to the About screen
      />
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

export default Inicio;