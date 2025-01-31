import { boolean, string } from "yup"
import { Form } from "formik"

export enum FormFieldEnum {
    FIRST_NAME = "firstName",
    LAST_NAME = "lastName",
    EMAIL = "email",
    PHONE = "phone",
    CITY = "city",
    IS_SEVERSTAL_EMPLOYEE = "isSeverstalEmployee",
    IS_PRIVACY_POLICY_CONFIRMED = "isPrivacyPolicyConfirmed",
    IS_GAME_RULES_CONFIRMED = "isGameRulesConfirmed",
    SUBDIVISION = "subdivision",
    JOB_TITLE = 'jobTitle'
}

export const formSchemas: Record<FormFieldEnum, {
    label: string
    validationFunction: any
    initialValue: string | null | number | boolean
}> = {
    [FormFieldEnum.FIRST_NAME]: {
        label: "Имя",
        validationFunction: string().required("Введите имя"),
        initialValue: ""
    },
    [FormFieldEnum.LAST_NAME]: {
        label: "Фамилия",
        validationFunction: string().required("Введите фамилию"),
        initialValue: null
    },
    [FormFieldEnum.EMAIL]: {
        label: "E-mail",
        validationFunction: string().email("E-mail введен неправильно").required("Введите e-mail"),
        initialValue: null
    },
    [FormFieldEnum.PHONE]: {
        label: "Телефон",
        validationFunction: string().required("Введите телефон"),
        initialValue: null
    },
    [FormFieldEnum.CITY]: {
        label: "Город",
        validationFunction: string().required("Выберите город"),
        initialValue: null
    },
    [FormFieldEnum.IS_SEVERSTAL_EMPLOYEE]: {
        label: "Вы сотрудник компании?",
        validationFunction: string<"Да" | "Нет">().required("Заполните поле"),
        initialValue: "Нет"
    },
    [FormFieldEnum.SUBDIVISION]: {
        label: "Подразделение",
        validationFunction: string()
            .when(FormFieldEnum.IS_SEVERSTAL_EMPLOYEE, {
                is: "Да",
                then: (schema) => schema.required("Заполните поле"),
                otherwise: (schema) => schema.optional(),
            }),
        initialValue: null
    },
    [FormFieldEnum.JOB_TITLE]: {
        label: "Должность",
        validationFunction: string()
            .when(FormFieldEnum.IS_SEVERSTAL_EMPLOYEE, {
                is: "Да",
                then: (schema) => schema.required("Заполните поле"),
                otherwise: (schema) => schema.optional(),
            }),
        initialValue: null
    },
    [FormFieldEnum.IS_PRIVACY_POLICY_CONFIRMED]: {
        label: "Я даю согласие на хранение и обработку персональных данных",
        validationFunction: boolean().required("Заполните поле").test("is-true", "Заполните поле", (value) => value),
        initialValue: false
    },
    [FormFieldEnum.IS_GAME_RULES_CONFIRMED]: {
        label: "Я ознакомился с правилами игры и регламентом розыгрыша призов",
        validationFunction: boolean().required("Заполните поле").test("is-true", "Заполните поле", (value) => value),
        initialValue: false
    }
}

