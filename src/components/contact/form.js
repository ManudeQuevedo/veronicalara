import React from "react"
import useForm from "./useForm"
import validate from "./formValidation"
import "../../assets/styles/contact.css"

const Form = () => {
  const { values, handleChange, handleSubmit, errors } = useForm(
    data,
    validate
  )

  function data() {
    console.log(values)
  }

  return (
    <div className="box">
      <form onSubmit={handleSubmit} noValidate>
         <div className="field">
            <label className="label">Nombre</label>
            <div className="control">
            <input autoComplete="off" className={`input ${errors.name && 'is-danger'}`} type="text" name="name" onChange={handleChange} value={values.name || ''} required />
            {errors.name && (
               <p className="help is-danger">{errors.name}</p>
            )}
            </div>
         </div>
         <div className="field">
            <label className="label">Teléfono</label>
            <div className="control">
            <input autoComplete="off" className={`input ${errors.phone && 'is-danger'}`} type="tel" name="phone" onChange={handleChange} value={values.phone || ''} required />
            {errors.phone && (
               <p className="help is-danger">{errors.phone}</p>
            )}
            </div>
         </div>
         <div className="field">
            <label className="label">Correo electrónico</label>
            <div className="control">
            <input autoComplete="off" className={`input ${errors.email && 'is-danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
            {errors.email && (
               <p className="help is-danger">{errors.email}</p>
            )}
            </div>
         </div>
         <div className="field">
            <label className="label">Mensaje</label>
            <div className="control">
            <input className={`input ${errors.message && 'is-danger'}`} type="text" name="message" onChange={handleChange} value={values.message || ''} required />
            </div>
            {errors.message && (
            <p className="help is-danger">{errors.message}</p>
            )}
         </div>
         <button type="submit" className="button is-block is-info is-fullwidth">Enviar mensaje</button>
      </form>
    </div>
  )
}

export default Form
