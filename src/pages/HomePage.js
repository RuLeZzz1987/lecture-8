import React from 'react';
import { connect } from 'react-redux';
import { addNote, changeNote, removeNote, editNote, saveNote, changeEditor } from "../redux/action";

const HomePage = ({notes = [], noteText, addNote, changeNote, remove, editor, editNote, saveNote, changeEditor}) => (
  <>
    <h1>Home Page Component</h1>
    <div>
      <label>
        Add note:
        <input type="text" value={noteText} onChange={(e) => changeNote(e.currentTarget.value)}/>
        <button onClick={() => addNote(noteText)}> Add Note</button>
      </label>
      <div>
        <h3>Notes</h3>
        <ul>
          {notes.map(note =>
            editor.id !== note.id ?
              <li key={note.id}>
                {note.text}
                <button onClick={() => editNote(note)}>edit</button>
                <button onClick={() => remove(note.id)}>remove</button>
              </li>
              :
              <li key={note.id}>
                <input value={editor.text} onChange={e => changeEditor(e.currentTarget.value)}/>
                <button onClick={() => saveNote(editor)}>save</button>
                <button onClick={() => remove(note.id)}>remove</button>
              </li>
          )}
        </ul>
      </div>
    </div>
  </>
);

const mapStateToProps = (state, props) => {
  return {
    notes: state.notes,
    noteText: state.note,
    editor: state.editor,
  }
};

const mapDispatchToProps = dispatch => ({
  addNote: (text) => {
    if (!text) return;

    dispatch(addNote(text));
    dispatch(changeNote(''));
  },
  changeNote: (text) => dispatch(changeNote(text)),
  remove: id => dispatch(removeNote(id)),
  editNote: note => dispatch(editNote(note)),
  saveNote: note => dispatch(saveNote(note)),
  changeEditor: text => dispatch(changeEditor(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);