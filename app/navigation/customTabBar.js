import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { AppText, IconRender } from "./../components";
import routes from "./routes";
import { clicks, defaultStyles } from "../config";
import { allowables } from "../functions";

function CustomTabBar({ navigation, state }) {
  const tabs = [
    { name: routes.SCORECARD, icon: "star", iconType: "ant" },
    { name: routes.SAVED, icon: "save", iconType: "ant" },
    { name: routes.HOME, icon: "pluscircleo", iconType: "ant" },
    { name: routes.SUDOKU, icon: "checkerboard", iconType: "material" },
    { name: routes.SETTINGS, icon: "setting", iconType: "ant" },
  ];

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: allowables.devicePlatform() === "ios" ? 15 : 2 },
      ]}
    >
      {tabs.map((tab) => {
        const selected = state.routeNames[state.index] === tab.name;
        return (
          <TouchableOpacity
            key={tab.name}
            activeOpacity={clicks.clickOpacity}
            style={styles.divide}
            onPress={() => navigation.navigate(tab.name)}
          >
            <IconRender
              icon={tab.icon}
              iconType={tab.iconType}
              color={
                selected
                  ? defaultStyles.colors.holdDark
                  : defaultStyles.colors.holdLight
              }
            />
            <AppText
              style={[
                styles.text,
                {
                  backgroundColor: defaultStyles.colors.info,
                  color: defaultStyles.colors.holdLight,
                },
                selected ? { color: defaultStyles.colors.holdDark } : {},
              ]}
            >
              {tab.name}
            </AppText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: defaultStyles.colors.info,
    paddingTop: 3,
    // paddingBottom is set inline depending on device
    paddingLeft: 10,
    paddingRight: 10,
  },
  divide: {
    flex: 0.5,
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default CustomTabBar;
