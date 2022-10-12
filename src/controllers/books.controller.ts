import { Express, Request, Response, NextFunction } from 'express'

export const getBookHandler = (
    req: Request<{ bookId: string; authorId: string }>,
    res: Response,
    next: NextFunction
) => {
    //@ts-ignore
    console.log(res.locals.name)
    console.log(req.params)
    return res.send(req.params)
}
