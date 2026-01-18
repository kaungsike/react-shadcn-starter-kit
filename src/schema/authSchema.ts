import z from "zod";

export const loginFromSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const registerFormSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    phone_number: z
      .string()
      .min(10, "Phone number must be at least 10 characters long"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    password_confirmation: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters long"),
    role: z.literal("customer"),
    passport_no: z.string().nullable().optional().or(z.literal("")),
    address: z.string().min(5, "Address must be at least 5 characters long"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    path: ["password_confirmation"],
    message: "Passwords do not match",
  });

export type LoginFormData = z.infer<typeof loginFromSchema>;
export type RegisterFormData = z.infer<typeof registerFormSchema>;
