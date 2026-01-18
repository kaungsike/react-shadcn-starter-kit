import type { ReactNode } from "react";
import {
  UserIcon,
  SettingsIcon,
  CreditCardIcon,
  UsersIcon,
  SquarePenIcon,
  CirclePlusIcon,
  LogOutIcon,
  LayoutDashboard,
  Home,
} from "lucide-react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeSwitch } from "../mode-toggle";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

import { useUserStore } from "@/store/useUserStore";
import { useNavigate } from "react-router-dom";
import { useLogout } from "@/hooks/useLogout";

type Props = {
  trigger: ReactNode;
  defaultOpen?: boolean;
  align?: "start" | "center" | "end";
};

const ProfileDropdown = ({ trigger, defaultOpen, align = "end" }: Props) => {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  return (
    <DropdownMenu defaultOpen={defaultOpen}>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <AlertDialog>
        <DropdownMenuContent className="w-80" align={align}>
          <DropdownMenuLabel className="flex items-center gap-4 px-4 py-2.5 font-normal">
            <div className="relative">
              <Avatar className="size-10">
                <AvatarImage src={user?.profile_image || ""} alt={user?.name} />
                <AvatarFallback>
                  {user?.name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span className="absolute right-0 bottom-0 block size-2 rounded-full bg-green-600 ring-2 ring-card" />
            </div>
            <div className="flex flex-1 flex-col items-start">
              <span className="text-foreground text-lg font-semibold">
                {user?.name}
              </span>
              <span className="text-muted-foreground text-base">
                {user?.email}
              </span>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() => navigate("/profile")}
              className="px-4 py-2.5 text-base"
            >
              <UserIcon className="size-5" />
              My Account
            </DropdownMenuItem>
            {user?.role === "admin" && (
              <>
                <DropdownMenuItem
                  onClick={() => navigate("/dashboard")}
                  className="px-4 py-2.5 text-base"
                >
                  <LayoutDashboard className="size-5" />
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => navigate("/")}
                  className="px-4 py-2.5 text-base"
                >
                  <Home className="size-5" />
                  Home
                </DropdownMenuItem>
              </>
            )}
            <DropdownMenuItem className="px-4 py-2.5 text-base">
              <SettingsIcon className="size-5" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="px-4 py-2.5 text-base">
              <ModeSwitch />
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem className="px-4 py-2.5 text-base">
              <CirclePlusIcon className="size-5" />
              Add Team Account
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          {/* Logout Confirm Dialog */}
          <AlertDialogTrigger asChild>
            <DropdownMenuItem
              variant="destructive"
              className="flex items-center gap-2 px-4 py-2.5 text-base"
            >
              <LogOutIcon className="size-5" />
              Logout
            </DropdownMenuItem>
          </AlertDialogTrigger>
        </DropdownMenuContent>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Sign out?</AlertDialogTitle>
            <AlertDialogDescription>
              You will be logged out and redirected.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={useLogout().handleLogout}>
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
