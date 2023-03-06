import { SubmitHandler, useForm } from 'react-hook-form';
import { useContext } from 'react';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { IUserSignUpFormValues } from '../../../providers/@types';
import { UserContext } from '../../../providers/UserContext';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserSignUpFormValues>();

  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<IUserSignUpFormValues> = (data) => {
    userRegister(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Email'
        register={register('email')}
        type='email'
        errors={errors.email}
      />
      <Input
        label='Password'
        register={register('password')}
        type='password'
        errors={errors.password}
      />
      <Input
        label='Nome'
        register={register('name')}
        type='text'
        errors={errors.name}
      />

      <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
