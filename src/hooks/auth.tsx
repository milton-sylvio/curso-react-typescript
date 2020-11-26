import React, { createContext, useState, useContext } from 'react';
import strings from '../utils/strings';

interface IAuthContext {
  logged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const minhaCarteiraLogged = `${strings.minhaCarteira}logged`;

  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem(minhaCarteiraLogged);

    return !!isLogged;
  });

  const signIn = (email: string, password: string) => {
    if (email === 'm@g.co' && password === '123') {
      localStorage.setItem(minhaCarteiraLogged, 'true');
      setLogged(true);
    } else {
      alert('Senha ou usuário inválidos!');
    }
  };

  const signOut = () => {
    console.log('Clicou no signOut!');
    localStorage.removeItem(minhaCarteiraLogged);
    setLogged(false);
  }

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
