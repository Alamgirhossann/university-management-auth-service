import config from '../../../config'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generatedUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto generated id
  const id = await generatedUserId()

  user.id = id

  //default password
  if (!user.password) {
    user.password = config.user_default_pass as string
  }

  const createdUser = await User.create(user)
  if (!createUser) {
    throw new Error('Faild to create user')
  }
  return createdUser
}

export default {
  createUser,
}
