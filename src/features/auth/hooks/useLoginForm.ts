import { ChangeEvent, FormEvent, useState } from 'react';
import { login } from '../services/auth.service';
import { LoginFormValues } from '../types/auth.types';

const initialValues: LoginFormValues = {
  email: '',
  password: '',
  rememberMe: false,
};

export const useLoginForm = () => {
  const [values, setValues] = useState<LoginFormValues>(initialValues);
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (field: keyof LoginFormValues) => (event: ChangeEvent<HTMLInputElement>) => {
    const value = field === 'rememberMe' ? event.target.checked : event.target.value;
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleBlur = (field: keyof typeof touched) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const validate = () => {
    const errors: Partial<Record<keyof LoginFormValues, string>> = {};

    if (!values.email.trim()) {
      errors.email = 'Введіть email';
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errors.email = 'Некоректний email';
    }

    if (!values.password.trim()) {
      errors.password = 'Введіть пароль';
    } else if (values.password.length < 6) {
      errors.password = 'Мінімум 6 символів';
    }

    return errors;
  };

  const errors = validate();
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ email: true, password: true });
    setFormError(null);

    if (!isValid) return;

    try {
      setIsSubmitting(true);
      const response = await login(values);
      console.log('Logged in:', response);
    } catch (error) {
      setFormError('Сталася помилка при вході. Спробуйте ще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    touched,
    errors,
    isValid,
    isSubmitting,
    formError,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
