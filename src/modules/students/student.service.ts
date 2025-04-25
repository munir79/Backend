
import {  StudentModel } from "./students.model";



const getAllStudentFromDB=async()=>{
    const result=await StudentModel.find();
    return result;
}

const getASingleStudentFromDb=async(id:string)=>{
    const result=await StudentModel.findOne();
    return result;
}

export const StudentServices={

    getAllStudentFromDB,
    getASingleStudentFromDb
}