import { model, Schema } from "mongoose";
import { TGurdain, TLocalGuardian, TStudent, TUserName } from "./students.inrerface";

const UserNameSchema=new Schema<TUserName>(
  {
    firstName:{
      type:String,
      required:true,
    },
    middleName:{
      type:String,
      required:true
    },
    lastName:{
      type:String,
      required:true
    }
  }
)


const GurdianSchema=new Schema<TGurdain>({
  fatherName:{
    type:String,
    required:true
  },
  fatherOccupation:{
    type:String,
    required:true
  },
  motherName:{
    type:String,
    required:true
  },
  motherOccupation:{
    type:String,
    required:true
  }
})

const LocalGurdianSchema=new Schema<TLocalGuardian>(
  {
    name:{
      type:String,
      required:true
    },
    occupation:{
      type:String,
      required:true
    },
    contactNumber:{
      type:String,
      required:true
    }
  }
)

const StudentSchema=new Schema<TStudent>(
  {
    id:{
      type:String,
      required:true
    },
    name:UserNameSchema,
    gender:{
      type:String,
      required:true,
      enum:{
        values:['female','male']
      }
    },
    user:{
      type:Schema.Types.ObjectId,
      required:[true,'user is required'],
      ref:"UserModel"
    },
    dateOfBirth:{
      type:String,
      

    },
    email:{
      type:String,
      required:true,
      unique:true,
    },
    contactNumber:{
      type:String,
      required:true
    },
    emergencyContactNumber:{
      type:String,
      required:true
    }
    ,guardian:GurdianSchema,
    presentAddress:{
      type:String,
      required:true
    },
    permannetAddress:{
      type:String,
      required:true

    },
    localGuardian:LocalGurdianSchema,
    profileImage:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    }


  }
)

export const StudentModel=model<TStudent>("Student",StudentSchema)