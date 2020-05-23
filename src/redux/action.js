import * as Types from './actionTypes';

export const addNote = text => ({
  type: Types.ADD_NOTE,
  payload: { text, id: Date.now() }
});

export const removeNote = id => ({
  type: Types.REMOVE_NOTE,
  payload: { id }
});

export const changeNote = noteDraft => ({
  type: Types.CHANGE_NOTE,
  payload: { noteDraft }
});

export const editNote = note => ({
  type: Types.START_EDIT,
  payload: {note}
});

export const saveNote = note => ({
  type: Types.SAVE_NOTE_CHANGES,
  payload: {note}
});

export const changeEditor = text => ({
  type: Types.CHANGE_EDITOR,
  payload: {text}
});