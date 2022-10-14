import { View, Alert, ActivityIndicator } from "react-native";
import styles from "./App.style";

import question from "./assets/data/allQuestions";
import { useState, useEffect } from "react";
import ImageMultipleChoice from "./src/components/ImageMultipleChoice";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion";
import Header from "./src/components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    question[currentQuestionIndex]
  );
  const [lives, setLives] = useState(5);
  const [hasLoaded, setHasloaded] = useState(false);

  useEffect(() => {
    if (currentQuestionIndex >= question.length) {
      Alert.alert("You won");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(question[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  const restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  };
  const onWrong = () => {
    if (lives <= 1) {
      Alert.alert("Game over", "Try again", [
        {
          text: "Try again",
          onPress: restart,
        },
      ]);
    } else {
      Alert.alert("Wrong answer");
      setLives(lives - 1);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  useEffect(() => {
    if (hasLoaded) {
      saveData();
    }
  }, [lives, currentQuestionIndex, hasLoaded]);

  const saveData = async () => {
    await AsyncStorage.setItem("lives", lives.toString());
    await AsyncStorage.setItem(
      "currentQuestionIndex",
      currentQuestionIndex.toString()
    );
  };

  const loadData = async () => {
    const loadLives = await AsyncStorage.getItem("lives");
    if (loadLives) {
      setLives(parseInt(loadLives));
    }
    const loadCurrentQuestionIndex = await AsyncStorage.getItem(
      "currentQuestionIndex"
    );
    if (loadCurrentQuestionIndex) {
      setCurrentQuestionIndex(parseInt(loadCurrentQuestionIndex));
    }
    setHasloaded(true);
  };

  if (!hasLoaded) {
    return <ActivityIndicator />;
  } else
    return (
      <View style={styles.root}>
        <Header
          progress={currentQuestionIndex / question.length}
          lives={lives}
        />
        {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
          <ImageMultipleChoice
            question={currentQuestion}
            onCorrect={onCorrect}
            onWrong={onWrong}
          />
        )}
        {currentQuestion.type === "OPEN_ENDED" && (
          <OpenEndedQuestion
            question={currentQuestion}
            onCorrect={onCorrect}
            onWrong={onWrong}
          />
        )}
      </View>
    );
};
export default App;
