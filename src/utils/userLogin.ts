import { UserLoginMethods } from './types';

export const userLogin: UserLoginMethods = {
  setData: (loginState) => {
    localStorage.setItem('userData', JSON.stringify(loginState));
  },
  clearData: () => {
    localStorage.removeItem('userData');
  },
  getData: () => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      return JSON.parse(userData);
    }
    return null;
  },
};
