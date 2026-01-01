import axios from "axios";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

export async function generateThumbnail(prompt) {
  const response = await axios.post(
    "https://api.openai.com/v1/images/generations",
    {
      model: "gpt-image-1",
      prompt,
      size: "1024x1024",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );
  return response.data.data[0].url;
}
