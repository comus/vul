import db from './db'
import nanoid from 'nanoid'

export const getUserByUID = async (uid) => {
  const rootRef = db.ref()
  const usersRef = rootRef.child('users')
  const query = usersRef.orderByChild('uid').equalTo(uid)
  const snapshot = await query.once('value')
  let value = null
  snapshot.forEach((childSnapshot) => {
    value = childSnapshot.val()
  })
  return value || null
}

export const createUser = async (args) => {
  const input = {
    ...args.input,
    createdAt: Date.now(),
    username: args.input.username || 'user-' + nanoid(10).toLowerCase()
  }
  const rootRef = db.ref()
  const usersRef = rootRef.child('users')
  const newUserRef = usersRef.push()
  await newUserRef.set({
    ...input,
    id: newUserRef.key
  })
  const snapshot = await newUserRef.once('value')
  const value = snapshot.val()
  return value
}
