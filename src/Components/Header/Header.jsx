import "./Header.css";

export default function Header({handleToggleMode}) {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button 
                className="toggle-btn"
                onClick={() => handleToggleMode()}
            >
                Toggle Mode
            </button>
        </div>
    )
}