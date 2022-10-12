import express from 'express'
import routes, { globalMiddleware } from './routes'
import helmet from 'helmet'

const app = express()

//api security
app.use(helmet())

app.use(globalMiddleware)

routes(app)

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
