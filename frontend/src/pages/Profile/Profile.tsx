import React from 'react'
import Paper from "src/components/Paper/Paper"
import { AvatarIconSizeEnum, ButtonTypeEnum, ButtonVariantsEnum, CornersPosition } from "src/types"
import Logo from "src/components/Logo/Logo"
import Corners from "src/components/Corners/Corners"
import './Profile.scss'
import MediaQuery from 'react-responsive'
import { Form, Formik } from "formik"
import { profileInitials } from "src/contexts/ProfileContext"
import { object } from "yup"
import { FormFieldEnum, formSchemas } from "src/validation/schemas"
import AvatarIcon from "src/components/AvatarIcon/AvatarIcon"
import Input from "src/components/Input/Input"
import Select from "src/components/Select/Select"
import Chipfield from "src/components/Chipfield/Chipfield"
import Checkbox from "src/components/Checkbox/Checkbox"
import Button from "src/components/Button/Button"
import { useCities, useProfile } from "src/hooks"
import { useNavigate } from "react-router-dom"

const Profile = () => {
    const { cities } = useCities()
    const {
        profile,
        isProfileLoading,
        updateProfile,
        isProfileUpdating,
        groups
    } = useProfile()
    const navigate = useNavigate()

    return (

        <Formik
            initialValues={profile ?? profileInitials}
            onSubmit={(values, formikHelpers) => {
                updateProfile(values)
                if (!profile?.isGameRulesConfirmed || !profile?.isPrivacyPolicyConfirmed) {
                    navigate("/")
                }
            }}
            enableReinitialize={true}
            validationSchema={object().shape({
                [FormFieldEnum.FIRST_NAME]: formSchemas[FormFieldEnum.FIRST_NAME].validationFunction,
                [FormFieldEnum.LAST_NAME]: formSchemas[FormFieldEnum.LAST_NAME].validationFunction,
                [FormFieldEnum.EMAIL]: formSchemas[FormFieldEnum.EMAIL].validationFunction,
                [FormFieldEnum.PHONE]: formSchemas[FormFieldEnum.PHONE].validationFunction,
                [FormFieldEnum.CITY]: formSchemas[FormFieldEnum.CITY].validationFunction,
                [FormFieldEnum.IS_SEVERSTAL_EMPLOYEE]: formSchemas[FormFieldEnum.IS_SEVERSTAL_EMPLOYEE].validationFunction,
                [FormFieldEnum.SUBDIVISION]: formSchemas[FormFieldEnum.SUBDIVISION].validationFunction,
                [FormFieldEnum.JOB_TITLE]: formSchemas[FormFieldEnum.JOB_TITLE].validationFunction,
                [FormFieldEnum.IS_PRIVACY_POLICY_CONFIRMED]: formSchemas[FormFieldEnum.IS_PRIVACY_POLICY_CONFIRMED].validationFunction,
                [FormFieldEnum.IS_GAME_RULES_CONFIRMED]: formSchemas[FormFieldEnum.IS_GAME_RULES_CONFIRMED].validationFunction,
            })}
        >
            {({ values, errors, isValid, setFieldValue }) => {
                console.log(errors)
                return (
                    <Paper className={"profile__paper"}>
                        <Logo/>
                        <MediaQuery minWidth={1280}>
                            <Corners position={CornersPosition.OUTSIDE}/>
                        </MediaQuery>
                        {
                            profile?.isGameRulesConfirmed && profile?.isPrivacyPolicyConfirmed ?
                                <div
                                    className="profile__back int-3 blue"
                                    onClick={() => {
                                        navigate(-1)
                                    }}
                                >
                                    {"< Назад"}
                                </div>
                                : null
                        }
                        <div className={"profile"}>
                            <div className={"profile__heading"}>
                                <h2 className={"h2 blue"}>Ваши данные</h2>
                                <p className={"int-2 blue"}>Расскажите о себе</p>
                            </div>
                            <Form className={"profile-form"}>
                                <div className={"profile-form__left-side"}>
                                    <div className={"profile-form__avatar"}
                                         onClick={() => navigate("avatar")}
                                    >
                                        <AvatarIcon size={AvatarIconSizeEnum.BIG}/>
                                        <div className={"profile-form__avatar-action"}>
                                            <span className={"h3 blue"}>Изменить аватар</span>
                                            <img src="/inputs/arrow-right.svg" alt=""/>
                                        </div>
                                    </div>
                                    <div className={"profile-form__firstName"}>
                                        <p className={"int-3"}>Имя будет видно всем игрокам</p>
                                        <Input
                                            name={FormFieldEnum.FIRST_NAME}
                                            label={formSchemas[FormFieldEnum.FIRST_NAME].label}
                                            required={true}
                                            disabled={isProfileUpdating || isProfileLoading}
                                        />
                                    </div>
                                    <Input
                                        name={FormFieldEnum.LAST_NAME}
                                        label={formSchemas[FormFieldEnum.LAST_NAME].label}
                                        required={true}
                                        disabled={isProfileUpdating || isProfileLoading}
                                    />
                                    <Input
                                        name={FormFieldEnum.EMAIL}
                                        label={formSchemas[FormFieldEnum.EMAIL].label}
                                        required={true}
                                        disabled={true}
                                    />
                                    <Input
                                        name={FormFieldEnum.PHONE}
                                        label={formSchemas[FormFieldEnum.PHONE].label}
                                        required={true}
                                        disabled={isProfileUpdating || isProfileLoading}
                                    />
                                </div>
                                <div className={"profile-form__right-side"}>
                                    {/* TODO баг: лейбл не поднимается при нажатии и наборе символов*/}
                                    <Select
                                        options={cities}
                                        name={FormFieldEnum.CITY}
                                        label={formSchemas[FormFieldEnum.CITY].label}
                                        required={true}
                                        disabled={isProfileUpdating || isProfileLoading}
                                    />
                                    <p className={"int-3"}>Главные призы разыгрываются только среди сотрудников
                                        «Северстали»</p>
                                    <div className={"profile-form__chipfield-container"}>
                                        <h3 className={"h3 blue"}>Вы работаете в «Северстали»?</h3>
                                        <div className={"profile-form__chipfields"}>
                                            <Chipfield
                                                name={FormFieldEnum.IS_SEVERSTAL_EMPLOYEE}
                                                label={"Да"}
                                            />
                                            <Chipfield
                                                name={FormFieldEnum.IS_SEVERSTAL_EMPLOYEE}
                                                label={"Нет"}
                                                onChange={() => {
                                                    setFieldValue(FormFieldEnum.SUBDIVISION, "")
                                                    setFieldValue(FormFieldEnum.JOB_TITLE, "")
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {values.isSeverstalEmployee === "Да"
                                        ?
                                        <>
                                            <p className={"int-3"}>
                                                Пожалуйста, укажите ваше подразделение и должность,
                                                чтобы мы смогли связаться с вами
                                            </p>
                                            <Input
                                                label={formSchemas[FormFieldEnum.SUBDIVISION].label}
                                                name={FormFieldEnum.SUBDIVISION}
                                                required={true}
                                            />
                                            <Input
                                                label={formSchemas[FormFieldEnum.JOB_TITLE].label}
                                                name={FormFieldEnum.JOB_TITLE}
                                                required={true}
                                            />
                                        </>
                                        :
                                        null
                                    }
                                    {
                                        !profile?.isGameRulesConfirmed && !profile?.isPrivacyPolicyConfirmed ?
                                            <>
                                                <Checkbox
                                                    name={FormFieldEnum.IS_PRIVACY_POLICY_CONFIRMED}
                                                    label={formSchemas[FormFieldEnum.IS_PRIVACY_POLICY_CONFIRMED].label}
                                                    disabled={isProfileUpdating || isProfileLoading || profile?.isGameRulesConfirmed || profile?.isPrivacyPolicyConfirmed}
                                                />
                                                <Checkbox
                                                    name={FormFieldEnum.IS_GAME_RULES_CONFIRMED}
                                                    label={formSchemas[FormFieldEnum.IS_GAME_RULES_CONFIRMED].label}
                                                    disabled={isProfileUpdating || isProfileLoading || profile?.isGameRulesConfirmed || profile?.isPrivacyPolicyConfirmed}
                                                />
                                            </>
                                            : null
                                    }
                                    <MediaQuery minWidth={1280}>
                                        <Button
                                            variant={ButtonVariantsEnum.PRIMARY_NEXT}
                                            type={ButtonTypeEnum.SUBMIT}
                                            disabled={isProfileUpdating || isProfileLoading || !isValid}
                                            className={"profile-form__button"}
                                        >
                                            Сохранить
                                        </Button>
                                    </MediaQuery>
                                </div>
                                <MediaQuery maxWidth={1279.98}>
                                    <Button
                                        variant={ButtonVariantsEnum.PRIMARY_NEXT}
                                        type={ButtonTypeEnum.SUBMIT}
                                        disabled={isProfileUpdating || isProfileLoading || !isValid}
                                        className={"profile-form__button"}
                                    >
                                        Сохранить
                                    </Button>
                                </MediaQuery>
                            </Form>
                        </div>
                    </Paper>
                )
            }}
        </Formik>

    )
}

export default Profile