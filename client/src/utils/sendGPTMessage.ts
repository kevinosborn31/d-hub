import axios from "axios";

export const sendGPTMessage = async (
  userInput: string,
): Promise<string> => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        prompt: userInput,
        max_tokens: 50,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.CHAT_GPT_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].text;
  } catch (error) {
    console.error("Error fetching ChatGPT response:", error);
    throw error; 
  }
};