import { TAcademicSemistar } from "../AcademicSemistar/AcademicSemistar.interface";
import { UserModel } from "./users.model";


const findLastStudentId=async()=>{
    const lastStudent=await UserModel.findOne({
        role:'student'
    },{
        id:1,
        _id:0
    })
    .sort({
        createdAt:-1
    })
    .lean()
    return lastStudent?.id?lastStudent.id.substring(6):undefined
}

 // create a student role auto generated 
    export const generatedStudentId= async(payLoad:TAcademicSemistar)=>{

        const currentId= await findLastStudentId()||(0).toString().padStart(4,'0');
        let incrementId= (Number(currentId+1)).toString();
        incrementId=`${payLoad.year} ${payLoad.code}${incrementId}`
        return incrementId
    }
