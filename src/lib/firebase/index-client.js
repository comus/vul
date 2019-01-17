import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

function initFirebase () {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: 'AIzaSyAzNRruNSb_CtHPmk-anIK8Knn7lqjgidI',
      authDomain: 'vul-demo.firebaseapp.com',
      databaseURL: 'https://vul-demo.firebaseio.com',
      projectId: 'vul-demo',
      storageBucket: 'vul-demo.appspot.com',
      messagingSenderId: '313588264230'
    })
  }
  return firebase
}

export default firebase

export {
  initFirebase
}
