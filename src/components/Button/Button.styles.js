import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#58cc02",
    height: 50,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,

    //border

    borderRadius: 5,
    borderBottomWidth: 5,
    borderBottomColor: "#57a600",
  },
  disabledContainer: {
    backgroundColor: "lightgray",
    borderColor: "gray",
    borderBottomColor: "darkgray",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",

    borderBottomColor: "white",
    borderBottomWidth: 1.5,
  },
});

export default styles;
