import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "./AppText";
import { defaultStyles } from "../../config";

function Header({ children }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.header}>{children}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.info,
  },
  header: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: defaultStyles.colors.holdLight,
  },
});

export default Header;
