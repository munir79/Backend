


// ---------------------------create a student ---------------------------------------

import { Request, Response } from "express";
import { UserService } from "./user.service";

const createStudentControllers = async (req: Request, res: Response) => {
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
    console.log(err);
  }
};



export const UserControllers={
    createStudentControllers
}