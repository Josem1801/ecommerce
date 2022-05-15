import supabase from './supabase';

export type RegisterType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
export function registerUser({
  email,
  password,
  firstName,
  lastName,
}: RegisterType) {
  supabase.auth.signUp(
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
}
export type LoginType = {
  email: string;
  password: string;
};
export function loginUser({ email, password }: LoginType) {
  supabase.auth.signIn({
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
