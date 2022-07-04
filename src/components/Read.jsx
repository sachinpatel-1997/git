import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUsers, deleteUserById } from "../actions/users";
import PropTypes from "prop-types";
class Read extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getUsers();
  }

  handleDelete = (id) => {
    const result = window.confirm("Are you sure to delete?");
    if (result) {
      this.props.deleteUserById(id);
    }
  };

  render() {
    const { items } = this.props;
    return (
      <React.Fragment>
        <h5 style={{ textAlign: "center" }} className="my-4">
          ReactJs CRUD App With React Redux Thunk
        </h5>
        <div className="col-md-6 offset-md-3">
          <Link to={`/create`} className="btn btn-success">
            Create
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sr.No.</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {items ? items.map((item, index) => {
                  console.log(item)
                return (
                  <tr key={index}>
                      
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td>
                      <Link
                        to={`/update/${item._id}`}
                        className="btn btn-success mx-1"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger mx-1"
                        onClick={() => this.handleDelete(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })};
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

Read.propTypes = {
	getUsers: PropTypes.func.isRequired,
	deleteUserById: PropTypes.func,
    items: PropTypes.array,
  
};

function mapState(state) {
  const { items } = state.users;
  return { items };
}

const actionCreators = {
  getUsers: getUsers,
  deleteUserById: deleteUserById,
};

const connected = connect(mapState, actionCreators)(Read);
export { connected as ReadPage };