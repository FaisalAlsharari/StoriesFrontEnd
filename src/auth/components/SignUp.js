import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../api'
import messages from '../messages'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConfirmation: '',
      img: '',
      bio: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signUpSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', username: '', password: '', passwordConfirmation: '', img: '', bio: '' })
        alert(messages.signUpFailure, 'danger')
      })
  }

  render () {
    const { email, username, password, passwordConfirmation, img, bio } = this.state

    return (
      <div class="form">
        
      <form className='auth-form' id="SU" onSubmit={this.onSignUp}>
        <h3>Sign Up</h3>

        {/* <label htmlFor="email">Email</label> */}
        <input
          required
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
        />
        {/* <label htmlFor="username">Username</label> */}
        <input
          required
          name="username"
          value={username}
          type="username"
          placeholder="Username"
          onChange={this.handleChange}
        />
        {/* <label htmlFor="password">Password</label> */}
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        {/* <label htmlFor="passwordConfirmation">Confirm Password</label> */}
        <input
          required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={this.handleChange}
        />
        {/* <label htmlFor="img">Image</label> */}
        <input
          name="img"
          value={img}
          type="img"
          placeholder="Image"
          onChange={this.handleChange}
        />
        {/* <label htmlFor="bio">bio</label> */}
        <input
          name="bio"
          value={bio}
          type="bio"
          placeholder="bio"
          onChange={this.handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
      </div>
    )
  }
}

export default withRouter(SignUp)
