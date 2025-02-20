import React from "react";

// component untuk element input search
class NoteHeaderInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: "",
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    // method untuk menangai value input search
    onInputChange(event) {
        this.setState(() => {
            return {
                keyword: event.target.value,
            };
        });
    }

    render() {
        return (
            <div className="note-header-input">
                <input
                    type="text"
                    placeholder="Cari note..."
                    className="input-header"
                    value={this.state.keyword}
                    onChange={() => {
                        this.onInputChange(event);
                        this.props.onSearch(event.target.value);
                    }}
                />
            </div>
        );
    }
}

export default NoteHeaderInput;
