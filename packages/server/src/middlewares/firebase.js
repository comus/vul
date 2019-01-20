import firebase from '@vul/core/lib/firebase'

export default (req, res, next) => {
  req.firebaseServer = firebase
  next()
}
