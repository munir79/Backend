import { z } from 'zod';

 const userZodSchema = z.object({
  // id: z.string({
  //   required_error: 'ID is required',
  // }),
  password: z.string({
    required_error: 'Password is required',
  }).optional(),
  // neewdPasswordChange: z.boolean().optional().default(false),
  // role: z.enum(['admin', 'faculty', 'student'], {
  //   required_error: 'Role is required and must be either admin, faculty or student',
  // }),
//   status: z.enum(['in-progress', 'blocked'], {
//     required_error: 'Status is required and must be either in-progress or blocked',
//   }),
//   isDeleted: z.boolean().optional().default(false),
});


export default userZodSchema;