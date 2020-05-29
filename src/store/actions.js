import { createActions } from 'redux-actions';

const constants = [
  'GET_USER_INFO',
  'GET_USER_INFO_SUCCESS',
  'SET_MENU_CONTENT',
  'HANDLE_ERROR',
];

const actions = createActions(...constants);

export default { ...actions };
