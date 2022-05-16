import { yupResolver } from '@hookform/resolvers/yup';
import TextField from 'components/TextField';
import { FlexContainer } from 'layout/Header/TopHeader/styles';
import Link from 'next/link';
import React, { ChangeEvent, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, HeaderTypography, TextTypography } from 'shared/styles';
import { LoginType, loginUser } from 'services/auth';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import SpaceBetweenContainer from './styles';

const schema = Yup.object({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email')
    .min(3),
  password: Yup.string().required('Password is required').min(3),
});
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [formStatus, setFormStatus] = useState({
    loading: false,
    error: false,
    errorMessage: '',
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<LoginType> = async (data) => {
    try {
      setFormStatus((prev) => ({ ...prev, loading: true, errorMessage: '' }));
      const { error } = await loginUser(data);
      if (error) {
        setFormStatus({
          error: true,
          loading: false,
          errorMessage: error.message,
        });
        return;
      }
      router.push('/');
    } catch (error) {
      setFormStatus((prev) => ({
        ...prev,
        errorMessage: 'Something went wrong, please try again later',
        loading: false,
      }));
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HeaderTypography fontVariant="heading3">Login</HeaderTypography>
      <TextField
        placeholder="Email"
        {...register('email')}
        errorMessage={errors.email?.message}
      />
      <TextField
        placeholder="Password"
        type={showPassword ? 'text' : 'password'}
        errorMessage={formStatus.errorMessage || errors.password?.message}
        {...register('password')}
      />
      <SpaceBetweenContainer>
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
        <Link href="/auth/reset-password" passHref>
          <TextTypography fontVariant="bodySmallRegular" as="a">
            Forget Password
          </TextTypography>
        </Link>
      </SpaceBetweenContainer>
      <Button fullWidth disabled={formStatus.loading}>
        {formStatus.loading ? 'Loading...' : 'Login'}
      </Button>
    </form>
  );
}
