
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: any
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { slug } = req.query
    res.status(200).json({ message: slug })
}
