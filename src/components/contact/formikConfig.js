import React, { useRef, useEffect, useState } from "react"
import { ErrorMessage, Field, Form, Formik } from "formik"
import Reaptcha from "reaptcha"
import axios from "axios"
import qs from "qs"
import '../../assets/styles/contact.css'

export default () => {
  const [errMsg, setErrMsg] = useState("")
  const [executing, setExecuting] = useState(false)
  const [formValues, setFormValues] = useState({})
  const [formReset, setFormReset] = useState({})
  const [msgSent, setMsgSent] = useState(false)
  const [rcError, setRcError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [token, setToken] = useState("")
  const [verified, setVerified] = useState(false)

  const rcRef = useRef(null)

  useEffect(() => {
    const handleSubmit = async (formValues, token) => {
      const data = {
        ...formValues,
        "g-recaptcha-response": token
      }
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: qs.stringify(data),
        url: "/"
      }
      try {
        await axios(options)
        setMsgSent(true)
        formReset()
      } catch (e) {
        setErrMsg(e.message)
      }
    }
    if (token) {
      handleSubmit(formValues, token)
    }
  }, [formReset, formValues, token])

  const onError = () => {
    console.log("error...")
    setRcError(true)
  }

  const onExpire = () => {
    console.log("expired...")
    console.log("resetting...")
    resetReCaptcha()
  }

  const onLoad = resetForm => {
    console.log("loaded...")
    setFormReset(resetForm)
  }

  const onVerify = token => {
    console.log("verified...")
    setToken(token)
    setVerified(true)
    setExecuting(false)
  }

  const renderButton = (executing, isSubmitting) => {
    if (errMsg) {
      return (
        <button
          className="failure"
          type="submit"
          disabled
        >
          Mensaje no enviado, por favor inténtalo nuevamente
        </button>
      )
    } else if (msgSent) {
      return (
        <button className="success" type="submit" disabled>
          Mensaje enviado!
        </button>
      )
    } else {
      return (
        <button
          className="button is-block is-info is-fullwidth"
          type="submit"
          disabled={isSubmitting || executing}
        >
          Enviar mensaje
        </button>
      )
    }
  }

  const resetEverything = resetForm => {
    if (rcError) {
      setRcError(false)
    }
    if (resetForm) {
      setMsgSent(false)
      setErrMsg(false)
      resetForm()
    }
    resetReCaptcha()
  }

  const resetReCaptcha = async () => {
    console.log("resetting...")
    await rcRef.current.reset()
    setVerified(false)
  }

  return (
    <div>
      <Formik
        initialValues={{
          "bot-field": "",
          "form-name": "contact",
          email: "",
          name: "",
          phone: "",
          message: ""
        }}
        validate={values => {
          let errors = {}
          if (!values.name) {
            errors.name = "Por favor ingresa tu nombre"
          }

          if (!values.phone) {
            errors.phone = "Por favor ingresa tu número telefónico"
          }

          if (!values.email) {
            errors.email = "Por favor ingresa tu correo electrónico"
          } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Dirección de correo inválida"
          }

          if (!values.message) {
            errors.message = "Por favor ingresa tus dudas o preguntas"
          }
          return errors
        }}
        onSubmit={values => {
          setIsSubmitting(true)
          setFormValues({ ...values })
          setExecuting(true)
          rcRef.current.execute()
        }}
      >
        {({ resetForm }) => (
          <Form
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            className="d-flex flex-column align-items-center"
            name="contact"
            noValidate
          >
            <Field type="hidden" name="form-name" />
            <Field type="hidden" name="bot-field" />
            <div className="field">
              <label className="label" htmlFor="name">
                Nombre
              </label>
              <Field className="input" name="name" type="text" />
              <ErrorMessage
                className="help is-danger"
                name="name"
                component="div"
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="phone">
                Teléfono
              </label>
              <Field className="input" name="phone" type="text" />
              <ErrorMessage
                className="help is-danger"
                name="phone"
                component="div"
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="email">
                Correo electrónico
              </label>
              <Field className="input" name="email" type="email" />
              <ErrorMessage
                className="help is-danger"
                name="email"
                component="div"
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="message">
                Mensaje
              </label>
              <Field className="input" name="message" type="text" />
              <ErrorMessage
                className="help is-danger"
                name="message"
                component="div"
              />
            </div>
            <Reaptcha
              ref={rcRef}
              sitekey="6Ld0Y70UAAAAACO-3Wv51vLwQ0ed9NWn37MZH05z"
              data-netlify-recaptcha="true"
              onError={onError}
              onExpire={onExpire}
              onVerify={onVerify}
              onLoad={() => onLoad(() => resetForm)}
              size="invisible"
            />
            {renderButton(isSubmitting, executing, verified)}
            {/* {errMsg ? <div className="text-primary m-1">{errMsg}</div> : null} */}
            {(msgSent || errMsg) && (
              <button
                className="button is-block is-info is-fullwidth"
                onClick={() => resetEverything(resetForm)}
              >
                Restaurar formulario
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  )
}