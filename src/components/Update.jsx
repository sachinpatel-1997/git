import React from "react";
import { connect } from "react-redux";
import { getUserById, updateUserById } from "../actions/users";
import PropTypes from "prop-types";
class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      role: "",
      errors: {},
      submitted: false,
    };
  }

  componentDidMount() {
    this.props.getUserById(this.props.match.params.id);
  }

  UNSAFE_componentWillReceiveProps(nextProps, prevState) {
    if (nextProps.item !== undefined) {
      this.setState({ prevState, ...nextProps.item });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      const { name, email, password, role } = this.state;
      this.handleValidate({ name, email, password, role });
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { name, email, password, role } = this.state;
    if (this.handleValidate({ name, email, password, role })) {
      this.props.updateUser(
        this.props.match.params.id,
        {
          name,
          email,
          password,
          role
        },
        this.props.history
      );
    }
  };

  handleValidate = (values) => {
    const errors = {};
    let isValid = true;
    if (!values.name) {
      isValid = false;
      errors.name = "Please enter name";
    }
    if (!values.email) {
      isValid = false;
      errors.email = "Please enter email address";
    }
    if (!values.password) {
        isValid = false;
        errors.password = "Please enter password";
      }
      if (!values.role) {
        isValid = false;
        errors.role = "Please enter role";
      }
    this.setState({ errors: errors });
    return isValid;
  };

  render() {
    const { loading } = this.props;
    const { name, email, password, role, errors, submitted } = this.state;
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>Update User</h1>
        <div className="row">
          <form className="col-md-6 offset-md-3" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className={
                  "form-control" +
                  (submitted && !!errors.name ? " is-invalid" : "")
                }
                name="name"
                value={name}
                onChange={this.handleChange}
              />
              {submitted && !!errors.name && (
                <div className="invalid-feedback">Name is required</div>
              )}
            </div>

            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className={
                  "form-control" +
                  (submitted && !!errors.email ? " is-invalid" : "")
                }
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              {submitted && !!errors.email && (
                <div className="invalid-feedback">Email is required</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={
                  "form-control" +
                  (submitted && !!errors.password ? " is-invalid" : "")
                }
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              {submitted && !!errors.password && (
                <div className="invalid-feedback">Password is required</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="role">Role</label>
              <input
                type="text"
                className={
                  "form-control" +
                  (submitted && !!errors.role ? " is-invalid" : "")
                }
                name="role"
                value={role}
                onChange={this.handleChange}
              />
              {submitted && !!errors.role && (
                <div className="invalid-feedback">Password is required</div>
              )}
            </div>
            <div className="form-group my-2">
              <button className="btn btn-primary">Submit</button>
              {loading && (
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              )}
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
Update.propTypes = {
	getUserById: PropTypes.func.isRequired,
	match: PropTypes.bool,
    item: PropTypes.bool,
    updateUser: PropTypes.bool,
    history: PropTypes.bool,
    loading: PropTypes.bool
};
function mapState(state) {
  const { loading, item } = state.users;
  return { loading, item };
}

const actionCreators = {
  getUserById: getUserById,
  updateUser: updateUserById,
};

const connected = connect(mapState, actionCreators)(Update);
export { connected as UpdatePage };