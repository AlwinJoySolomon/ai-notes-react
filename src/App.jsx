import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NoteInput from "./components/NoteInput";
import NoteCard from "./components/NoteCard";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addNote = (newNote) => {
    const note = {
      id: Date.now(),
      text: newNote,
    };

    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (id, updatedText) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, text: updatedText } : note
      )
    );
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <div className="container">
        <NoteInput onAddNote={addNote} />

        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />

        <h2>Your Notes</h2>

        {filteredNotes.length === 0 ? (
          <p>No notes found.</p>
        ) : (
          <div className="notes-list">
            {filteredNotes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onDelete={deleteNote}
                onEdit={editNote}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;