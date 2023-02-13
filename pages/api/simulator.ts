import type { NextApiRequest, NextApiResponse } from 'next';

const simulatorUrl = 'https://ecobalyse.beta.gouv.fr/api/textile/simulator';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const query = req.url?.replace('/api/simulator', '');

  console.log(simulatorUrl + query);

  const result = await fetch(simulatorUrl + query);

  const simulation = await result.json();
  console.log(simulation);
  res.status(200).json(simulation);
}
