import React from 'react';
import { LoginAction, LoginDispatch, LoginState, ILoginContext } from './types';

const defaultLoginState: Readonly<LoginState> = {
  isLoggedIn: false,
};

const LoginStateContext = React.createContext<LoginState>(defaultLoginState);
const LoginDispatchContext = React.createContext<LoginDispatch>(() => ({
  type: 'noop',
}));

export const loginReducer: React.Reducer<LoginState, LoginAction> = (
  state,
  action
) => {
  switch (action.type) {
    case 'login':
      return { ...action?.payload, isLoggedIn: true };
    case 'logout':
      return { ...defaultLoginState };
    case 'noop':
      return { ...state };
    default:
      throw new Error(`Unsupported action-type within Login: ${action.type}`);
  }
};

export const LoginContext: React.FC<ILoginContext> = ({ children }) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<LoginState, LoginAction>
  >(loginReducer, defaultLoginState);

  return (
    <LoginDispatchContext.Provider value={dispatch as LoginDispatch}>
      <LoginStateContext.Provider value={state}>
        {children}
      </LoginStateContext.Provider>
    </LoginDispatchContext.Provider>
  );
};

export const useLoginState = (): LoginState => {
  const state = React.useContext<LoginState>(LoginStateContext);
  if (!state) {
    throw new Error('useLoginState must be used within the LoginContext');
  }
  return state;
};

export const useLoginDispatch = (): LoginDispatch => {
  const dispatch = React.useContext<LoginDispatch>(LoginDispatchContext);
  if (!dispatch) {
    throw new Error('useLoginDispatch must be used within the LoginContext');
  }
  return dispatch;
};
