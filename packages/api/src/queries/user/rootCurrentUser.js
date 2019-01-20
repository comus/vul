import { getUserById } from '../../models/user'

export default async (root, args, { user }) => {
  if (!user || !user.id) return null
  const dbUser = await getUserById(user.id)
  if (
    user.deletedAt ||
    user.disabledAt ||
    user.status === 'deleted' ||
    user.status === 'disabled' ||
    user.loginDisabled
  ) return null
  return dbUser
}
