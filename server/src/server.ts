import express from 'express'
import cors from 'cors'
import { routes } from './routes'

const app = express()

/** cors é para controle de segurança backend não permitindo que
 * frontend acesse informações
 */
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => console.log('HTTP server running!'))