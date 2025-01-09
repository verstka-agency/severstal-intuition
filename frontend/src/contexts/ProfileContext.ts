import { createContext } from "react"
import { AvatarProps, GroupProps, UserProps } from "src/types"

interface ProfileContextProps {
    profile: UserProps | undefined,
    isProfileLoading: boolean,
    updateProfile: any,
    isProfileUpdating: boolean
    avatar: AvatarProps | undefined
    isAvatarLoading: boolean
    groups: GroupProps[] | undefined,
    isLoadingGroups: boolean
}

export const profileInitials: UserProps = {
    avatar: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    currentRound: 0,
    lives: 0,
    money: 0,
    isSeverstalEmployee: "Нет",
    subdivision: "",
    jobTitle: "",
    isPrivacyPolicyConfirmed: false,
    isGameRulesConfirmed: false,
}

export const ProfileContext = createContext<ProfileContextProps>({
    profile: profileInitials,
    isProfileLoading: true,
    updateProfile: () => {
    },
    isProfileUpdating: false,
    avatar: undefined,
    isAvatarLoading: false,
    groups: undefined,
    isLoadingGroups: false
})