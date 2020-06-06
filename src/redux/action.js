import axios from "axios";
import { createAction } from '@reduxjs/toolkit';
import { signIn, signUp } from '../api';
import { getLoginForm, getToken } from './selectors';

export const removeNote = createAction('REMOVE_NOTE');
export const saveNote = createAction('SAVE_NOTE_CHANGES');
export const addNote = createAction('ADD_NOTE', text => ({
  payload: {text, id: Date.now()}
}));
export const changeNote = createAction('CHANGE_NOTE');
export const editNote = createAction('START_EDIT');
export const changeEditor = createAction('CHANGE_EDITOR');
export const setArticle = createAction('SET_ARTICLE');
export const setArticles = createAction('SET_ARTICLES');
export const loginAction = createAction('LOGIN_ACTION');
export const loginActionError = createAction('LOGIN_ACTION_ERROR');
export const changeLoginFormField = createAction('CHANGE_LOGIN_FORM_FIELD');
export const logoutAction = createAction('LOGOUT');


export const loadArticle = (id) => (dispatch, getState) => {
  const token = getToken(getState());
  axios
    .get(`http://localhost:4000/articles/${id}`, {
      headers: {Authorization: `Bearer ${token}`}
    })
    .then(({data: article}) => dispatch(setArticle(article)));
};

export const loadArticles = (search) => (dispatch, getState) => {
  const token = getToken(getState());
  axios
    .get(`http://localhost:4000/articles/${search}`, {
      headers: {Authorization: `Bearer ${token}`}
    })
    .then(({data: articles}) => dispatch(setArticles(articles)));
};

export const login = () => (dispatch, getState) => {
  const loginForm = getLoginForm(getState());
  signIn(loginForm)
    .then(
      ({data}) => {
        dispatch(loginAction(data));
      },
      ({response}) => {
        dispatch(loginActionError({message: response.data.message}))
      }
    );
};