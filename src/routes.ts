import express, { Express, Request, Response, NextFunction } from 'express'
import { getBookHandler } from './controllers/books.controller'

const middleware = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.params)
    //@ts-ignore
    req.name = 'example'
    next()
}

export const globalMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    //console.log(req.params)
    res.locals.name = 'global middleware'
    next()
}

const routes = (app: Express) => {
    app.use(express.json())

    app.get('/api/books/:authorId/:bookId/', getBookHandler)

    app.get('/error', async (req, res) => {
        try {
            // await throwsError()
            res.sendStatus(200)
        } catch (error) {
            res.status(400).send('something bad happened')
        }
    })

    //route with path patterns
    app.get('/ab*cd', (req: Request, res: Response) => {
        res.send('/abcd')
    })

    //chained routes
    app.route('/api/defaults')
        .get((req: Request, res: Response) => {
            return res.send('Hello')
        })
        .post((req: Request, res: Response) => {
            console.log(req.body)
            return res.sendStatus(200)
        })
        .delete((req: Request, res: Response) => {
            return res.send('Deleting')
        })
}

export default routes
