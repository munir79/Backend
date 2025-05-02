import { model, Schema } from "mongoose";
import { TAcademicSemistar, TAcaDemicSemistarCode, TAcaDemicSemistarName, TMonths } from "./AcademicSemistar.interface";
import { error } from "console";

const Months:TMonths[] = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
 
  const AcademicSemiSemistarName:TAcaDemicSemistarName[]=['Autum','Summer' , 'Fall']
  const AcademicSemiSemistarCode:TAcaDemicSemistarCode[]=['01','02' , '03']

const AcademicSemistarSchema=new Schema<TAcademicSemistar>(
    {
        name:{
          type:String,
          required:true,
          
        },
        year:{
            type:Date,
            required:true

        },
        code:{
            type:String,
           required:true
        },
        startMonth:{
            type:String,
            enum:Months
        },
        endMonth:{
            type:String,
            enum:Months
        }
    }
)


// this is  
AcademicSemistarSchema.pre('save',async function(next){
    const isSemistarError=await AcademicSemistarModel.findOne({
        year:this.year, //here this is means which document is come like [semistarData:{name:'Auttum},
        //{year:2030}] here semistar data is a document 
        name:this.name
    })

    if(isSemistarError){
        throw new Error("semistar already exists");
    }
    next();
    

})

export const AcademicSemistarModel=model<TAcademicSemistar>("academicSemistar",AcademicSemistarSchema)