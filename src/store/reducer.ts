import reducerGenerator from './utils';
import actions from './actions';

const {
  getUserInfoSuccess,
  setMenuContent,
} = actions;

export default interface InitialStateInterface {
  userInfo: {
    avatar_url: string;
    email: string;
    firstname: string;
    lastname: string;
    nmls: number | null;
    phone_number: string;
  };
  menuContentId: string;
}

const initialState: InitialStateInterface = {
  userInfo: {
    avatar_url: '',
    email: '',
    firstname: '',
    lastname: '',
    nmls: null,
    phone_number: '',
  },
  menuContentId: 'home-page',
};

const HANDLERS = {
  [getUserInfoSuccess]: (state: object, payload: any) => ({
    ...state,
    userInfo: payload,
  }),
  [setMenuContent]: (state: object, payload: any) => ({
    ...state,
    menuContentId: payload,
  }),
};

const reducer = reducerGenerator(initialState, HANDLERS);

export {
  reducer,
  initialState,
};
