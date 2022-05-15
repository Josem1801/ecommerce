import { getUserData } from 'services/auth';
import useSWR from 'swr';

export default function useUser() {
  const { data, mutate, error } = useSWR('/login/user', getUserData);
  return {
    data,
    mutate,
    error,
  };
  // export { loginWithGoogle, loginWithFacebook, loginWithTwitter };
}
