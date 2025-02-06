import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from "yup"
import { Header } from "../Header";
import './styles.css'

export function Cadastro() {
  const handleClickRegister = (values) => console.log(values);
    const validationRegister = yup.object().shape({
      email: yup
      .string()
      .email("Nao é um email")
      .required("este campo é obrigatorio"),
      password: yup
      .string()
      .min(8, "Asenha deve ter no 8 caracteres")
      .required("este campo é obrigatorio"),
      confirmPassword: yup.string().oneOf([yup.ref("password"), null, "As senhas nao sao iguais"])
  })
  return( 
    <div>
      <Header/>           
      <div className="container-register">     
        <h1>Cadastro</h1>
        <Formik
          initialValues={{}}
          onSubmit={handleClickRegister}  
          validationSchema={validationRegister}
        >

        <Form className="register-form">
          <div className="register-form-group">
            <Field name="email" className="form-field"
            placeHolder="Email" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"  
            />  
          </div>

          <div className="register-form-group">
            <Field name="password" className="form-field"
            placeHolder="Senha" />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"  
            />  
          </div>  

          <div className="register-form-group">
            <Field name="confirmPassword" className="form-field"
            placeHolder="Confirme sua Senha" />

            <ErrorMessage
              component="span"
              name="confirmPassword"
              className="form-error"  
            />  
          </div>
          <button className="button" type="submit">Registrar</button>  
        </Form>
        </Formik>                     
      </div>
    </div>
  ) 
  }