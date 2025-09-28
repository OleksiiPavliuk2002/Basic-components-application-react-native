import { StyleSheet, ImageBackground, Platform, StatusBar, View } from "react-native";
import ImagePile from "./components/ImagePile";
import StatisticsInfo from "./components/StatisticsInfo";

export default function App() {
  return (
    <ImageBackground source={require("./assets/ocean.jpg")} resizeMode="cover" 
    style={styles.container}>
      <View>
        <StatisticsInfo />
      </View>
      <ImagePile/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
  },
});
