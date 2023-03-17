import React from "react";
import "./Main.css";


const Main = ({ activeNote, onUpdateNote }) => {
  const onEditNote = (key, value) => {
    onUpdateNote({
      // id: activeNote.id,
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    });
  };

  if (!activeNote)
    return <div className="no-active-note">ノートが選択されていません</div>;

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          placeholder="タイトル"
          value={activeNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
          id="title"
        />
        <textarea
          placeholder="ノート内容を記入"
          value={activeNote.content}
          onChange={(e) => onEditNote("content", e.target.value)}
          id="content"
        ></textarea>
      </div>
      </div>
  );
};

export default Main;
