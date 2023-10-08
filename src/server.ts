import express, { Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { router } from './router'

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

app.use((err: Error, req: Request, res: Response) => {
    if (err instanceof Error) {
        return res.status(400).json({ // error 400 =  erro de  conexão com a internet 
            error: err.message
        })
    }

    return res.status(500).json({  // error 500 = erro servidor interno de um site
        status: 'Erro',
        message: 'Erro Interno Servidor'
    })
})

app.listen(3334, () => console.log('Servidor Rodando na Porta 3334'))