import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IUserLoginFormValues } from '../../../providers/@types';
import { UserContext } from '../../../providers/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLoginFormValues>();

  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<IUserLoginFormValues> = (data) => {
    userLogin(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Email'
        type='email'
        register={register('email')}
        errors={errors.email}
      />
      <Input
        label='Password'
        type='password'
        register={register('password')}
        errors={errors.password}
      />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};
export default LoginForm;
