import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import IconRender from "./../icon/IconRender";
import SettingsContext from "./../../context/settingsContext";
import AppText from "./../text/AppText";
import { defaultStyles, clicks } from "../../config";

function HorizontalIncrementer({
  value,
  setValue,
  increment,
  min,
  max,
  header,
}) {
  const { theme } = useContext(SettingsContext);

  const handleIncrement = (inc) => {
    if (
      (min && value + increment * inc < min) ||
      (max && value + increment * inc > max)
    )
      return;
    const newValue = value + increment * inc;
    setValue(newValue);
  };

  return (
    <>
      {header && <AppText style={styles.header}>{header}</AppText>}
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={clicks.clickOpacity}
          style={styles.button}
          onPress={() => handleIncrement(-1)}
          onLongPress={() => handleIncrement(-10)}
        >
          <IconRender
            icon="caretleft"
            iconType="ant"
            color={theme.color}
            style={styles.left}
            iconSize={30}
          />
        </TouchableOpacity>
        <View style={styles.value}>
          <AppText style={styles.text}>{String(value)}</AppText>
        </View>
        <TouchableOpacity
          activeOpacity={clicks.clickOpacity}
          style={styles.button}
          onPress={() => handleIncrement(1)}
          onLongPress={() => handleIncrement(10)}
        >
          <IconRender
            icon="caretright"
            iconType="ant"
            color={theme.color}
            style={styles.right}
            iconSize={30}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

const width = defaultStyles.sizes.screenDimensions.width;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  button: {
    flex: 0.4,
  },
  value: {
    flex: 0.2,
  },
  left: {
    position: "absolute",
    left: width / 3 - 18,
  },
  right: {
    position: "absolute",
    right: width / 3 - 25,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 23,
  },
  header: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default HorizontalIncrementer;
