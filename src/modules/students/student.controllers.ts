

//note controllers handle request and response 
//from client we can send data many ways like by params , by queries,and all 
import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const  createStudentControllers= async(req:Request,res:Response)=>{

 try{
    const {student:StudentData}=req.body;

    const result=await StudentServices.CreateStudentIntoDb(StudentData);
    

    //

    res.status(200).json({
        sucess:true,
        message:"Student Created SucessFully",
        data:result
    })
 }
 catch(err){
    console.log(err)
 }


}

export const StudentControllers={
    createStudentControllers
}