import React from 'react';
import {Route, Navigate} from 'react-router-dom';
import {isAuthenticated} from '../../api/authService';
const PrivateRoute=({ element:Element,...rest }) => {
return isAuthenticated() ? <Element {...rest}/>:<Navigate to="/login"/>;
};
export default PrivateRoute;