import { NextApiRequest, NextApiResponse } from 'next';
import { NotionAPI } from 'notion-client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const pageId = req.query.pageId;
    const notion = new NotionAPI();
    const recordMap = await notion.getPage(pageId.toString());

    console.log({
      success: true,
      recordMap: recordMap,
    });

    res.setHeader('Cache-Control', 's-maxage=2');
    res.json({
      success: true,
      recordMap: recordMap,
    });
  } catch (e) {
    console.log(e);
    res.json({
      success: false,
    });
  }
}
