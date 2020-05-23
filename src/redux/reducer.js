import * as Types from './actionTypes';
import { combineReducers } from "redux";

const notesReducer = (state = [], action) => {
  switch (action.type) {
    case Types.ADD_NOTE:
      return [...state, action.payload];
    case Types.REMOVE_NOTE:
      return state.filter(note => note.id !== action.payload.id);
    case Types.SAVE_NOTE_CHANGES:
      return state.map(note => note.id !== action.payload.note.id ? note : {...action.payload.note});
    default:
      return state;
  }
};
const noteReducer = (state = '', action) => {
  switch (action.type) {
    case Types.CHANGE_NOTE:
      state = action.payload.noteDraft;
      return state;
    default:
      return state;
  }
};

const noteEditor = (state = {id: null, text: ''}, action) => {
  switch (action.type) {
    case Types.START_EDIT:
      return action.payload.note;
    case Types.SAVE_NOTE_CHANGES:
      return {id: null, text: ''};
    case Types.CHANGE_EDITOR:
      return {...state, text: action.payload.text};
    default:
      return state;
  }
};

export default combineReducers({
  note: noteReducer,
  notes: notesReducer,
  editor: noteEditor
});