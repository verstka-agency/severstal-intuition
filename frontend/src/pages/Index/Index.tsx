import React from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import './Index.scss'
import { Form, Formik } from "formik"
import Button from "../../components/Button/Button"
import Select from 'src/components/Select/Select'
import { useCities } from "src/hooks"
import { ButtonTypeEnum } from "src/types"

const Index = () => {
    const { cities, isCitiesLoading } = useCities()

    return (
        <div className="index">
            <ProgressBar
                barsAmount={10}
                currentBar={2}
            />
            <Formik
                initialValues={{
                    name: "",
                    age: null,
                    gender: null,
                    isStaff: null,
                    city: null,
                    isPrivacyPolicyConfirmed: null
                }}
                // validationSchema={object({
                //     name: string().required("Required"),
                //     age: string().required("Required"),
                //     gender: string().required("Required"),
                //     isStaff: boolean().required("Required"),
                //     city: string().required("Required"),
                //     isPrivacyPolicyConfirmed: boolean().required("Required").test((value) => value)
                // })}
                validateOnChange={false}
                validateOnMount={false}
                onSubmit={(values, formikHelpers) => console.log('values', values)}
            >
                {({ values, errors }) => {

                    return (
                        <Form className={"index__form"}>
                            <Select
                                name={"city"}
                                label={"Город"}
                                required={true}
                                options={cities}
                                isLoading={isCitiesLoading}
                            />
                            {/*<p>Ваше имя</p>*/}
                            {/*<p>Имя смогут увидеть все игроки Интуиции</p>*/}
                            {/*<Input*/}
                            {/*    name={Schemas["name"*/}
                            {/*        ]}*/}
                            {/*    label={"Имя"}*/}
                            {/*/>*/}
                            {/*<RadioGroup*/}
                            {/*    label={"Ваш возраст"}*/}
                            {/*    name={"age"}*/}
                            {/*    options={[*/}
                            {/*        {*/}
                            {/*            value: "До 21",*/}
                            {/*            children: "До 21"*/}
                            {/*        },*/}
                            {/*        {*/}
                            {/*            value: "22-30",*/}
                            {/*            children: "22-30"*/}
                            {/*        },*/}
                            {/*        {*/}
                            {/*            value: "31-40",*/}
                            {/*            children: "31-40"*/}
                            {/*        },*/}
                            {/*        {*/}
                            {/*            value: "41+",*/}
                            {/*            children: "41+"*/}
                            {/*        },*/}
                            {/*    ]}*/}
                            {/*/>*/}
                            {/*<RadioGroup*/}
                            {/*    name={"gender"}*/}
                            {/*    label={"Ваш пол"}*/}
                            {/*    options={[*/}
                            {/*        {*/}
                            {/*            value: "male",*/}
                            {/*            children: "Муж."*/}
                            {/*        },*/}
                            {/*        {*/}
                            {/*            value: "female",*/}
                            {/*            children: "Жен."*/}
                            {/*        }*/}
                            {/*    ]}*/}
                            {/*/>*/}
                            {/*<RadioGroup*/}
                            {/*    name={"isStaff"}*/}
                            {/*    label={"Вы сотрудник компании?"}*/}
                            {/*    options={[*/}
                            {/*        {*/}
                            {/*            value: "true",*/}
                            {/*            children: "Да"*/}
                            {/*        },*/}
                            {/*        {*/}
                            {/*            value: "false",*/}
                            {/*            children: "Нет"*/}
                            {/*        }*/}
                            {/*    ]}*/}
                            {/*/>*/}
                            {/*<div>*/}
                            {/*    <p>*/}
                            {/*        Из какого вы города?*/}
                            {/*    </p>*/}
                            {/*    <label>*/}
                            {/*        <Field name={'city'}/>*/}
                            {/*    </label>*/}
                            {/*    {errors.city && <p>{errors.city}</p>}*/}
                            {/*</div>*/}
                            {/*<Checkbox*/}
                            {/*    name={"isPrivacyPolicyConfirmed"}*/}
                            {/*    label={"Я даю согласие на хранение и обработку персональных данных"}*/}
                            {/*/>*/}

                            <Button
                                variant={"primary"}
                                type={ButtonTypeEnum.SUBMIT}
                            >
                                Сохранить
                            </Button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default Index