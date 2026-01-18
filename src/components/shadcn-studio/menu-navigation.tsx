import type { ReactNode } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export type NavigationItem = {
  title: string;
  href: string;
};

export type NavigationSection = {
  title: string;
  icon?: ReactNode;
} & (
  | {
      items: NavigationItem[];
      href?: never;
    }
  | {
      items?: never;
      href: string;
    }
);

type MenuNavigationProps = {
  navigationData: NavigationSection[];
  currentPath?: string; // new prop
  className?: string;
};

const MenuNavigation = ({
  navigationData,
  currentPath = "/",
  className,
}: MenuNavigationProps) => {
  const navigate = useNavigate();
  return (
    <NavigationMenu viewport={false} className={className}>
      <NavigationMenuList className="flex-wrap justify-start gap-0">
        {navigationData.map((navItem) => {
          if (navItem.href) {
            const isActive = currentPath === navItem.href; // check if current route

            return (
              <NavigationMenuItem key={navItem.title}>
                <NavigationMenuLink
                  onClick={() => navigate(navItem.href)}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "px-3 py-1.5 text-base!",
                    "text-muted-foreground hover:text-primary dark:hover:bg-accent/50 bg-transparent",
                    isActive && "text-primary font-semibold", // active styling
                  )}
                >
                  {navItem.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }

          // Dropdown sections (optional, keep same)
          return (
            <NavigationMenuItem key={navItem.title}>
              <NavigationMenuTrigger className="dark:data-[state=open]:hover:bg-accent/50 text-muted-foreground hover:text-primary dark:hover:bg-accent/50 bg-transparent px-3 py-1.5 text-base [&>svg]:size-4">
                {navItem.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute w-auto">
                <ul className="grid w-38 gap-4">
                  {navItem.items?.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink
                        onClick={() => navigate(item.href)}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          currentPath === item.href &&
                            "text-primary font-semibold",
                        )}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MenuNavigation;
