import React from "react";
import "./Sidebar.css";
import { FaRegTrashAlt } from "react-icons/fa"
import { FaRegStickyNote } from "react-icons/fa"

const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  setActiveNote,
  activeNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button onClick={onAddNote}><FaRegStickyNote /></button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            key={note.id}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button  onClick={() => onDeleteNote(note.id)}><FaRegTrashAlt /></button>
            </div>
            <p>{note.content && note.content.substr(0, 60) + "..."}</p>
            <small className="note-meta">
              {new Date(note.modDate).toLocaleDateString("ja-JP", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
