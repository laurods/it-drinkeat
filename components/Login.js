import React, { useContext } from 'react';
import authContext from '../contexts/authContext';
import { ErrorMessage, Formik, Form, Field } from "formik";
import { TextField, Button, FormGroup, Box } from "@material-ui/core";
import * as Yup from "yup"; 


const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required").min(2).max(10),
});


function Login () {
  const { signIn } = useContext(authContext);   
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          //console.log(values);
          signIn();
          
        }}
      >
        {({ errors, isSubmitting, isValidating }) => (
          <Form autoComplete="off">
            <Box marginBottom={2}>
              <FormGroup>
                
                <Field
                  as={TextField}
                  id="email"
                  name="email"
                  label="email"                  
                  fullWidth
                />
                <ErrorMessage name="email" />
              </FormGroup>
            </Box>
            <Box marginBottom={2}>
              <FormGroup>                
                <Field
                  as={TextField}
                  id="password"
                  name="password"
                  type="password"
                  label="senha"                  
                  fullWidth
                />
                <ErrorMessage name="password" />
              </FormGroup>
            </Box>
            <Box className="bt-login">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isValidating || isSubmitting}
              >
                Entrar
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
