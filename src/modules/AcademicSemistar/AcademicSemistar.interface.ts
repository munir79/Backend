
export type TMonths = 'January'| 'February'| 'March'| 'April'| 'May'| 'June'| 'July'| 'August'| 'September'| 'October'| 'November'| 'December';

 export type TAcaDemicSemistarName='Autum'|'Summer' | 'Fall'
export type TAcaDemicSemistarCode='01'|'02' | '03'
export type TAcademicSemistar={
    name:TAcaDemicSemistarName,
    code:TAcaDemicSemistarCode
    year:Date;
    startMonth:TMonths;
    endMonth:TMonths
}

export type TAcademicSemistarMapper={
    [key:string]:string;
  }
