import { createSelector } from 'reselect'

export const getNoteText = state => state.notes.note;

export const notesList = state => state.notes.list;

export const getNotesList = createSelector(notesList, list => list.filter(note => note.text.startsWith('foo')));

export const getEditor = state => state.editor;

export const getLoginForm = state => state.loginForm;

export const isAuthorized = state => !!state.session.token;

export const isAdmin = state => state.session.user && state.session.user.roles.includes('admin');