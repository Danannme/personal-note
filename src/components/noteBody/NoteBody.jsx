import React, { useDeferredValue } from "react";

// import notelist dan input add note
import NoteBodyInput from "./NoteBodyInput";
import NoteList from "./NoteList";

function NoteBody({ notes, archivedNote, onDelete, onArchive, onAddNote }) {
    return (
        <div className="note-body">
            <NoteBodyInput onAddNote={onAddNote} />
            <NoteList notes={notes} onDelete={onDelete} onArchive={onArchive}>
                Notes
            </NoteList>
            <NoteList
                notes={archivedNote}
                onDelete={onDelete}
                onArchive={onArchive}
            >
                Archive
            </NoteList>
        </div>
    );
}

export default NoteBody;
