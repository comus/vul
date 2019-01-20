export default (user, args, ctx) => {
  if (user && user.createdAt) {
    return new Date(user.createdAt)
  }
  return null
}
