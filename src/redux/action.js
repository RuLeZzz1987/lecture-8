import * as Types from './actionTypes';
import axios from "axios";

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

export const setArticle = article => ({
  type: Types.SET_ARTICLE,
  payload: article
});

export const setArticles = articles => ({
  type: Types.SET_ARTICLES,
  payload: articles
});

export const loadArticle = (id) => (dispatch) => {
  axios
    .get(`http://localhost:4000/articles/${id}`)
    .then(({data: article}) => dispatch(setArticle(article)));
};

export const loadArticles = (search) => (dispatch) => {
  axios
    .get(`http://localhost:4000/articles/${search}`)
    .then(({data: articles}) => dispatch(setArticles(articles)));
};