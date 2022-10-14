import { Image, Pressable, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./ImageOption.styles";
const ImageOption = ({ image, text, isSelected, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.optionContainer, isSelected ? styles.selectedOption : {}]}
    >
      <Image
        source={{
          uri: image,
        }}
        resizeMode="contain"
        style={styles.optionImage}
      />
      <Text style={styles.optionText}>{text}</Text>
    </Pressable>
  );
};

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  isSelected: PropTypes.boolean,
  onPress: PropTypes.func,
};
ImageOption.defaultProps = {
  text: "Default",
  isSelected: true,
  onPress: () => {},
};

export default ImageOption;
