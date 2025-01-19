import React from 'react'
import { Form, Formik } from "formik"
import Input from "src/components/Input/Input"
import { FormFieldEnum, formSchemas } from "src/validation/schemas"
import Select from "src/components/Select/Select"
import Checkbox from "src/components/Checkbox/Checkbox"
import Button from "src/components/Button/Button"
import { AvatarIconSizeEnum, ButtonTypeEnum, ButtonVariantsEnum } from "src/types"
import { useCities, useProfile } from "src/hooks"
import './ProfileForm.scss'
import Chipfield from "src/components/Chipfield/Chipfield"
import { useNavigate } from "react-router-dom"
import { profileInitials } from "src/contexts/ProfileContext"
import { object } from "yup"
import AvatarIcon from "src/components/AvatarIcon/AvatarIcon"

const ProfileForm = () => {
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
                if (!profile?.isGameRulesConfirmed || !profile?.isPrivacyPolicyConfirmed) {
                    updateProfile(values)
                    navigate("/")
                }
                updateProfile(values)
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
                console.log('values', values)
                console.log('errors', errors)
                console.log('isValid', isValid)
                return (
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
                                    disabled={isProfileUpdating || isProfileLoading || profile?.isGameRulesConfirmed || profile?.isPrivacyPolicyConfirmed}
                                />
                            </div>
                            <Input
                                name={FormFieldEnum.LAST_NAME}
                                label={formSchemas[FormFieldEnum.LAST_NAME].label}
                                required={true}
                                disabled={isProfileUpdating || isProfileLoading || profile?.isGameRulesConfirmed || profile?.isPrivacyPolicyConfirmed}
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
                                disabled={isProfileUpdating || isProfileLoading || profile?.isGameRulesConfirmed || profile?.isPrivacyPolicyConfirmed}
                            />
                        </div>
                        <div className={"profile-form__right-side"}>
                            {/* TODO баг: лейбл не поднимается при нажатии и наборе символов*/}
                            <Select
                                options={cities}
                                name={FormFieldEnum.CITY}
                                label={formSchemas[FormFieldEnum.CITY].label}
                                required={true}
                                disabled={isProfileUpdating || isProfileLoading || profile?.isGameRulesConfirmed || profile?.isPrivacyPolicyConfirmed}
                            />
                            <p className={"int-3"}>Главные призы разыгрываются только среди сотрудников «Северстали»</p>
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
                            <Button
                                variant={ButtonVariantsEnum.PRIMARY_NEXT}
                                type={ButtonTypeEnum.SUBMIT}
                                disabled={isProfileUpdating || isProfileLoading || !isValid}
                                className={"profile-form__button"}
                            >
                                Сохранить
                            </Button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default ProfileForm