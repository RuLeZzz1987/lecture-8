import axios from "axios";
import { createAction } from '@reduxjs/toolkit';

export const removeNote = createAction('REMOVE_NOTE');
export const saveNote = createAction('SAVE_NOTE_CHANGES');
export const addNote = createAction('ADD_NOTE', text => ({
  payload: { text, id: Date.now() }
}));
export const changeNote = createAction('CHANGE_NOTE');
export const editNote = createAction('START_EDIT');
export const changeEditor = createAction('CHANGE_EDITOR');
export const setArticle = createAction('SET_ARTICLE');
export const setArticles = createAction('SET_ARTICLES');

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