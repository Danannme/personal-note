import React from "react";

// component untuk content pada setiap note item
function NoteItemContent({ title, body, createAt }) {
    return (
        <div className="note-item-content">
            <h3 className="note-item-title">{title}</h3>
            <p className="note-item-create">{createAt}</p>
            <p className="note-item-body">{body}</p>
        </div>
    );
}

export default NoteItemContent;
