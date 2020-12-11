import React, { useState, useContext } from 'react';

import {
  MdEmail,
  MdLock,
} from 'react-icons/md';

import UiInput from '../../components/UI/Input';
import UiButton from '../../components/UI/Button';

import { 
  FormContainer, 
  FormGroup,
  FormLabel 
} from '../../components/UI/Form/styles';

import { AuthContext } from '../../hooks/auth';

import { useHistory } from 'react-router-dom';
// import { User, auth } from 'firebase';
import firebase from '../../firebase';
import 'firebase/auth';
import 'firebase/firestore';

import { paths } from '../../configs/paths';

interface IUserData {
  email: string;
  password: string;
}

const SignIn: React.FC<IUserData> = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const [values, setValues] = useState({
      email: '',
      password: '',
  } as IUserData);

  const [passwordShow, setPasswordShow] = useState(false);
  const toggleType = () => {
    setPasswordShow(passwordShow ? false : true); 
  };

  // const handleClick = () => {
  //   history.push("/auth/signup");
  // }

  const handleChange = (event: any) => {
    event.persist();

    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(res => {
        authContext.setUser(res);
        console.log(res, 'res')
        history.push(paths.DASHBOARD.url);
      })
      .catch(error => {
        console.log(error.message);
        alert(error.message);
    });
  }

  return (
    <>
      <h1>Entrar</h1>

      <form onSubmit={handleSubmit}>
        <FormContainer className="form-vertical">
          <FormGroup>
            <FormLabel htmlFor="email">
              E-mail
            </FormLabel>

            <UiInput 
              icon={MdEmail}
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="passw">
              <span>Senha</span>
              <small onClick={toggleType}>
                {passwordShow ? "Ocultar" : "Mostrar"}
              </small>
            </FormLabel>

            <UiInput 
              icon={MdLock}
              type={passwordShow ? "text" : "password"}
              id="passw"
              name="password"
              placeholder="Digite sua senha"
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </FormGroup>
        
        <UiButton
          type="submit"
          icon=""
          className="block"
        >
          Acessar
        </UiButton>
        </FormContainer>
      </form>

      <p>
        Não tem cadastro? 
        <a 
          href={paths.SIGN_UP.url}
          title="Clique aqui e cadastre-se"
        >
          Clique aqui
        </a>
      </p>
    </>
  );
}

export default SignIn;