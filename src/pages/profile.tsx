import Navigation from 'components/Navigation';
import useUser from 'hooks/use-user';
import Layout from 'layout/Layout';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { logout } from 'services/auth';
import { Button, Loader, MaxWidthContainer } from 'shared/styles';
import { mutate } from 'swr';

const NavigationRoutes = [
  { name: 'Home', route: '/' },
  { name: 'Profile', route: '' },
];
export default function Profile() {
  const router = useRouter();
  const { user, loading } = useUser();
  const handleLogout = async () => {
    mutate('/login/user', null, false);
    await logout();
  };
  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user]);
  return (
    <Layout title="Profile">
      <Navigation routes={NavigationRoutes} name="Profile" />
      <MaxWidthContainer>
        <Button onClick={handleLogout}>
          {loading ? <Loader /> : 'Logout'}
        </Button>
      </MaxWidthContainer>
    </Layout>
  );
}
