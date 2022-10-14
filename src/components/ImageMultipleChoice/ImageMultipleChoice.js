import PropTypes from "prop-types";
import { useState } from "react";
import { Text, View } from "react-native";
import Button from "../Button";
import ImageOption from "../ImageOption";
import styles from "./ImageMultipleChoice.styles";
const ImageMultipleChoice = ({ question, onCorrect, onWrong }) => {
  const [selected, setSelected] = useState(null);

  const onButtonPress = () => {
    if (selected.correct) {
      onCorrect();
      setSelected(null);
    } else {
      onWrong();
    }
  };
  return (
    <>
      <Text style={styles.title}>{question?.question}</Text>
      <View style={styles.optionsContainer}>
        {question?.options.map((option) => {
          return (
            <ImageOption
              key={option.id}
              image={option.image}
              text={option.text}
              isSelected={selected?.id === option?.id}
              onPress={() => setSelected(option)}
            />
          );
        })}
      </View>
      <Button text={"Check"} onPress={onButtonPress} disabled={!selected} />
    </>
  );
};

ImageMultipleChoice.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        image: PropTypes.string,
        correct: PropTypes.bool,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

export default ImageMultipleChoice;
