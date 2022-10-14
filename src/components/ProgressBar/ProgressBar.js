import propTypes from "prop-types";
import { View } from "react-native";
import styles from "./ProgressBar.styles";

const ProgressBar = ({ progress }) => {
  console.log(styles.bg);
  return (
    <View style={styles.bg}>
      <View style={[styles.fg, { width: `${progress * 100}%` }]}>
        <View style={styles.heightLight} />
      </View>
    </View>
  );
};
ProgressBar.propTypes = {
  progress: propTypes.number.isRequired,
};
ProgressBar.defaultProps = {
  progress: 0.5,
};
export default ProgressBar;
