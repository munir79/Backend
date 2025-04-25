import express, { Application,  Request, Response } from 'express'
const app:Application = express()
import cors from 'cors'
import { StudentRoutes } from './modules/students/student.route'
import { UserRouter } from './modules/Users/user.route'
import { error } from 'console'
import GlobalErrorHandelars from './app/middlewares/globalErrorHAndelars'
// const port = 3000

//parser
app.use(express.json())
app.use(cors())

app.use('/api/v1/students',StudentRoutes)
app.use('/api/v1/users',UserRouter)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})


// **************************************global error handeling *******************

app.use(GlobalErrorHandelars)



export default app;
