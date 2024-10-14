import { z } from "zod";

export const SignUpSchema = (divisionOptions, departmentOptions) =>
  z.object({
    firstName: z.string().min(3, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    username: z.string().min(3, { message: "Username is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/\d/, { message: "Password must contain at least one number" })
      .regex(/[@$!%*?&#]/, {
        message: "Password must contain at least one special character",
      }),
    divisionId: z.string().refine((value) => {
      return divisionOptions.some((option) => option.value === value);
    }, {
      message: "Please select a valid division.",
    }),
    departmentId: z.string().refine((value) => {
      return departmentOptions.some((option) => option.value === value);
    }, {
      message: "Please select a valid department.",
    }),
  });
