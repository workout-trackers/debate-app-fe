// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '@/interfaces';
import users from '../../data/users.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<User>>
) {
  res.status(200).json(users);
}
