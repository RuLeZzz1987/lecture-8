import React from "react";
import T from 'prop-types';


const Notes = ({ editNote, removeNote, editor, changeEditor, saveNote, notes }) => (<div>
    <h3>Notes</h3>
    <ul>
      {notes.map(note =>
        editor.id !== note.id ?
          <li key={note.id}>
            {note.text}
            <button onClick={() => editNote(note)}>edit</button>
            <button onClick={() => removeNote(note.id)}>remove</button>
          </li>
          :
          <li key={note.id}>
            <input value={editor.text} onChange={e => changeEditor(e.currentTarget.value)}/>
            <button onClick={() => saveNote(editor)}>save</button>
            <button onClick={() => removeNote(note.id)}>remove</button>
          </li>
      )}
    </ul>
  </div>
);

Notes.propTypes = {
  editNote: T.func.isRequired,
  removeNote: T.func.isRequired,
  editor: T.shape({
    text: T.string,
    id: T.number
  }).isRequired,
  changeEditor: T.func.isRequired,
  saveNote: T.func.isRequired,
  notes: T.arrayOf(T.shape({
    text: T.string.isRequired,
    id: T.number.isRequired
  })).isRequired
};

export default Notes;