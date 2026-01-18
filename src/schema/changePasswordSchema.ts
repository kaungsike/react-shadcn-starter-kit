import z from "zod";

export const changePasswordSchema = z
  .object({
    current_password: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
    new_password: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
    new_password_confirmation: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters long"),
  })
  .refine((data) => data.current_password !== data.new_password, {
    path: ["new_password"],
    message: "New password must be different from current password",
  })
  .refine((data) => data.new_password === data.new_password_confirmation, {
    path: ["new_password_confirmation"],
    message: "Passwords do not match",
  });

export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;
