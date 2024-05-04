import Image from "next/image";
import MarkdownEditor from "./components/MarkdownEditor";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">The Markdown Editor</h1>
      <MarkdownEditor />
      <Footer />
    </div>
  );
}
