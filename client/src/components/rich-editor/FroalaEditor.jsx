import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";

import FroalaEditorComponent from "react-froala-wysiwyg";
import { useState, useEffect } from "react"; // <<-- TAMBAHAN: useState dan useEffect -->>

const config = {
  placeholderText: "Edit your content here",
  // ... konfigurasi toolbar dan plugins lainnya ...
  pluginsEnabled: [
    "align",
    "charCounter",
    "codeView",
    "colors",
    "draggable",
    "emoticons",
    "fontFamily",
    "fontSize",
    "fullscreen",
    "inlineStyle",
    "lineBreaker",
    "link",
    "lists",
    "paragraphFormat",
    "paragraphStyle",
    "quote",
    "save",
    "table",
    "url",
    "wordPaste",
  ],
  toolbarButtons: {
    moreText: {
      buttons: ["bold", "italic", "underline", "strikeThrough", "subscript", "superscript", "fontFamily", "fontSize", "textColor", "backgroundColor"],
    },
    moreParagraph: {
      buttons: ["alignLeft", "alignCenter", "alignRight", "alignJustify", "formatOL", "formatUL", "paragraphFormat", "paragraphStyle", "lineHeight", "outdent", "indent", "quote"],
    },
    moreRich: {
      buttons: ["insertLink", "insertTable", "emoticons", "insertHR"],
    },
    moreMisc: {
      buttons: ["undo", "redo", "fullscreen", "print", "getPDF", "spellChecker", "selectAll", "html", "help"],
    },
  },
  imagePaste: false,
  imageUpload: false,
  imageInsertButtons: [],
};

// <<-- KOMPONEN REUSABLE FROALA EDITOR -->>
const FroalaEditor = ({ initialContent = "", onContentChange }) => {
  // State internal untuk konten editor
  const [content, setContent] = useState(initialContent);

  // Hook ini memastikan konten internal editor di-reset saat prop initialContent berubah
  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  // Handler untuk setiap perubahan di editor
  const handleFroalaChange = (newContent) => {
    setContent(newContent);
    // Memicu callback prop yang dikirim dari komponen induk
    onContentChange(newContent);
  };

  return (
    <FroalaEditorComponent
      tag="textarea"
      config={config}
      model={content} // <<-- BINDING KONTEN KE STATE -->>
      onModelChange={handleFroalaChange} // <<-- MENGAMBIL PERUBAHAN KONTEN -->>
    />
  );
};

export default FroalaEditor;
