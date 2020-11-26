import React, { useState } from 'react';

import {
  MdEmail,
  MdLock,
} from 'react-icons/md';

import Logo from '../../components/Logo';
import UiInput from '../../components/UI/Input';
import UiButton from '../../components/UI/Button';

import { useAuth } from '../../hooks/auth';


import {
  Container,
  ContainerSignin,
  FormContainer,
} from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassw] = useState<string>('');

  const { signIn } = useAuth();

  const [passwordShow, setPasswordShow] = useState(false);
  const toggleType = () => {
    setPasswordShow(passwordShow ? false : true); 
  };

  return (
    <Container>
      <ContainerSignin>
        <Logo />

        <FormContainer>
          <h1>Entrar</h1>

          <form onSubmit={() => signIn(email, password)}>
            <label htmlFor="email">
              E-mail
            </label>
            <UiInput 
              icon={MdEmail}
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
              required
              />

            <label htmlFor="passw">
              <span>Senha</span>
              <small onClick={toggleType}>{passwordShow ? "Ocultar" : "Mostrar"}</small>
            </label>
            <UiInput 
              icon={MdLock}
              type={passwordShow ? "text" : "password"}
              id="passw"
              placeholder="Digite sua senha"
              onChange={(e) => setPassw(e.target.value)}
              autoComplete="off"
              required
            />
            
            <UiButton
              type="submit"
              icon=""
              className="block"
            >
              Acessar
            </UiButton>
          </form>

        </FormContainer>
      </ContainerSignin>
    </Container>
  );
}

export default SignIn;