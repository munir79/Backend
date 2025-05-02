import { TAcademicSemistar, TAcademicSemistarMapper } from "./AcademicSemistar.interface";
import { AcademicSemistarModel } from "./AcademicSemistar.model";


const CreateAcademicSemisTarIntoDb=async(payLoad:TAcademicSemistar)=>{


 
  const AcademicSemistarMapper:TAcademicSemistarMapper={
    Auttum:'01',
    Summer:'02',
    Fall:'03'

  }

  if(AcademicSemistarMapper[payLoad.name] !==payLoad.code){
    throw new Error('Invalid Semistar Code')
  }

    const result= await AcademicSemistarModel.create(payLoad);
    return result;

}


// ****************************get all AcademicSemistart *************************************

const getAllAcademicSemisTarServiceFromDb = async () => {
    const result = await AcademicSemistarModel.find();
    return result;
  };
  
  //--------------------------------------------getSingleSemistar-------------------------------
  
  const getSingleSemistarServiceFromDb = async (id: string) => {
    const result = await AcademicSemistarModel.findById(id);
    return result;
  };
  
  // -------------------------------------updateAcademicSemistar ---------------------------
  
  const UpdateSemistartService = async (
    id: string,
    payLoad: Partial<TAcademicSemistar>
  ) => {
    
  const AcademicSemistarMapper:TAcademicSemistarMapper={
    Auttum:'01',
    Summer:'02',
    Fall:'03'

  }
    if (
      payLoad.name &&
      payLoad.code &&
      AcademicSemistarMapper[payLoad.name] !== payLoad.code
    ) {
      throw new Error("Invalid Semistar code");
    }
  
    const result = await AcademicSemistarModel.findOneAndUpdate({ _id: id }, payLoad, {
      new: true,
    });
    return result;
  };

export const AcademicSemistarService={
    CreateAcademicSemisTarIntoDb,
    getAllAcademicSemisTarServiceFromDb,
    getSingleSemistarServiceFromDb,
    UpdateSemistartService
}