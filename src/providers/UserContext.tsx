// eslint-disable-next-line no-use-before-define, import/no-duplicates
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-duplicates
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IUser,IUserSignUpFormValues,IUserLoginFormValues,IUserProviderProps, IUserContextData} from "./@types"
import api from '../services/api';


export const UserContext = createContext<IUserContextData>(
  {} as IUserContextData
);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  const userRegister = async (data: IUserSignUpFormValues) => {
    try {
      await api.post<IUserLoginFormValues>('users', data);
      toast.success('Cadastrado com sucesso!');
      navigate('/');
    } catch (error) {
      toast.error('Esse e-mail já possui cadastro!');
    }
  };

  const userLogin = async (data: IUserLoginFormValues) => {
    try {
      setLoading(true);
      const response = await api.post<IUserLoginFormValues>('login', data);
      setUser(response.data.user);
      localStorage.setItem('@TOKEN', response.data.accessToken);
      toast.success('Bem-vindo!');
      navigate('/shop');
    } catch (error) {
      toast.error('Dados inválidos, tente novamente!');
    } finally {
      setLoading(false);
    }
  };

  type UserAutoLoginFunction = () => void;

  const userAutoLogin: UserAutoLoginFunction = () => {
    const token: string | null = localStorage.getItem('@TOKEN');
    if (token) {
      navigate('shop');
    } else {
      localStorage.removeItem('@TOKEN');
      navigate('/')
    }
  };

  useEffect(() => {
    userAutoLogin();
  }, []);

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('@TOKEN');
    toast.success('Deslogado com sucesso!')
    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        userRegister,
        userLogin,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
