import { UserProps } from "../types/UserProps"
import { User } from "../models/User"
import { cleanConfig } from "../utils/cleanWhere"

export const createUser = async (props: UserProps) => {
    const cleanedConfig = cleanConfig<UserProps>(props)
    const user = await User.findOne({
        where: cleanedConfig
    })

    if (user) {
        return user
    } else {
        return await User.create(cleanedConfig)
    }
}