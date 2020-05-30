import { createSelector } from 'reselect'

export const getNoteText = state => state.notes.note;

export const notesList = state => state.notes.list;

export const getNotesList = createSelector(notesList, list => list.filter(note => note.text.startsWith('foo')));

export const getEditor = state => state.editor;

