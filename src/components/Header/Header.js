import { View, Image, Text } from "react-native";
import ProgressBar from "../ProgressBar";
import styles from "./Header.styles";
import heart from "../../../assets/images/heart.png";

const Header = ({ progress, lives }) => {
  return (
    <View style={styles.root}>
      <ProgressBar progress={progress} />
      <Image source={heart} style={styles.icon} />
      <Text style={styles.lives}>{lives}</Text>
    </View>
  );
};

export default Header;
