import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '../../utils/supabase'

type Data = {
  users: number;
  statuses: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { data: { count: users } } = await supabase.from('users').select('count').single();
  const { data: { count: statuses } }= await supabase.from('statuses').select('count').single();

  res.status(200).json({ users, statuses });
}
