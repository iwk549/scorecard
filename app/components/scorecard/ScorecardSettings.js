import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import BlockButton from "./../button/BlockButton";
import Divider from "./../common/Divider";
import AppText from "./../text/AppText";
import Sharing from "./Sharing";

function ScorecardSettings({ onResetScore, onSave, nonCard }) {
  return (
    <ScrollView>
      {!nonCard && (
        <>
          <Divider />
          <BlockButton title="Reset Scores" onPress={onResetScore} />
          <Divider />
          <BlockButton title="Save this Card" onPress={onSave} />
          <Divider />
        </>
      )}
      <Sharing />
      <Divider />

      <AppText style={styles.header}>Scorecard Help</AppText>
      <AppText style={styles.miniHeader}>Update Names</AppText>
      <AppText style={styles.text}>
        From the Main tab you can update a player by long pressing on their
        name. This will bring up the player name edit box. Enter the new name
        and tap done. Tap on any player to get back to updating scores.
        {"\n"}
      </AppText>
      <AppText style={styles.miniHeader}>Incrementer Scorecards</AppText>
      <AppText style={styles.text}>
        Tap the player's name whose score you need to change, and use the left
        and right arrows to add or remove points. A long press on either arrow
        will increment or decrement the score by 10 points.
        {"\n"}
        {"\n"}
        Tap the player name again to deselect them and hide the incrementer.
        {"\n"}
      </AppText>
      <AppText style={styles.miniHeader}>Countdown & Tally Scorecards</AppText>
      <AppText style={styles.text}>
        There are a couple ways to update this type of scorecard. The simplest
        way is on the Main tab. Tap the player you need to update, enter their
        score for the round and hit Done on your keyboard.
        {"\n"}
        {"\n"}
        If you need to edit a score from a previous round you can do so on the
        History tab. Select the score you want to edit to bring up the input.
        Enter the new score for the round and tap Done. If you want to delete
        that round entirely just leave the input blank and hit done. You will be
        asked to confirm and the round will be deleted. Any rounds remaining
        after the deleted round will shift up by one.
        {"\n"}
        {"\n"}
        You can also enter new round scores from the History tab by tapping the
        area below the last round for a player.
        {"\n"}
      </AppText>
      <AppText style={styles.miniHeader}>Timer</AppText>
      <AppText style={styles.text}>
        The timer can be set to count up or down, depending on your preference.
        {"\n"}
        {"\n"}
        To set the timer to count up just tap the green Start button. Tap the
        purple Next Turn button to keep the timer running but start over at
        zero.
        {"\n"}
        {"\n"}
        To set the timer to count down go to the Timer tab and tab the Set
        Countdown Time button. Set the countdown time in minutes and seconds and
        tap done. Tap the green Start button and the timer will start counting
        down. Tap the purple Next Turn button to keep the timer running but
        reset the timer to the countdown time. When the timer reaches zero it
        will turn red, a sound will play, and the timer will reset to the
        countdown time. You can select a different sound on the Settings tab. To
        revert back to counting up tap the Zero button.
        {"\n"}
        {"\n"}
        The timer will display at the top of the Main and History tabs and will
        keep counting even as you enter scores or leave the app. You can set the
        timer to only show on the Timer tab in Settings. If you do not have the
        app up when the timer runs out the sound will play when you return to
        the app. Closing the app will stop and remove your timer.
        {"\n"}
      </AppText>
      <AppText style={styles.miniHeader}>Sorting</AppText>
      <AppText style={styles.text}>
        From the Main tab you can sort by Name, Total Points or order in which
        you entered the names by tapping on the header. Tap again to reverse the
        sort order.
        {"\n"}
        {"\n"}
        For Tally scorecards this order will also apply to the History tab.
        {"\n"}
      </AppText>
      <AppText style={styles.miniHeader}>Saving Scorecards</AppText>
      <AppText style={styles.text}>
        All updates to the scorecard in progress are automatically saved after
        every change.
        {"\n"}
        {"\n"}
        If you want to start a new scorecard but need to come back to your
        current card at a later time you can tap the Save this Card button
        above. The scorecard will be saved in its current state, and you are now
        free to start another card. Each card you start has a unique ID, so
        saving a scorecard you have already saved will overwrite the previous
        version.
        {"\n"}
        {"\n"}
        On the Saved Cards tab you can view all of your saved scorecards. Tap on
        a card to expand and view the full scores. From here you can either jump
        right back in where you left off and continue updating the scores or
        delete the card. If you want to delete all your saved cards at once
        there is a Reset and Clear button on the Settings tab.
        {"\n"}
        {"\n"}
      </AppText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
    fontSize: 14,
    marginRight: 5,
  },
  miniHeader: {
    marginHorizontal: 15,
    fontWeight: "bold",
    fontSize: 18,
  },
  header: {
    marginHorizontal: 15,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    textDecorationLine: "underline",
    marginBottom: 5,
  },
});

export default ScorecardSettings;
