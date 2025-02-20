import React from "react";

// import element input search
import NoteHeaderInput from "./NoteHeaderInput";

// component untuk header
function NoteHeader({ onSearch }) {
    return (
        <div className="note-header">
            <h1>My Note</h1>
            <NoteHeaderInput onSearch={onSearch} />
        </div>
    );
}

export default NoteHeader;
