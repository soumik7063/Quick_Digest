import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf"
export async function fetchAndExtractText(url:string){
    const response = await fetch(url);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();

    const loader = new PDFLoader(new Blob([arrayBuffer]));
    const docs = await loader.load();
    const text = docs.map((doc) => doc.pageContent).join("\n");
    return text;
}