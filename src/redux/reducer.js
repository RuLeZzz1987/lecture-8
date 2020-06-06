import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  setArticle,
  setArticles,
  addNote,
  removeNote,
  saveNote,
  changeNote,
  changeEditor,
  editNote,
  loginAction, changeLoginFormField, loginActionError, logoutAction,

} from "./action";

const notesReducer = createReducer([], {
  [addNote]: (state, action) => [...state, action.payload],
  [removeNote]: (state, action) => state.filter(note => note.id !== action.payload),
  [saveNote]: (state, action) => state.map(note => note.id !== action.payload.id ? note : {...action.payload})
});

const noteReducer = createReducer('', {
  [changeNote]: (state, action) => action.payload
});

const noteEditor = createReducer({id: null, text: ''}, {
  [editNote]: (state, action) => action.payload,
  [saveNote]: () => ({id: null, text: ''}),
  [changeEditor]: (state, action) => ({...state, text: action.payload})
});

const article = createReducer(null, {
  [setArticle]: (state, action) => action.payload
});

const articles = createReducer([], {
  [setArticles]: (state, action) => action.payload
});

const user = createReducer({}, {
  [loginAction]: (state, {payload}) => payload.user,
  [logoutAction]: () => {}
});

const token = createReducer(null, {
  [loginAction]: (state, {payload}) => payload.token,
  [logoutAction]: () => null
});

const loginError = createReducer(null, {
  [loginActionError]: (state, {payload}) => payload.message
});

const loginForm = createReducer({email: '', password: ''}, {
  [changeLoginFormField]: (state, {payload}) => ({...state, [payload.name]: payload.value})
});


export default combineReducers({
  notes: combineReducers({
    note: noteReducer,
    list: notesReducer,
  }),
  session: combineReducers({
    user,
    token,
    error: loginError
  }),
  loginForm,
  editor: noteEditor,
  article,
  articles
});