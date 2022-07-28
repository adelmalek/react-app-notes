import "./NoteList.css";
import Note from "../Note/Note";

export default function NoteList({notes}) {
    return (
        <div className="note-list">
            {notes.map(note => <Note id={note.id} text={note.text} date={note.date} key={note.id}/>)}
        </div>
    )
}