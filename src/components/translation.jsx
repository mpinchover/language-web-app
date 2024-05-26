import { Box, Textarea, Button, Spinner, Circle, Text } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
const Translation = ({ textToTranslate, setTextToTranslate }) => {
  const [translationState, setTransltionState] = useState(0);

  const onClick = async () => {
    setTransltionState(1);
    const body = {
      text: textToTranslate,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5001/translate",
        body
      );
      console.log("Data is ");
      console.log(data);
    } catch (e) {
      console.log(e);
    } finally {
      setTransltionState(0);
    }
  };
  if (translationState === 0) {
    return (
      <Box bg="white" w="100%" p={4} color="charcoal">
        <Textarea
          placeholder="Here is a sample placeholder"
          size="sm"
          height={300}
          resize={"none"}
          value={textToTranslate}
          onChange={(e) => setTextToTranslate(e.target.value)}
        />
        <Button onClick={onClick} mt={4}>
          Translate
        </Button>
      </Box>
    );
  } else if (translationState === 1) {
    return (
      <Circle flexDir={"column"} w="100%" h={300}>
        <Text mb={4}>Generating translation...</Text>
        <Spinner size="xl" />
      </Circle>
    );
  }
};

export default Translation;
