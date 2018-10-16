import { Linking } from "react-native";

/**
 * Deep Linking to open Hangouts
 * If hangoutId is not provided it open hangouts
 * @param {hangoutId} string unique number to open the person chat when a profile is clicked.
 */

export const openHangouts = hangoutId => {
  if (hangoutId && hangoutId != "") {
    Linking.openURL(`https://hangouts.google.com/chat/person/${hangoutId}`);
  } else {
    Linking.openURL("https://hangouts.google.com/");
  }
};
