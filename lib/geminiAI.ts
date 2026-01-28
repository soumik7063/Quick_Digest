import { GoogleGenerativeAI } from "@google/generative-ai";
console.log("Gemini API Key:", process.env.GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export async function generateResponseGeminiAi(pdfText: string) {
  try {
    console.log("Generating response with Gemini...");

    const prompt = `
You are a helpful assistant.

Transform this document into an engaging, easy-to-read summary with contextual relevant emojis and proper markdown formatting:

${pdfText}
`;

    const response = await model.generateContent(prompt);

    console.log("Raw response:", response);

    const finalText = response.response.text();
    return finalText;
  } catch (error: any) {
    console.error("Gemini Error:", error);

    throw new Error(error.message || "Unknown Gemini API error.");
  }
}
