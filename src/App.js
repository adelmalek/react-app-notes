import './App.css';

import { useState } from "react";
import { nanoid } from "nanoid";

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

  const [searchText, setSearchText] = useState("");

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="App">
      <Search handleSearchNote={setSearchText}/>
      <NoteList 
        notes={notes.filter(note => note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote}
      />
    </div>
  );
}

export default App;
