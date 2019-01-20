import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase, { initFirebase } from '@vul/core/lib/firebase'
import { API_URL } from '@vul/core/lib/constants'

const getUIConfig = () => ({
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    },
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: [
        'https://www.googleapis.com/auth/plus.login'
      ],
      customParameters: {
        prompt: 'select_account'
      }
    }
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => {
      return false
    }
  },
  credentialHelper: require('firebaseui').auth.CredentialHelper.NONE
})

class Login extends Component {
  state = {
    mounted: false
  }

  componentDidMount () {
    initFirebase()
    this.setState({ mounted: true })

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        return user.getIdToken()
          .then(token => {
            // eslint-disable-next-line no-undef
            return fetch(API_URL + '/login', {
              method: 'POST',
              // eslint-disable-next-line no-undef
              headers: new Headers({ 'Content-Type': 'application/json' }),
              credentials: 'include',
              body: JSON.stringify({ token })
            })
          })
          .then(() => {
            window.location.replace('/')
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        // eslint-disable-next-line no-undef
        fetch(API_URL + '/logout', {
          method: 'POST',
          credentials: 'include'
        })
          .catch((error) => {
            console.log(error)
          })
      }
    })
  }

  render () {
    const { mounted } = this.state

    return (
      <div>
        {mounted
          ? <StyledFirebaseAuth uiConfig={getUIConfig()} firebaseAuth={firebase.auth()} />
          : null
        }
      </div>
    )
  }
}

export default Login
