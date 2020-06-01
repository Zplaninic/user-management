import express, {Application, Request, Response, NextFunction} from 'express'
import config from './config/base'
import initializeDB from './database/initialize'
import { json, urlencoded } from 'body-parser'
import setupRoutes from './routes'

const app: Application = express()

app.disable('x-powered-by');
app.use(json())
app.use(urlencoded({ extended: true }))

setupRoutes(app)

export const start = async () => {
    await initializeDB();  
    app.listen(config.port, () => console.log('Server running'));
}

