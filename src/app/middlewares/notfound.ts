import { error } from "console";
import { NextFunction, Request, Response } from "express";
import HttpStatus  from "http-status";


const notfound=(req:Request,res:Response,next:NextFunction)=>{
    return res.status(HttpStatus.NOT_FOUND).json({
        success:false,
        message:'API Not Found',
        error:''
    })

}

export default notfound