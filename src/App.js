import './App.css';

import { useState } from "react";
import { nanoid } from "nanoid";

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

  return (
    <div className="App">
      <NoteList notes={notes}/>
    </div>
  );
}

export default App;
