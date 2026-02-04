import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export async function generateResponseGeminiAi(pdfText: string) {
  try {
    console.log("Generating response with Gemini...");

    const prompt = `
You are an expert document analyst and summarization engine.

Your task is to read the provided PDF content and produce a clear, accurate, and structured summary.

Follow these rules strictly:
- Preserve the original meaning and intent of the document.
- Do NOT add new information, opinions, or assumptions.
- Use simple, precise language.
- Remove redundancy and irrelevant details.
- Maintain important facts, definitions, numbers, and conclusions.
- If the document is technical, keep key technical terms intact.
- If the document is non-technical, simplify complex ideas.

Output format:
1. Title (if identifiable)
2. One-paragraph executive summary (max 50 words)
3. Key points as bullet list (5 bullets)
4. Important conclusions or takeaways
5. Keywords (5-10)
6. Use meaningful emojis/icons
7. Make bold / italic markdown where needed

If the content is incomplete, unclear, or corrupted, explicitly mention the limitations in the summary.

Always prioritize accuracy over brevity.
${pdfText}
`;

    const response = await model.generateContent(prompt);

    // console.log("Raw response:", response);

    const finalText = response.response.text();
    return finalText;
  } catch (error: any) {
    console.error("Gemini Error:", error);

    throw new Error(error.message || "Unknown Gemini API error.");
  }
}
