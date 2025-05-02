//note controllers handle request and response
//from client we can send data many ways like by params , by queries,and all


import sendResponse from "../../app/utils/sendResponse";
import  HttpStatus  from "http-status";


import catchAsync from "../../app/utils/CatchAsync";
import { AcademicSemistarService } from "./AcademicSemistar.service";





// **********************************************end create a higher order function 


// ********************************error handeling with globally********************************** 
const  CreateAcaDemicSemistarControllers =catchAsync( async (req, res,next) => {
 
    const result = await AcademicSemistarService.CreateAcademicSemisTarIntoDb(req.body);
   

    sendResponse(res,{
      statusCode:HttpStatus.OK,
      sucess:true,
      message:"create Academic Semistar Sucessfully",
      data:result
    })
 
});



//***********************************start get all Academic Semisatr ***************************************************
const getAllAcademicSemisatrtControllers = catchAsync(async (req, res) => {
  const result =
    await AcademicSemistarService.getAllAcademicSemisTarServiceFromDb();
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    sucess: true,
    message: "Academic Semistar are retrive sucessfully",
    data: result,
  });
});

//********************************* */ end get all Academic Semistar ************************************************

// ---------------------------------------start a single Academsic Semistar-------------------------------

const getASingleAcademicSemistarControllers = catchAsync(async (req, res) => {
  const { semistarId } = req.params;
  const result =
    await AcademicSemistarService.getSingleSemistarServiceFromDb(
      semistarId
    );

  sendResponse(res, {
    statusCode: HttpStatus.OK,
    sucess: true,
    message: "get a single academic semistar sucessfully",
    data: result,
  });
});

//************************* **************************Update semistar Controllers**************************

const UpdateAcademicSemistarControllers = catchAsync(async (req, res) => {
  const { semistarId } = req.params;

  const result = await AcademicSemistarService.UpdateSemistartService(
    semistarId,
    req.body
  );

  sendResponse(res, {
    statusCode: HttpStatus.OK,
    sucess: true,
    message: "Academic Semistar is Update sucessfully",
    data: result,
  });
});

export const AcademicSemisTarControllers = {
  
  CreateAcaDemicSemistarControllers,
  getAllAcademicSemisatrtControllers,
  getASingleAcademicSemistarControllers,
  UpdateAcademicSemistarControllers

 
};
