import React, { useCallback, useState } from 'react'
import Logo from "src/components/Logo/Logo"
import Corners from "src/components/Corners/Corners"
import { AvatarProps, ButtonTypeEnum, ButtonVariantsEnum, CornersPosition, GroupProps } from "src/types"
import Paper from "src/components/Paper/Paper"
import { useNavigate } from "react-router-dom"
import './ChooseAvatar.scss'
import { Form, Formik } from "formik"
import Button from "src/components/Button/Button"
import { useProfile } from "src/hooks"
import { apiProvider } from "src/api"
import { useQuery } from "@tanstack/react-query"
import { getStyles } from "src/utils/styles"

const ChooseAvatar = () => {
    const navigate = useNavigate()
    const [currentGroup, setCurrentGroup] = useState<string | null>(null)
    const { isProfileLoading, updateAvatar, isAvatarUploading, groups } = useProfile()

    const { data: avatars, isLoading: isAvatarsLoading } = useQuery({
        queryKey: ["avatars", {
            currentGroup: currentGroup
        }],
        queryFn: async () => {
            try {
                const response = await apiProvider.get(`/private/avatars`)
                return response.data as AvatarProps[]
            } catch (error) {
                console.error(error)
            }
        },
        enabled: !!currentGroup
    })

    const handleNavigation = useCallback(() => {
        if (currentGroup) {
            setCurrentGroup(null)
        } else {
            navigate(-1)
        }
    }, [navigate, currentGroup])

    return (
        <Paper>
            <Logo/>
            <Corners position={CornersPosition.OUTSIDE}/>
            <div className={"choose-avatar"}>
                <div className={"choose-avatar__heading"}>
                    <div
                        className="choose-avatar__navigation int-3 blue"
                        onClick={handleNavigation}
                    >
                        {"< Назад"}
                    </div>
                    <h2 className={"h2 blue"}>Выбери аватар</h2>
                    <p className={"int-2 blue"}>
                        {
                            !!currentGroup ?
                                groups && groups?.filter((group) => {
                                    return group.id === currentGroup
                                })[0].label
                                :
                                "Добавьте красок своему профилю"
                        }
                    </p>
                </div>
                <Formik
                    initialValues={{
                        avatar: ""
                    }}
                    enableReinitialize={true}
                    onSubmit={async (values) => {
                        await updateAvatar(values)
                        navigate(-1)
                    }}
                >
                    {({ values, setFieldValue }) => {
                        return (
                            <Form>
                                <div className={"choose-avatar__container"}>
                                    <div className={"choose-avatar__grid"}>
                                        {
                                            !!currentGroup ?
                                                avatars?.filter((avatar) => avatar.groupId === currentGroup).map((avatar, index) => {
                                                    const styles = getStyles("choose-avatar__icon", [{
                                                        decision: values.avatar === avatar?.id,
                                                        name: "active"
                                                    }])
                                                    return (
                                                        <label
                                                            key={avatar.id}
                                                            className={styles}
                                                            onClick={async () => {
                                                                if (isProfileLoading || isAvatarUploading) return
                                                                setCurrentGroup(avatar.groupId)
                                                                await setFieldValue("avatar", avatar.id)
                                                            }}
                                                        >
                                                            <img
                                                                className={"choose-avatar__avatar"}
                                                                src={`/avatars/${groups?.filter((group) => group.id === currentGroup)[0].slug}/${avatar?.slug}.png`}
                                                                alt=""
                                                            />
                                                            <span className={"h4 blue"}>
                                                        {avatar?.label}
                                                    </span>
                                                        </label>
                                                    )
                                                })
                                                :
                                                groups?.map((group) => {
                                                    return (
                                                        <label
                                                            key={group.id}
                                                            onClick={async () => {
                                                                if (isProfileLoading || isProfileLoading) return
                                                                setCurrentGroup(group.id)
                                                            }}
                                                        >
                                                            <img
                                                                className={"choose-avatar__group"}
                                                                src={`/avatars/${group.slug}/scientist.png`}
                                                                alt=""
                                                            />
                                                            <span className={"h4 blue"}>
                                                                {group?.label}
                                                            </span>
                                                        </label>
                                                    )
                                                })
                                        }
                                    </div>
                                    <Button
                                        variant={ButtonVariantsEnum.PRIMARY_NEXT}
                                        type={ButtonTypeEnum.SUBMIT}
                                        className={"choose-avatar__button"}
                                        disabled={isAvatarUploading || isProfileLoading}
                                    >
                                        Сохранить
                                    </Button>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>

            </div>
        </Paper>
    )
}

export default ChooseAvatar