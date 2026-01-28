import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateResponse(pdfText: string) {
  try {
    console.log("Generating response...");

    const response = await client.responses.create({
      model: "gpt-5",
      reasoning: { effort: "low" },
      input: `
You are a helpful assistant.

Transform this document into an engaging, easy-to-read summary with contextual relevant emojis and proper markdown formatting:

${pdfText}
`,
      max_output_tokens: 1500,
    });

    console.log("Raw response:", response);

    const finalText = response.output_text;
    return finalText;
  } catch (error: any) {
    console.error("OpenAI Error:", error?.response?.data || error);

    throw new Error(error.message || "Unknown error while generating summary.");
  }
}
