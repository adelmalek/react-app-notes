import "./Note.css";
import { MdDeleteForever } from "react-icons/md";

export default function Note({id, text, date}) {
    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <span>{date}</span>
                <MdDeleteForever className="delete-btn" size="1.5rem"/>
            </div>
        </div>
    )
}