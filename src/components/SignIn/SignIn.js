import React from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({ email: '', password: '' });
    } catch(error) {
      console.log(error);
    }

    this.setState({ email: '', password: '' });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            type='email' 
            value={email}
            label='email'
            handleChange={this.handleChange}
            required
          />

          <FormInput 
            name='password' 
            type='password' 
            value={password}
            label='password'
            handleChange={this.handleChange} 
            required
          />

          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;