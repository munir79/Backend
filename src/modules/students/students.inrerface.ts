import { Types } from "mongoose";






export type TGurdain = {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
};

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TLocalGuardian ={
    name:string;
    occupation:string;
    contactNumber:string
}
export type TStudent = {

  id: string;
  password:string;
  name: TUserName;
  user:Types.ObjectId
  

  gender: "female" | "male";
  dateOfBirth?:string;
  email: string;
  contactNumber: string;
  emergencyContactNumber: string;
  guardian: TGurdain;
  presentAddress: string;
  permannetAddress: string;
  localGuardian:TLocalGuardian;
  profileImage:string;
  admissionSemistar:Types.ObjectId;


  avatar?: string;
  

  
};
