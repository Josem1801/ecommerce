import { NextApiRequest, NextApiResponse } from 'next';
import supabase from 'services/auth/supabase';

export default async function Login(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;

  const response = await supabase.auth.signIn({
    provider: body.provider,
  });
  if (response.error) {
    return res.status(403).json({ response: 403 });
  }
  return res.status(200).json(response);
}
