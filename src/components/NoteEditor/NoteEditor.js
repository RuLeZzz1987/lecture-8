import React from "react";
import T from 'prop-types';

const NoteEditor = ({ noteText, addNote, changeNote }) => {
  return (
    <label>
      Add note:
      <input type="text" value={noteText} onChange={(e) => changeNote(e.currentTarget.value)}/>
      <button onClick={() => addNote(noteText)}> Add Note</button>
    </label>
  );
};

NoteEditor.propTypes = {
  noteText: T.string.isRequired,
  addNote: T.func.isRequired,
  changeNote: T.func.isRequired
};

export default NoteEditor;