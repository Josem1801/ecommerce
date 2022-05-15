import Navigation from 'components/Navigation';
import useUser from 'hooks/use-user';
import Layout from 'layout/Layout';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { logout } from 'services/auth';
import { Button, MaxWidthContainer } from 'shared/styles';
import { mutate } from 'swr';

const NavigationRoutes = [
  { name: 'Home', route: '/' },
  { name: 'Profile', route: '' },
];
export default function Profile() {
  const router = useRouter();
  const { data } = useUser();
  const handleLogout = async () => {
    mutate('/login/user', null, false);
    await logout();
  };
  useEffect(() => {
    if (!data) {
      router.push('/');
    }
  }, [data]);
  return (
    <Layout title="Profile">
      <Navigation routes={NavigationRoutes} name="Profile" />
      <MaxWidthContainer>
        <Button onClick={handleLogout}>Logout</Button>
      </MaxWidthContainer>
    </Layout>
  );
}
