import { NextApiRequest, NextApiResponse } from 'next';
import { requireSession } from '@clerk/clerk-sdk-node';
import prisma from '@/utils/prisma';

export default requireSession(
  async (req: NextApiRequest, res: NextApiResponse) => {
    // @ts-ignore
    const userId = req.session.userId;

    const sites = await prisma.ghSites.findMany({
      where: {
        createdBy: userId,
      },
    });

    console.log(sites);

    res.json(sites);
  }
);
