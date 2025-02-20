import React from "react";

// import component content item
import NoteItemContent from "./NoteItemContent";
// import component action button pada item
import NoteItemAction from "./NoteItemAction";

function NoteItem({
    id,
    title,
    body,
    archived,
    createdAt,
    onDelete,
    onArchive,
}) {
    const showFormatDate = (date) => {
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        return new Date(date).toLocaleDateString("id-ID", options);
    };

    return (
        <div className="note-item">
            <NoteItemContent
                title={title}
                body={body}
                createAt={showFormatDate(createdAt)}
            />
            <NoteItemAction
                id={id}
                onDelete={onDelete}
                onArchive={onArchive}
                archived={archived}
            />
        </div>
    );
}

export default NoteItem;
