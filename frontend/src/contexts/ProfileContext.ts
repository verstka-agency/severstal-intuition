import { createContext } from "react"
import { AvatarProps, GameProviderProps, GroupProps, UserProps } from "src/types"
import { number } from "yup"

interface ProfileContextProps {
    profile: UserProps | undefined,
    refetchProfile: any,
    isProfileLoading: boolean,
    updateProfile: any,
    isProfileUpdating: boolean
    avatar: AvatarProps | undefined
    isAvatarLoading: boolean
    groups: GroupProps[] | undefined,
    isLoadingGroups: boolean,
    updateAvatar: any,
    isAvatarUploading: boolean
    setNextQuestion: any,
    isNextQuestionLoading: boolean
}

export const profileInitials: UserProps = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    city: "",
    avatar: "",

    isSeverstalEmployee: "Нет",
    subdivision: "",
    jobTitle: "",

    isPrivacyPolicyConfirmed: false,
    isGameRulesConfirmed: false,

    game: {
        currentRound: 1,
        currentQuestion: 1,
        score: 0,
        isPostcardsPassed: false,
        isMemoryPassed: false,
        isGamePassed: false
    }
}

export const ProfileContext = createContext<ProfileContextProps>({
    profile: profileInitials,
    refetchProfile: () => {
    },
    isProfileLoading: true,
    updateProfile: () => {
    },
    isProfileUpdating: false,
    avatar: undefined,
    isAvatarLoading: false,
    groups: undefined,
    isLoadingGroups: false,
    updateAvatar: () => {
    },
    isAvatarUploading: false,
    setNextQuestion: () => {
    },
    isNextQuestionLoading: false
})