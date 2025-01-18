import React from 'react'
import { Form, Formik } from "formik"
import { useGame } from "src/hooks"
import Button from "src/components/Button/Button"
import { ButtonVariantsEnum } from "src/types"
import './Quiz.scss'

const Quiz = () => {
    const { question } = useGame()

    return (
        <Formik
            initialValues={{}}
            onSubmit={(values) => {
                console.log('values', values)
            }}
            enableReinitialize={true}
        >
            {({ values }) => {
                return (
                    <Form className={"quiz"}>
                        <h3 className={"h3 white"}>{question}</h3>
                        <div className={"quiz__questions"}>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                        </div>
                        <Button
                            variant={ButtonVariantsEnum.PRIMARY_NEXT}
                        >
                            Далее
                        </Button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default Quiz