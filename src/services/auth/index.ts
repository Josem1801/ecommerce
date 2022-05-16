/* eslint-disable consistent-return */
import supabase from './supabase';

export type RegisterType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
export async function registerUser({
  email,
  password,
  firstName,
  lastName,
}: RegisterType) {
  try {
    const user = await supabase.auth.signUp(
      {
        email,
        password,
      },
      {
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    );

    return user;
  } catch (error) {
    console.log(error);
  }
}
export type LoginType = {
  email: string;
  password: string;
};
export async function loginUser({ email, password }: LoginType) {
  return supabase.auth.signIn({
    email,
    password,
  });
}

export function socialMediaLogin(provider: 'google' | 'facebook' | 'twitter') {
  return supabase.auth.signIn({
    provider,
  });
}

export const getUserData = () => supabase.auth.session();

export async function logout() {
  await supabase.auth.signOut();
}
