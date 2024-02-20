import React, { useState } from "react";
import { Editor } from 'primereact/editor';

function TextEditor() {
    const [text, setText] = useState('');

    return (
        <div className="card">
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
        </div>
    )
}

export default TextEditor