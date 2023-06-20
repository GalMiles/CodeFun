import React, { useEffect } from 'react';
import {EditorView, basicSetup} from "codemirror"
import {javascript} from "@codemirror/lang-javascript"

function CodeEditor() {


    return (
        <div>
            <textarea id='mirrorEditor' />
        </div>
    )
}

export default CodeEditor