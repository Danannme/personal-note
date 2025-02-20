import React from "react";

// component untuk action button pada setiap note item
function NoteItemAction({ id, onDelete, onArchive, archived }) {
    return (
        <div className="note-item-action">
            <button
                className="action-delete"
                onClick={() => onDelete(id, archived)}
            >
                Delete
            </button>
            {archived ? ( // untuk menangani tombol yang akan tampil archive / unarchive
                <button
                    className="action-archive"
                    onClick={() => onArchive(id, archived)}
                >
                    Unarchive
                </button>
            ) : (
                <button
                    className="action-archive"
                    onClick={() => onArchive(id, archived)}
                >
                    Archive
                </button>
            )}
        </div>
    );
}

export default NoteItemAction;
