import express, { NextFunction, Request, Response } from 'express'
import { UserControllers } from './user.controllers';
import { AnyZodObject } from 'zod';
import { StudentZodSchema } from '../students/StudentZodValidationSceham';

const router=express.Router();

// router.post('/create-student',UserControllers.createStudentControllers)

const ValidationSchema=(schema:AnyZodObject)=>{

 return async(req:Request,res:Response,next:NextFunction)=>{
 
try{    await schema.parseAsync({
    body:req.body
})}
catch(err){
    next(err)
}

}
}

router.post('/create-student',ValidationSchema(StudentZodSchema), UserControllers.createStudentControllers)

export const UserRouter=router;
