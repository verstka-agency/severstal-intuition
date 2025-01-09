import { User } from "../models/User"

export const checkIfYourExists = async ({ email, id }: { email: string, id?: string }) => {
    // Надо проверить, что юзера с таким email нет
    const user = await User.findOne({
        where: {
            email: email
        }
    })

    // TODO как отображаем в дизайне? Модалка?

    if (user !== null) {
        return false
    }
    return true
}