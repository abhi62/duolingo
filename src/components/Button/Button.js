import PropTypes from "prop-types";
import { Pressable, Text } from "react-native";

import styles from "./Button.styles";

const Button = ({ text, onPress, disabled }) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, disabled ? styles.disabledContainer : {}]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};
Button.defaultProps = {
  text: "default",
  onPress: () => {},
  disabled: false,
};

export default Button;
