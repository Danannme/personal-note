import React from "react";

// component untuk input note baru
class NoteBodyInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            isi: "",
            charLeft: 50,
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onTextareaChange = this.onTextareaChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // method untuk menangani value title input
    onInputChange(event) {
        // if else untuk input title tidak bisa melebihi 50 karakter
        if (event.target.value.length <= 50) {
            this.setState(() => {
                return {
                    title: event.target.value,
                    charLeft: 50 - event.target.value.length,
                };
            });
        }
    }

    // method untuk menangani value isi input
    onTextareaChange(event) {
        this.setState(() => {
            return {
                isi: event.target.value,
            };
        });
    }

    // method untuk menangani sumbit pada form
    onSubmit(event) {
        event.preventDefault();
        this.props.onAddNote(this.state.title, this.state.isi); // fungsi AddNote untul menambahkan data dari from ke data notes
    }

    render() {
        return (
            <div className="note-body-input">
                <p className="input-limit">
                    Sisa Karakter: {this.state.charLeft}
                </p>

                <form onSubmit={this.onSubmit}>
                    {/* onSubmit untuk menambah value form ke data notes */}
                    <input
                        type="text"
                        className="input-body"
                        placeholder="Masukkan judul note..."
                        value={this.state.title}
                        onChange={this.onInputChange}
                    />
                    <textarea
                        className="textarea-body"
                        placeholder="Masukkan isi note..."
                        value={this.state.isi}
                        onChange={this.onTextareaChange}
                    ></textarea>
                    <button type="submit">Add Note</button>
                </form>
            </div>
        );
    }
}

export default NoteBodyInput;
