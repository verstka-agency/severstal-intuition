import React, { useEffect, useState } from 'react'
import Paper from "src/components/Paper/Paper"
import Logo from "src/components/Logo/Logo"
import Corners from "src/components/Corners/Corners"
import { ButtonTypeEnum, ButtonVariantsEnum, CornersPosition } from "src/types"
import { useMutation } from "@tanstack/react-query"
import { object } from "yup"
import { Form, Formik } from "formik"
import Input from "src/components/Input/Input"
import { apiProvider } from "src/api"
import Button from "src/components/Button/Button"
import { FormFieldEnum, formSchemas } from "src/validation/schemas"
import { formatTimer } from "src/utils/formatTimer"
import './EmailOtp.scss'

const EmailOtp = () => {
    const [email, setEmail] = useState<string>("")
    const [timer, setTimer] = useState<number>(0)

    const { mutate: requestEmail, isLoading: isRequestingEmail, isSuccess } = useMutation({
        mutationFn: async (variables: { email: string }) => {
            try {
                const response = await apiProvider.post("/public/send-magic-link", variables)
                return response.data
            } catch (error) {
                console.error(error)
            }
        }
    })

    useEffect(() => {
        if (timer === 0) return

        const timeout = setTimeout(() => {
            setTimer((prev) => prev - 1)
        }, 1000)

        return () => {
            clearTimeout(timeout)
        }
    }, [timer])

    useEffect(() => {
        if (!isRequestingEmail && isSuccess) {
            setTimer(30)
        }
    }, [isRequestingEmail, isSuccess])

    return (
        <Paper>
            <Logo/>
            <Corners position={CornersPosition.OUTSIDE}/>
            <div className={"email-otp"}>
                {Boolean(email) ?
                    <>

                        <div className={"email-otp__form"}>
                            <h2 className={"h2 blue email-otp__heading"}>Подтвердите регистрацию</h2>
                            <p className={"int-2 blue email-otp__description"}>Мы отправили ссылку на почту {email} -
                                переходи по ней, чтобы
                                попасть в игру!</p>
                            {
                                !isRequestingEmail && isSuccess && timer ?
                                    <p className={"int-3 blue email-otp__timer"}>Отправить повторно через: <span
                                        className={"light-red"}>{formatTimer(timer)}</span>
                                    </p>
                                    : null
                            }
                            <div className={"email-otp__button-container"}>
                                <Button
                                    onClick={() => {
                                        if (timer) return
                                        requestEmail({ email: email })
                                    }}
                                    disabled={timer !== 0 || isRequestingEmail}
                                    variant={ButtonVariantsEnum.PRIMARY_NEXT}
                                    className={"email-otp__button"}
                                >
                                    Отправить
                                </Button>
                            </div>
                        </div>
                        <img
                            src={"/authorization/3.png"}
                            alt={""}
                            className={"email-otp__image"}
                        />
                    </>
                    :
                    <>
                        <Formik
                            onSubmit={(values, formikHelpers) => {
                                setEmail(values.email as string)
                                requestEmail({ email: values.email as string })
                            }}
                            initialValues={{
                                email: formSchemas[FormFieldEnum.EMAIL].initialValue
                            }}
                            validationSchema={object({
                                email: formSchemas[FormFieldEnum.EMAIL].validationFunction
                            })}
                        >
                            {({ values }) => {
                                console.log('values', values)
                                return (
                                    <Form className={"email-otp__form"}>
                                        <h2 className={"h2 blue email-otp__heading"}>Вход через почту</h2>
                                        <p className={"int-2 blue email-otp__description"}>Оставьте свой адрес — и мы
                                            пришлём на него ссылку
                                            для входа в игру</p>
                                        <Input
                                            label={formSchemas[FormFieldEnum.EMAIL].label}
                                            name={FormFieldEnum.EMAIL}
                                            required={true}
                                        />
                                        <div className={"email-otp__button-container"}>

                                            <Button
                                                type={ButtonTypeEnum.SUBMIT}
                                                disabled={isRequestingEmail}
                                                variant={ButtonVariantsEnum.PRIMARY_NEXT}
                                                className={"email-otp__button"}
                                            >
                                                Отправить
                                            </Button>
                                        </div>
                                    </Form>
                                )
                            }}
                        </Formik>
                        <img
                            src={"/authorization/2.png"}
                            alt={""}
                            className={"email-otp__image"}
                        />
                    </>
                }
            </div>
        </Paper>
    )
}

export default EmailOtp