import React from "react";

// import NoteItem component untuk menampilkan data notes
import NoteItem from "./NoteItem";

function NodeList({ children, notes, onDelete, onArchive }) {
    return (
        <div className="note-list">
            <h2 className="note-list-title">{children}</h2>
            <div className="note-list-item">
                {notes.length != 0 ? (
                    notes.map((note) => (
                        <NoteItem
                            key={note.id}
                            onDelete={onDelete}
                            onArchive={onArchive}
                            {...note}
                        />
                    ))
                ) : (
                    <p>Tidak Ada Catatan</p>
                )}
            </div>
        </div>
    );
}

export default NodeList;
