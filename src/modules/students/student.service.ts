import { TStudent } from "./students.inrerface";
import {  StudentModel } from "./students.model";

const CreateStudentIntoDb=async (student:TStudent)=>{
    const result=await StudentModel.create(student)
    return result

}

const getAllStudentFromDB=async()=>{
    const result=await StudentModel.find();
    return result;
}

export const StudentServices={
    CreateStudentIntoDb,
    getAllStudentFromDB
}