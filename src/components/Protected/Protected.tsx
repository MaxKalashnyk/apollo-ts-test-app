// import React from 'react';
// import { Route } from 'react-router-dom';

// export const ProtectedRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
//   );
// };

import React from 'react';

export const ProtectedRoute: React.FC = () => <div>ProtectedRoute</div>;
