import config from "../../app/config"
import { TStudent } from "../students/students.inrerface"
import { StudentModel } from "../students/students.model"
import { TUser } from "./user.interface"
import { UserModel } from "./users.model"

const CreateStudentIntoDb=async (password:string,studentData:TStudent)=>{

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
    user.id='201002050'
    //cretae a user 
    const result=await UserModel.create(user);

    // create a student 
    if(Object.keys(result).length){
        studentData.id=result.id;
        studentData.user=result._id;

        const NewStudent= await StudentModel.create(studentData);
        return NewStudent
    }


}


export const UserService={
    CreateStudentIntoDb
}