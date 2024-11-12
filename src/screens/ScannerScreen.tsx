// src/screens/HomeScreen.tsx
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import NfcManager, { NfcTech } from "react-native-nfc-manager";

const ScannerScreen = () => {
  async function readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      console.warn("Tag found", tag);
    } catch (ex) {
      console.warn("Oops!", ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }
  return (
    <View style={styles.container}>
      <Text style={{ paddingBottom: 20, textAlign: "center" }}>
        Bring your phone close to a {"\n"}NFC tag and tap "Start Scan".
      </Text>
      <Button title="Start Scan" onPress={readNdef}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScannerScreen;
