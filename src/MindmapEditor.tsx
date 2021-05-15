import React from 'react'
import Editor from "@monaco-editor/react";;

interface MindmapEditorProps {
    defaultValue?: string
}

export const MindmapEditor = (props: MindmapEditorProps) => {
    return <Editor
        theme="vs-dark"
        defaultLanguage="yaml"
        defaultValue={props.defaultValue}
        options={{
            fontSize: 18,
            suggestFontSize: 16,
            fontFamily: 'monospace',

            minimap: { enabled: false },
            scrollbar: {
              vertical: 'hidden',
              horizontal: 'hidden',
            },
            overviewRulerLanes: 0,
            quickSuggestions: true,
            quickSuggestionsDelay: 0,
        }}
    />
}