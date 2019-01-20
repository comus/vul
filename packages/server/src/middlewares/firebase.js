import firebase from 'lib/firebase'

export default (req, res, next) => {
  req.firebaseServer = firebase
  next()
}
