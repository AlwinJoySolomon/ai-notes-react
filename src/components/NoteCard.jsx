import { useState } from "react";

function NoteCard({ note, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);

  const handleSave = () => {
    if (editedText.trim() === "") return;

    onEdit(note.id, editedText);
    setIsEditing(false);
  };

  return (
    <div className="note-card">
      {isEditing ? (
        <>
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />

          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>{note.text}</p>

          <button onClick={() => setIsEditing(true)}>Edit</button>

          <button onClick={() => onDelete(note.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default NoteCard;