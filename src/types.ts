export interface Route {
  name: string;
  path: string;
  component: React.FC;
  isExact?: boolean;
  isPrivate?: boolean;
  isNavBar?: boolean;
}

export enum ROUTES {
  Home = '/',
  About = '/about',
}
