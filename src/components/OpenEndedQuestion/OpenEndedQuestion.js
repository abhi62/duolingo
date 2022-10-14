import { Image, Text, View, TextInput } from "react-native";
import styles from "./OpenEndedQuestion.styles";
import mascot from "../../../assets/images/mascot.png";
import Button from "../Button";
import PropTypes from "prop-types";
import { useState } from "react";

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState("");
  const onButtonPress = () => {
    // console.warn(question.answer);
    if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrect();
    } else {
      onWrong();
    }
    setInput("");
    // console.warn(input);
  };
  return (
    <>
      <Text style={styles.title}>Translate this question</Text>
      <View style={styles.row}>
        <Image style={styles.mascot} source={mascot} resizeMode="contain" />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>
      <TextInput
        value={input}
        onChangeText={setInput}
        style={styles.textInput}
        placeholder="Type in english"
        textAlignVertical="top"
        multiline={true}
      />
      <Button text="Check" onPress={onButtonPress} disabled={!input} />
    </>
  );
};

OpenEndedQuestion.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
};

export default OpenEndedQuestion;
