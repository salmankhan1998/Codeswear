import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  pinCodes: Array<Number>
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({pinCodes: [41000,42000, 43000]})
}