import { UserLogin } from '../contexts/Login/types';

export interface UserLoginMethods {
  setData: (loginState: UserLogin) => void;
  clearData: () => void;
  getData: () => UserLogin | null;
}
