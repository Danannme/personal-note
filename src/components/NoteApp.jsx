import React from "react";

// import header section
import NoteHeader from "./noteHeader/NoteHeader";

// import body sectoin
import NoteBody from "./noteBody/NoteBody";

// import data notes
import { getData } from "../data/data";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getData(),
            searchKeyword: "",
        };

        this.archivedNotes = [];
        this.onSearch = this.onSearch.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onArchive = this.onArchive.bind(this);
        this.onAddNote = this.onAddNote.bind(this);
    }

    // method untuk mencari / filter sesuai keyword user
    onSearch(keyword) {
        this.setState({ searchKeyword: keyword });
    }

    // method untuk menghapus note item dalam data notes
    onDelete(id, archived) {
        if (archived == false) {
            const notes = this.state.notes.filter((note) => note.id != id);
            this.setState({ notes });
        }
        if (archived == true) {
            this.archivedNotes = this.archivedNotes.filter(
                (note) => note.id != id
            );
            this.setState({ notes: this.state.notes });
        }
    }

    //method untuk mengharsipkan / menonarsipkan note item
    onArchive(id, archived) {
        if (archived == false) {
            this.archivedNotes.push({
                ...this.state.notes.find((note) => note.id == id),
                archived: true,
            });

            this.setState({
                notes: this.state.notes.filter((note) => note.id !== id),
            });
        }
        if (archived == true) {
            const unArchiveNote = this.archivedNotes.find(
                (note) => note.id == id
            );
            this.archivedNotes = this.archivedNotes.filter(
                (note) => note.id != id
            );
            const notes = [
                ...this.state.notes,
                { ...unArchiveNote, archived: false },
            ];
            this.setState({ notes });
        }
    }

    // untuk menambahkan note item ke dalam data notes
    onAddNote(title, isi) {
        const newNote = {
            id: +new Date(),
            title,
            body: isi,
            createdAt: new Date().toISOString(),
            archived: false,
        };
        this.setState({ notes: [...this.state.notes, newNote] });
    }

    render() {
        // hasil pencarian pada notes
        const filteredNotes = this.state.notes.filter((note) => {
            if (this.state.notes.length != 0) {
                return note.title
                    .toLowerCase()
                    .includes(this.state.searchKeyword.toLowerCase());
            }
        });

        // hasil pencarian pada archived notes
        const filteredArchivNotes = this.archivedNotes.filter((note) => {
            if (this.archivedNotes.length != 0) {
                return note.title
                    .toLowerCase()
                    .includes(this.state.searchKeyword.toLowerCase());
            }
        });

        return (
            <>
                <NoteHeader onSearch={this.onSearch} />
                <NoteBody
                    notes={
                        this.state.searchKeyword.length != 0
                            ? filteredNotes
                            : this.state.notes
                    }
                    archivedNote={
                        this.state.searchKeyword.length != 0
                            ? filteredArchivNotes
                            : this.archivedNotes
                    }
                    onDelete={this.onDelete}
                    onArchive={this.onArchive}
                    onAddNote={this.onAddNote}
                />
            </>
        );
    }
}

export default NoteApp;
