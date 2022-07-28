import "./AddNote.css";
import { useState } from "react";

export default function AddNote({handleAddNote}) {
    const [noteText, setNoteText] = useState("");
    const characterLimit = 200;

    const handleChange = (e) => {
        if (characterLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value);
        }
    };

    const handleSave = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText("");
        }
    };

    return (
        <div className="add-note">
            <textarea
                rows="10"
                cols="8"
                placeholder="Type to add note ..."
                value={noteText}
                onChange={handleChange}
            >
            </textarea>
            <div className="add-note-footer">
                <span>{characterLimit - noteText.length} Remaining</span>
                <button 
                    className="save-btn"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    )
}