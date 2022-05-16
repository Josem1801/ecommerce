import { yupResolver } from '@hookform/resolvers/yup';
import TextField from 'components/TextField';
import { FlexContainer } from 'layout/Header/TopHeader/styles';
import React, { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { RegisterType } from 'services/auth';
import { Button, HeaderTypography, TextTypography } from 'shared/styles';
import * as Yup from 'yup';

const schema = Yup.object({
  firstName: Yup.string()
    .required('First name is required')
    .min(3, 'Min 3 characters'),
  lastName: Yup.string()
    .required('First name is required')
    .min(3, 'Min 3 characters'),
  email: Yup.string().required('Email is required').email('Invalid email'),
  password: Yup.string()
    .required('Password is required')
    .min(5, 'Min 5 characters'),
  repeatPassword: Yup.string()
    .required('Repeat password is required')
    .oneOf([Yup.ref('password'), null], 'Password must match'),
});
export type RegisterTypes = RegisterType & { repeatPassword: string };
export default function RegisterForm({
  handleRegister,
}: {
  handleRegister: (data: RegisterType) => void;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterTypes>({
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: RegisterTypes) => handleRegister(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HeaderTypography fontVariant="heading3">Register</HeaderTypography>
      <TextField
        placeholder="Fist Name"
        {...register('firstName')}
        errorMessage={errors.firstName?.message}
      />
      <TextField
        placeholder="Last Name"
        {...register('lastName')}
        errorMessage={errors.lastName?.message}
      />
      <TextField
        placeholder="Email"
        {...register('email')}
        errorMessage={errors.email?.message}
      />
      <TextField
        {...register('password')}
        placeholder="Password"
        type={showPassword ? 'text' : 'password'}
        errorMessage={errors.password?.message}
      />
      <TextField
        {...register('repeatPassword')}
        placeholder="Repeat Password"
        type={showPassword ? 'text' : 'password'}
        errorMessage={errors.repeatPassword?.message}
      />
      <FlexContainer gap={6}>
        <input
          defaultChecked={false}
          type="checkbox"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setShowPassword(e.target.checked)
          }
        />
        <TextTypography
          fontVariant="bodySmallRegular"
          color="manatee"
          as="span"
        >
          Show Password
        </TextTypography>
      </FlexContainer>

      <Button fullWidth>Register</Button>
    </form>
  );
}
