//note controllers handle request and response
//from client we can send data many ways like by params , by queries,and all
import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.service";
import sendResponse from "../../app/utils/sendResponse";
import  HttpStatus  from "http-status";




//--------------------------- get all student controllers----------------------------------------

//******************************** */ without first error handeling error globally*********************************
// const getAllStudentControllers = async (req: Request, res: Response) => {
//   try {
//     const result = await StudentServices.getAllStudentFromDB();
//     res.status(200).json({
//       sucess: true,
//       message: "get all student sucessfully",
//       data: result,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };



// ********************************error handeling with globally********************************** 
const getAllStudentControllers = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    // res.status(200).json({
    //   sucess: true,
    //   message: "get all student sucessfully",
    //   data: result,
    // });

    sendResponse(res,{
      statusCode:HttpStatus.OK,
      sucess:true,
      message:"get all student SucessFully",
      data:result
    })
  } catch (err) {
    // console.log(err);
    next(err);
  }
};

// ------------------------------------- geta singleStudent from db--------------------------------
const getASingleStudentControllers = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getASingleStudentFromDb(studentId);
    res.status(200).json({
      sucess: true,
      message: "get A single Student from db ",
      data: result,
    });
  } catch (err) {
    // console.log(err);
    next(err)
  }
};

export const StudentControllers = {
  
  getAllStudentControllers,
  getASingleStudentControllers
};
