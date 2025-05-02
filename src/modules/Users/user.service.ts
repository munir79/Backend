import config from "../../app/config"
import { TAcademicSemistar } from "../AcademicSemistar/AcademicSemistar.interface"
import { AcademicSemistarModel } from "../AcademicSemistar/AcademicSemistar.model"
import { TStudent } from "../students/students.inrerface"
import { StudentModel } from "../students/students.model"
import { TUser } from "./user.interface"
import { UserModel } from "./users.model"
import { generatedStudentId } from "./Users.utils"

const CreateStudentIntoDb=async (password:string,payLoad:TStudent)=>{

// create a object  
const user:Partial<TUser>={}

user.password=password || (config.default_password as string);
    // if(!password){
    //     user.password=config.default_password as string
    // }else{
    //     user.password=password;
    // }


    // set user role 
    user.role='student'

   

    //  find Academic Semistar info 
    const admissionsemistar=await AcademicSemistarModel.findById(payLoad.admissionSemistar);
    user.id=generatedStudentId(admissionsemistar)
    //cretae a user 
    const result=await UserModel.create(user);

    // create a student 
    if(Object.keys(result).length){
        payLoad.id=result.id;
        payLoad.user=result._id;

        const NewStudent= await StudentModel.create(payLoad);
        return NewStudent
    }


}


export const UserService={
    CreateStudentIntoDb
}