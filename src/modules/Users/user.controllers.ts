


// ---------------------------create a student ---------------------------------------

import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";

const createStudentControllers = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const {password, student: StudentData } = req.body;
    // const ZodParseData=StudentZodSchema.parse(StudentData);

    const result = await UserService.CreateStudentIntoDb(password,StudentData);

    //

    res.status(200).json({
      sucess: true,
      message: "Student Created SucessFully",
      data: result,
    });
  } catch (err) {
    // console.log(err);
    next(err)
  }
};



export const UserControllers={
    createStudentControllers
}