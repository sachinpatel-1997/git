// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import PropTypes from "prop-types";
// export const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//          localStorage.getItem('token')
//         // localStorage.getItem("user") === "user"
//             ? <Component {...props} />
//             : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//     )} />
// )

// PrivateRoute.propTypes = {
// 	component: PropTypes.object.isRequired,
// 	location: PropTypes.object.isRequired,
// 	//  	isAuthenticated: PropTypes.bool.isRequired,
// 	//  location: PropTypes.object.isRequired
// 	 };
