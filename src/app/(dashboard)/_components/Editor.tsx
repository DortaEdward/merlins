import type { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/react";
import "@blocknote/core/style.css";
import { useBlockNote } from "@blocknote/react";
import {
  useState
} from "react"

export default function Editor() {
  const [content, setContent] = useState<string | undefined>()
  const editor: BlockNoteEditor = useBlockNote();
  return (
    <BlockNoteView
      editor={editor}
      theme={"light"}
      content={content}
    />
  );
}
