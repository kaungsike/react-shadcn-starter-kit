import {
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Spinner } from "../ui/spinner";
import z from "zod";
import { toast } from "sonner";
import {
  changePasswordSchema,
  type ChangePasswordFormData,
} from "@/schema/changePasswordSchema";
import { useChangePassword } from "@/hooks/useChangePassword";
import { useState } from "react";
import { useUserStore } from "@/store/useUserStore";
import { useNavigate } from "react-router-dom";

interface Props {
  onClose: () => void; // function to close the dialog
}

const ChangePasswordDialog = ({ onClose }: Props) => {
  const { loading, errors: apiErrors, changePassword } = useChangePassword();
  const { logout } = useUserStore();
  const navigate = useNavigate();

  const [form, setForm] = useState<ChangePasswordFormData>({
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ChangePasswordFormData, string>>
  >({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // 1️⃣ Client validation
      changePasswordSchema.parse(form);
      setErrors({});

      // 2️⃣ API call
      await changePassword(form);


      // 4️⃣ Clear local state, logout, and redirect
      logout();
      navigate("/login", { replace: true });

      // 5️⃣ Close the dialog
      onClose?.();
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        err.issues.forEach((issue) => {
          const key = issue.path[0] as string;
          fieldErrors[key] = issue.message;
        });
        setErrors(fieldErrors);
        toast.error("Please fix the form errors");
      }
    }
  };

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Change Password</AlertDialogTitle>
        <AlertDialogDescription>
          Update your account password. This action requires your current
          password.
        </AlertDialogDescription>
      </AlertDialogHeader>

      <form id="change-password-form" onSubmit={handleSubmit}>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="current_password">Current Password</FieldLabel>
            <Input
              id="current_password"
              type="password"
              value={form.current_password}
              onChange={(e) =>
                setForm({ ...form, current_password: e.target.value })
              }
            />
            {(errors.current_password || apiErrors.current_password) && (
              <p className="mt-1 text-sm text-red-600">
                {errors.current_password || apiErrors.current_password}
              </p>
            )}
          </Field>

          <Field className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="new_password">New Password</FieldLabel>
              <Input
                id="new_password"
                type="password"
                value={form.new_password}
                onChange={(e) =>
                  setForm({ ...form, new_password: e.target.value })
                }
              />
              {(errors.new_password || apiErrors.new_password) && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.new_password || apiErrors.new_password}
                </p>
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="new_password_confirmation">
                Confirm Password
              </FieldLabel>
              <Input
                id="new_password_confirmation"
                type="password"
                value={form.new_password_confirmation}
                onChange={(e) =>
                  setForm({
                    ...form,
                    new_password_confirmation: e.target.value,
                  })
                }
              />
              {(errors.new_password_confirmation ||
                apiErrors.new_password_confirmation) && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.new_password_confirmation ||
                    apiErrors.new_password_confirmation}
                </p>
              )}
            </Field>
          </Field>
        </FieldGroup>
      </form>

      <AlertDialogFooter>
        <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
        <Button type="submit" form="change-password-form" disabled={loading}>
          {loading ? <Spinner /> : "Update Password"}
        </Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default ChangePasswordDialog;
