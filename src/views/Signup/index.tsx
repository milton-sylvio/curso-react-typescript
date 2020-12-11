import React, { useState, useContext } from 'react';
import MaskedInput from 'react-text-mask';
import { useHistory } from 'react-router-dom';
import {
  MdEmail,
  MdLock,
  MdPhone
} from 'react-icons/md';

import UiInput from '../../components/UI/Input';
import UiButton from '../../components/UI/Button';

import { AuthContext } from '../../hooks/auth';

import firebase from '../../firebase';
import 'firebase/auth';
import 'firebase/firestore';

import { 
  FormContainer, 
  FormGroup,
  FormLabel 
} from '../../components/UI/Form/styles';

interface IUserData {
  name: string;
  email: string;
  phone: string;
  password: string;
}
  
const SignUp: React.FC<IUserData> = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  
  const [passwordShow, setPasswordShow] = useState(false);
  const toggleType = () => {
    setPasswordShow(passwordShow ? false : true); 
  };

  const handleChange = (event: any) => {
    event.preventDefault();

    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = (event: any) => {
    event?.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredential : firebase.auth.UserCredential) => {
        authContext.setUser(userCredential);

        const db = firebase.firestore();
        db.collection('Users')
          .doc(userCredential.user!.uid)
          .set({
            name: values.name,
            phone: values.phone
          })
          .then(() => {
            console.log('ok::userCredential:', userCredential);
            history.push('/dashboard');
          })
          .catch(error => {
            console.log(error.message);
            alert(error.message);
          });
      })
  }

  return (
    <>
      <h1>Cadastre-se</h1>

      <form onSubmit={handleSubmit}>
        <FormContainer className="form-vertical">
          <FormGroup>
            <FormLabel htmlFor="name">
              Nome completo
            </FormLabel>
            <UiInput 
              icon={MdEmail}
              type="text"
              name="name"
              id="name"
              placeholder="Digite seu nome"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="email">
              E-mail
            </FormLabel>
            <UiInput 
              icon={MdEmail}
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="phone">
              Telefone
            </FormLabel>
            <UiInput 
              icon={MdPhone}
              maskInput={MaskedInput}
              mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              type="text"
              id="phone"
              name="phone"
              placeholder="Digite seu telefone"
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
              required
            />
          </FormGroup>
          <FormGroup>
            <UiButton
              type="submit"
              icon=""
              className="block"
            >
              Cadastrar
            </UiButton>
          </FormGroup>
        </FormContainer>
      </form>

      <p>
        Já tem cadastro? 
        <a 
          href="/" 
          title="Clique aqui para entrar"
        >
          Clique aqui.
        </a>
      </p>
    </>
  );
}

export default SignUp;