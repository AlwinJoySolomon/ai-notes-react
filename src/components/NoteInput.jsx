import { useState } from "react";

function NoteInput({ onAddNote }) {
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    if (note.trim() === "") return;

    onAddNote(note);
    setNote("");
  };

  return (
    <div className="note-input">
      <textarea
        placeholder="Write your note here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={handleSubmit}>Add Note</button>
    </div>
  );
}

export default NoteInput;