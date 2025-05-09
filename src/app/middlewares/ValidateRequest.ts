import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

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

export default ValidationSchema;