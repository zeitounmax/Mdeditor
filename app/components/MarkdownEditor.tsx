"use client";
import { useRef, useState } from "react";
import { Box, Textarea, Button, VStack, Flex, HStack } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState<string>("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const downloadMarkdown = () => {
    if (textAreaRef.current) {
      const element = document.createElement("a");
      const file = new Blob([markdown], { type: "text/markdown" });
      element.href = URL.createObjectURL(file);
      element.download = "markdown.md";
      document.body.appendChild(element);
      element.click();
    }
  };

  const insertText = (syntaxBefore: string, syntaxAfter: string = "") => {
    if (textAreaRef.current) {
      const start = textAreaRef.current.selectionStart;
      const end = textAreaRef.current.selectionEnd;
      const textBefore = markdown.substring(0, start);
      const textAfter = markdown.substring(end);
      const textSelection = markdown.substring(start, end);

      const newText = `${textBefore}${syntaxBefore}${textSelection}${syntaxAfter}${textAfter}`;
      setMarkdown(newText);
      setTimeout(() => {
        if (textAreaRef.current) {
          textAreaRef.current.focus();
          textAreaRef.current.setSelectionRange(
            start + syntaxBefore.length,
            start + syntaxBefore.length + textSelection.length
          );
        }
      }, 0);
    }
  };

  return (
    <VStack spacing={4} width="100%">
      <HStack spacing={4}>
        <Button
          bg="blue.500"
          color="white"
          _hover={{ bg: "blue.600" }}
          onClick={() => insertText("**", "**")}
          m={2}
        >
          Bold
        </Button>
        <Button
          bg="pink.500"
          color="white"
          _hover={{ bg: "pink.600" }}
          onClick={() => insertText("_", "_")}
          m={2}
        >
          Italic
        </Button>
        <Button
          bg="green.500"
          color="white"
          _hover={{ bg: "green.600" }}
          onClick={() => insertText("# ", "")}
          m={2}
        >
          H1
        </Button>
        <Button
          bg="orange.500"
          color="white"
          _hover={{ bg: "orange.600" }}
          onClick={() => insertText("## ", "")}
          m={2}
        >
          H2
        </Button>
        <Button
          bg="purple.500"
          color="white"
          _hover={{ bg: "purple.600" }}
          onClick={() => insertText("- ", "")}
          m={2}
        >
          List
        </Button>
      </HStack>
      <Flex direction={["column", "row"]} width="100%">
        <Textarea
          ref={textAreaRef}
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Enter your markdown"
          size="sm"
          height="90vh"
          width={["100%", "50%"]}
          bg="white"
          color="black"
        />
        <Box
          flex="1"
          overflowY="auto"
          height="90vh"
          width={["100%", "50%"]}
          p={4}
        >
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </Box>
      </Flex>
      <Button
        colorScheme="red"
        onClick={downloadMarkdown}
        bg="red.500" 
        color="white"
        _hover={{ bg: "red.600" }} 
      >
        Save as Markdown
      </Button>
    </VStack>
  );
};

export default MarkdownEditor;
