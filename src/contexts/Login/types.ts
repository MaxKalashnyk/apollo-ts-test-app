export interface ILoginContext {
  children?: React.ReactNode;
}

export interface UserLogin {
  authToken?: string;
  email?: string;
  id?: string;
  imageURL?: string;
  fullName?: string;
}

export interface LoginState extends UserLogin {
  isLoggedIn: boolean;
}

export type LoginActionType = 'login' | 'logout' | 'noop';

export interface LoginAction {
  type: LoginActionType;
  payload?: Partial<LoginState>;
}

export type LoginDispatch = (arg0: LoginAction) => LoginAction;
