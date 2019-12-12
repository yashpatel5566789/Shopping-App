import React from "react";

export class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password1: ""
    };
  }

  render() {
    const { username,email, password, password1 } = this.state;
    if (password !== password1) {
        alert("Passwords don't match");
    } else {
        // make API call
    }

    return (
      <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">User Name</label>
        <input
          name="Username"
          type="text"
          placeholder="Enter your User Name"
          value={username}
          onChange={this.handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={this.handleChange}
        />
        <label htmlFor="email">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={this.handleChange}
        />
        <label htmlFor="email">Re-enter Password</label>
        <input
          name="re-enter password"
          type="password"
          placeholder="Enter your re-enter password"
          value={password1}
          onChange={this.handleChange}
        />
        <button className="login" type="submit">Login</button>
        <button id="signup" type="submit">Signup
        </button>
      </form>
    );
  }
}