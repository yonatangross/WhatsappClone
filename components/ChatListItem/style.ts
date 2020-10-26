import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  leftContainer: { flexDirection: "row" },
  midContainer: {},
  rightContainer: {},
  avatar: { width: 60, height: 60, marginRight: 10, borderRadius: 50 },
});

export default styles;
