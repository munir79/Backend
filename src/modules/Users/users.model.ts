import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";


const UserSchema=new Schema<TUser>({
    id:{
        type:String,
        required:true
    },
   
    password:{
        type:String,
        required:true,
    },
    neewdPasswordChange:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        enum:['admin','faculty','student']
    },
    status:{
        type:String,
        enum:['in-progress','blocked'],
        default:'in-progress'
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},
{
    timestamps:true
})


export const UserModel =model<TUser>('usermodel',UserSchema)