import React from 'react'
import { AvatarProps, GroupProps, UserProps } from "src/types"
import { ProfileContext } from "src/contexts/ProfileContext"
import { useMutation, useQuery } from "@tanstack/react-query"
import { apiProvider } from "src/api"
import { useAuthentication } from "src/hooks"

interface ProfileProviderProps extends React.HTMLAttributes<HTMLDivElement> {
}

const ProfileProvider: React.FC<ProfileProviderProps> = (props) => {
    const { children } = props
    const { isAuthenticated } = useAuthentication()

    const { data: profile, isLoading: isProfileLoading, refetch: refetchProfile } = useQuery({
        queryKey: ["profile"],
        queryFn: async () => {
            try {
                const response = await apiProvider.get("/private/user")
                return response.data as UserProps
            } catch (error) {
                console.error(error)
            }
        },
        enabled: isAuthenticated
    })

    const { data: avatar, isLoading: isAvatarLoading } = useQuery({
        queryKey: ["avatar", {
            avatar: profile?.avatar
        }],
        queryFn: async () => {
            try {
                const response = await apiProvider.get(`/private/avatars?id=${profile?.avatar}`)
                return response.data as AvatarProps
            } catch (error) {
                console.error(error)
            }
        },
        enabled: !!profile?.avatar
    })

    const { data: groups, isLoading: isLoadingGroups } = useQuery({
        queryKey: ["groups"],
        enabled: isAuthenticated,
        queryFn: async () => {
            try {
                const response = await apiProvider.get("/private/groups")
                return response.data as GroupProps[]
            } catch (error) {
                console.error(error)
            }
        }
    })

    const { mutate: updateProfile, isLoading: isProfileUpdating } = useMutation({
        mutationFn: async (variables: Partial<UserProps>) => {
            try {
                const response = await apiProvider.patch("/private/user", variables)
                await refetchProfile()
                return response.data
            } catch (error) {
                console.error(error)
            }
        }
    })

    const { mutate: updateAvatar, isLoading: isAvatarUploading } = useMutation({
        mutationFn: async (variables: Partial<UserProps>) => {
            try {
                const response = await apiProvider.patch("/private/user/avatar", variables)
                await refetchProfile()
                return response.data
            } catch (error) {
                console.error(error)
            }
        }
    })

    const { mutate: setNextQuestion, isLoading: isNextQuestionLoading } = useMutation({
        mutationFn: async () => {
            try {
                const response = await apiProvider.post('/private/game/next-question')
                await refetchProfile()
                return response.data
            } catch (error) {
                console.error(error)
            }
        }
    })

    return (
        <ProfileContext.Provider
            value={{
                profile: profile,
                refetchProfile: refetchProfile,
                isProfileLoading: isProfileLoading,
                updateProfile: updateProfile,
                isProfileUpdating: isProfileUpdating,
                avatar: avatar,
                isAvatarLoading: isAvatarLoading,
                groups: groups,
                isLoadingGroups: isLoadingGroups,
                updateAvatar: updateAvatar,
                isAvatarUploading: isAvatarUploading,
                setNextQuestion: setNextQuestion,
                isNextQuestionLoading: isNextQuestionLoading
            }}
        >
            {children}
        </ProfileContext.Provider>
    )

}

export default ProfileProvider