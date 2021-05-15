import React from "../_snowpack/pkg/react.js";
import Editor from "../_snowpack/pkg/@monaco-editor/react.js";
;
export const MindmapEditor = (props) => {
  return /* @__PURE__ */ React.createElement(Editor, {
    theme: "vs-dark",
    defaultLanguage: "yaml",
    defaultValue: props.defaultValue,
    options: {
      fontSize: 18,
      suggestFontSize: 16,
      fontFamily: "monospace",
      minimap: {enabled: false},
      scrollbar: {
        vertical: "hidden",
        horizontal: "hidden"
      },
      overviewRulerLanes: 0,
      quickSuggestions: true,
      quickSuggestionsDelay: 0
    }
  });
};
