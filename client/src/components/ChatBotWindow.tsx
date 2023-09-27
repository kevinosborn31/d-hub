import React, { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import axios from "axios";
import { ChatGPTMessage } from "../interfaces/ChatGPTMessage";
import { sendGPTMessage } from "../utils/sendGPTMessage";

const ChatBotWindow: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<ChatGPTMessage[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const openaiApiKey = process.env.CHAT_GPT_API_KEY;

  const handleUserInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    setIsLoading(true);

    try {
      const assistantResponse = await sendGPTMessage(userInput);

      setChatHistory([...chatHistory, { text: userInput, role: "user" }]);
      setChatHistory([
        ...chatHistory,
        { text: assistantResponse, role: "assistant" },
      ]);
      setUserInput("");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    axios
      .post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          prompt: "Hello! How can I assist you?",
          max_tokens: 50, 
        },
        {
          headers: {
            Authorization: `Bearer ${openaiApiKey}`,
          },
        }
      )
      .then((response) => {
        const assistantResponse = response.data.choices[0].text;
        setChatHistory([
          ...chatHistory,
          { text: assistantResponse, role: "assistant" },
        ]);
      }).catch((error) => {
        console.log(error);
        if (error.response.status === 429) {
            console.error('ChatGPT quota exceeded')
        }
      });
  }, []);

  return (
    <Box>
      <Box
        style={{
          height: "50vh", 
          overflowY: "scroll",
        }}
      >
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={
              message.role === "user" ? "user-message" : "assistant-message"
            }
          >
            {message.text}
          </div>
        ))}
      </Box>
      <TextField
        label="Type your message..."
        variant="outlined"
        value={userInput}
        fullWidth
        onChange={handleUserInputChange}
      />
      <Button
        variant="contained"
        color="primary" 
        onClick={handleSendMessage}
        disabled={isLoading}
        sx={{ marginTop: "8px"}}
      >
        Send
      </Button>
    </Box>
  );
};

export default ChatBotWindow;
