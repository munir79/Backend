import { z } from 'zod';

const UserNameZodSchema = 
z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().min(1, "Middle name is required"),
  lastName: z.string().min(1, "Last name is required"),
});

const GuardianZodSchema = z.object({
  fatherName: z.string().min(1, "Father's name is required"),
  fatherOccupation: z.string().min(1, "Father's occupation is required"),
  motherName: z.string().min(1, "Mother's name is required"),
  motherOccupation: z.string().min(1, "Mother's occupation is required"),
});

const LocalGuardianZodSchema = z.object({
  name: z.string().min(1, "Local guardian's name is required"),
  occupation: z.string().min(1, "Occupation is required"),
  contactNumber: z.string().min(1, "Contact number is required"),
});

export const StudentZodSchema =
z.object({
  body: z.object({
    id: z.string().min(1, "ID is required"),
    name: UserNameZodSchema,
    gender: z.enum(['male', 'female'], {
      required_error: "Gender is required",
      invalid_type_error: "Gender must be either 'male' or 'female'",
    }),
    dateOfBirth: z.string().min(1, "Date of birth is required"),
    email: z.string().email("Invalid email format"),
    contactNumber: z.string().min(1, "Contact number is required"),
    emergencyContactNumber: z.string().min(1, "Emergency contact number is required"),
    guardian: GuardianZodSchema,
    presentAddress: z.string().min(1, "Present address is required"),
    permannetAddress: z.string().min(1, "Permanent address is required"),
    localGuardian: LocalGuardianZodSchema,
    profileImage: z.string().min(1, "Profile image is required"),
    password: z.string().min(1, "Password is required"),
  })
})


export const StudentValidationSchema={
  StudentZodSchema

};