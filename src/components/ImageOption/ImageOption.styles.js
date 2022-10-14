import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  optionContainer: {
    //border
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "lightgray",
    borderRadius: 10,

    // size
    width: "48%",
    height: "48%",

    // spacing
    padding: 10,
    alignItems: "center",
  },
  selectedOption: {
    borderColor: "darkblue",
    backgroundColor: "lightblue",
  },
  optionImage: {
    width: "100%",
    flex: 1,
  },
  optionText: {},
});
export default styles;
