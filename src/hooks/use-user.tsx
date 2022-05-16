import { getUserData } from 'services/auth';
import useSWR from 'swr';

export default function useUser() {
  const { data, mutate, error } = useSWR(
    '/login/user',
    () => getUserData()?.user,
  );
  const user = data || null;
  const loading = !error && !data;
  const setUser = mutate;
  return {
    user,
    setUser,
    error,
    loading,
  };
}
