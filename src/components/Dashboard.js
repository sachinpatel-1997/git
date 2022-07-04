import React from "react";
 import PropTypes from "prop-types";
 import { connect } from "react-redux";
import App from "./App";
import { ReadPage } from "./Read";
import { CreatePage } from "./Create";
// import AddUserComponent from "./AddUserComponent";



// import Dash from "./JargonList";

const Dashboard = ({ auth: { user } }) => {
 
	return (
  
		<div style={{ marginTop: "5rem", textAlign: "center" }}>
			<h1>Name: {user && user.name}</h1>
            <h1>Email: {user && user.email}</h1>
            <h1>token: {user && user.token}</h1>
            <h1>role: {user && user.role}</h1>
          
		<App/>
		<CreatePage/>
		<ReadPage/>
		</div>    
	)
};
Dashboard.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);


// import React from 'react';
// import UserListing from '../components/CustomerList';
// import UpdateDetails from '../components/UpdateUser';
// import ViewDetails from '../components/DetailsComponent';
// import AddUser from '../components/AddUserComponent';
// // import './App.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";

// function Dashboard() {
//   return (
//     <Router>
//       <Route exact path={["/", "/defaultPath"]} component={UserListing} />
//       <Route exact path={["/update/:id"]} component={UpdateDetails} />
//       <Route exact path={["/details/:id"]} component={ViewDetails} />
//       <Route exact path={["/add"]} component={AddUser} />
//     </Router>
//   );
// }

// export default Dashboard;