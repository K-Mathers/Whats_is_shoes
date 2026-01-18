import { Editor } from "@tiptap/react";
import { useEditorState } from "@tiptap/react";

export const MenuBar = ({ editor }: { editor: Editor }) => {
  const state = useEditorState({
    editor,
    selector: (ctx) => ({
      isBold: ctx.editor.isActive("bold"),
      isItalic: ctx.editor.isActive("italic"),
      isH1: ctx.editor.isActive("heading", { level: 1 }),
      isBullet: ctx.editor.isActive("bulletList"),
      canUndo: ctx.editor.can().undo(),
      canRedo: ctx.editor.can().redo(),
    }),
  });

  if (!editor) return null;

  return (
    <div className="comic-menubar">
      <div className="button-group">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={state.isBold ? "is-active" : ""}
        >
          BOLD
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={state.isItalic ? "is-active" : ""}
        >
          ITALIC
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={state.isH1 ? "is-active" : ""}
        >
          H1
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={state.isBullet ? "is-active" : ""}
        >
          LIST
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!state.canUndo}
        >
          UNDO
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!state.canRedo}
        >
          REDO
        </button>
      </div>
    </div>
  );
};
