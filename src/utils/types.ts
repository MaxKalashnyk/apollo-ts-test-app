import { LoginState } from '../contexts/Login/types';

export interface UserLoginMethods {
  setData: (loginState: LoginState) => void;
  clearData: () => void;
  getData: () => LoginState | null;
}
