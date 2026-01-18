// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { ModeSwitch } from "@/components/mode-toggle";
import ProfileDropdown from "@/components/shadcn-studio/dropdown-profile";
import { Link } from "react-router-dom";
import { brand } from "@/data/globalVariables";
import { useUserStore } from "@/store/useUserStore";
import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { NavigationSection } from "../../components/shadcn-studio/menu-navigation";
import MenuNavigation from "../../components/shadcn-studio/menu-navigation";
import MenuDropdown from "../../components/shadcn-studio/menu-dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type HeaderProps = {
  navigationData: NavigationSection[];
  className?: string;
};

const Header = ({ navigationData, className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { user, token } = useUserStore();

  return (
    <header
      className={cn(
        "fixed top-0 z-50 h-17.5 w-full border-b transition-all duration-300",
        {
          "bg-background shadow-md": isScrolled,
        },
        className,
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <span className="text-primary text-[20px] font-semibold">
            {brand.name}
          </span>
        </a>

        {/* Navigation */}
        <MenuNavigation
          navigationData={navigationData}
          className='max-lg:hidden [&_[data-slot="navigation-menu-list"]]:gap-1'
        />

        {/* Actions */}
        <div className="flex gap-4">
          {user && token ? (
            // <DropdownMenu>
            //   <DropdownMenuTrigger asChild>
            //     <Avatar>
            //       <AvatarImage src="https://github.com/shadcn.png" />
            //       <AvatarFallback>CN</AvatarFallback>
            //     </Avatar>
            //   </DropdownMenuTrigger>
            //   <AlertDialog>
            //     <DropdownMenuContent
            //       side="top"
            //       className="w-[--radix-popper-anchor-width]"
            //     >
            //       <DropdownMenuItem>
            //         <span>Account</span>
            //       </DropdownMenuItem>
            //       <DropdownMenuItem>
            //         <span>Billing</span>
            //       </DropdownMenuItem>
            //       <DropdownMenuItem>
            //         <ModeSwitch />
            //       </DropdownMenuItem>
            //       <DropdownMenuItem asChild>
            //         <AlertDialogTrigger className="w-full text-left">
            //           Sign out
            //         </AlertDialogTrigger>
            //       </DropdownMenuItem>
            //     </DropdownMenuContent>

            //     <AlertDialogContent>
            //       <AlertDialogHeader>
            //         <AlertDialogTitle>Sign out?</AlertDialogTitle>
            //         <AlertDialogDescription>
            //           You will be logged out and redirected to login page.
            //         </AlertDialogDescription>
            //       </AlertDialogHeader>
            //       <AlertDialogFooter>
            //         <AlertDialogCancel>Cancel</AlertDialogCancel>
            //         <AlertDialogAction onClick={handleLogout}>
            //           Confirm
            //         </AlertDialogAction>
            //       </AlertDialogFooter>
            //     </AlertDialogContent>
            //   </AlertDialog>
            // </DropdownMenu>
            <ProfileDropdown
              trigger={
                <Button variant="ghost" size="icon" className="size-9.5">
                  <Avatar className="size-9.5 rounded-md">
                    <AvatarImage src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              }
            />
          ) : (
            <Button className="rounded-full" asChild>
              <Link to={"/login"}>Login</Link>
            </Button>
          )}

          {/* Navigation for small screens */}
          <div className="flex gap-3">
            <MenuDropdown
              align="end"
              navigationData={navigationData}
              trigger={
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full lg:hidden"
                >
                  <MenuIcon />
                  <span className="sr-only">Menu</span>
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
