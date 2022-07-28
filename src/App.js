import './App.css';

import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import NoteList from "./Components/NoteList/NoteList";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "2022.07.28."
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "2022.07.29."
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "2022.07.30."
    }
  ]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const notDeletedNotes = notes.filter(note => note.id !== id);
    setNotes(notDeletedNotes)
  };

  const toggleMode = () => {
    setDarkMode(darkMode => !darkMode);
  };

  return (
    <div className={darkMode? "dark" : "App"}>
      <Header handleToggleMode={toggleMode}/>
      <Search handleSearchNote={setSearchText}/>
      <NoteList 
        notes={notes.filter(note => note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
