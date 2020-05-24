export interface ILoginContext {
  children?: React.ReactNode;
}

export interface LoginState {
  isLoggedIn: boolean;
  authToken?: string;
  email?: string;
  id?: string;
  imageURL?: string;
  fullName?: string;
}

export type LoginActionType = 'login' | 'logout' | 'noop';

export interface LoginAction {
  type: LoginActionType;
  payload?: Partial<LoginState>;
}

export type LoginDispatch = (arg0: LoginAction) => LoginAction;
