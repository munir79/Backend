


export  type TUser={
    id:string;
    password:string;
    neewdPasswordChange:boolean;
    role:'admin'|'student'|'faculty';
    status:'in-progress'| 'blocked';
    isDeleted:boolean;

}


// export type NewUSer={
//     role:string;
//     password:string;
//     id:string
// }