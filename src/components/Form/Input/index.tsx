import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInput {
  label: string;
  type: 'text' | 'email' | 'password';
  register?: UseFormRegisterReturn<string>;
  errors?: FieldError;
}

const Input = ({ label, type, register, errors }: IInput) => (
  <fieldset>
    <StyledTextField label={label} type={type} {...register} />
    {errors ? (
      <StyledParagraph fontColor='red'>{errors.message}</StyledParagraph>
    ) : null}
  </fieldset>
);

export default Input;
