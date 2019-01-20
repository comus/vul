import { Component } from 'react'
import firebase, { initFirebase } from '@vul/core/lib/firebase'
import { API_URL } from '@vul/core/lib/constants'

class Logout extends Component {
  componentDidMount () {
    initFirebase()
    firebase.auth().signOut()
      .then(() => {
        // eslint-disable-next-line no-undef
        return fetch(API_URL + '/logout', {
          method: 'POST',
          credentials: 'include'
        })
      })
      .then(() => {
        window.location.replace('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render () {
    return null
  }
}

export default Logout
