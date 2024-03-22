// Import necessary modules from React Native
import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { enableScreens } from "react-native-screens";

// Import navigation component
import Navigation from "./app/navigations";

// Enable native screens for improved performance
enableScreens();

// Main component for the application
function App() {
  return (
    // Wrapper for safe area view to ensure content doesn't overlap with device status bar or notches
    <SafeAreaView style={styles.app_view_container}>
      {/* Status bar component to control the appearance of the status bar */}
      <StatusBar
        backgroundColor="#fff" // Set background color to white
        barStyle={"dark-content"} // Set text color to dark
        animated={true} // Enable animations for status bar changes
        showHideTransition={"fade"} // Set transition effect for showing and hiding status bar
      />
      {/* Navigation component for managing application screens */}
      <Navigation />
    </SafeAreaView>
  );
}

// Export the main component
export default App;

// Styles for the main component
const styles = StyleSheet.create({
  app_view_container: {
    flex: 1, // Take up entire available space
    // paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0, // Adjust paddingTop for Android devices based on status bar height
  },
});