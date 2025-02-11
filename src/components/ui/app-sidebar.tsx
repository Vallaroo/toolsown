"use client"

import * as React from "react"
import {
  BookOpen,
  Calculator,
  EarthLock,
  GalleryVerticalEnd,
  Settings2,
  Home
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavMain } from "@/components/ui/nav-main"
import Link from "next/link"

// Menu items
const data = {
  toolsown: {
    name: "ToolsOwn",
    logo: GalleryVerticalEnd,
    subTitle: "Simplified Finance Calculator Hub",
  },
  home: {
    title: "Home",
    url: "/",
    icon: Home,
    isActive: false,
  },
  navMain: [
    {
      title: "Finance Calculators",
      url: "#",
      icon: Calculator,
      isActive: true,
      items: [
        {
          title: "Income Tax Calculator",
          url: "/income-tax-calculator",
        },
        {
          title: "EMI Calculator",
          url: "/emi-calculator",
        },
        {
          title: "Mutual Fund Calculator",
          url: "/mutual-fund-calculator",
        },
      ],
    },
    {
      title: "Crypto Finance Calculators",
      url: "#",
      icon: EarthLock,
      items: [
        {
          title: "Profit Calculator",
          url: "#",
        },
      ],
    },
    {
      title: "Blogs",
      url: "/pages/blog",
      icon: BookOpen,
      items: [
        {
          title: "Finance",
          url: "/pages/blog/finance",
        },
        {
          title: "Crypto",
          url: "/pages/blog/crypto",
        },
        {
          title: "Wealth",
          url: "/pages/blog/wealth",
        },
        {
          title: "Fin-tech",
          url: "/pages/blog/fin-tech",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Report",
          url: "#",
        },
        {
          title: "About Us",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const sidebarRef = React.useRef<HTMLDivElement>(null);

  const handleLogoClick = () => {
    const sidebar = sidebarRef.current;
    if (sidebar) {
      const isCollapsed = sidebar.getAttribute('data-collapsed') === 'true';
      sidebar.setAttribute('data-collapsed', (!isCollapsed).toString());
    }
  };

  return (
    <Sidebar
      ref={sidebarRef}
      collapsible="icon"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          onClick={handleLogoClick}
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">
              {data.toolsown.name}
            </span>
            <span className="truncate text-xs">{data.toolsown.subTitle}</span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <Link href="/">
          <SidebarMenuButton asChild className="flex items-center justify-center">
            <SidebarMenuButton tooltip={data.home.title} className="flex items-center justify-start pl-4">
              {data.home.icon && <data.home.icon className="size-4 " />}
              <span className="data-[collapsed=true]:hidden">{data.home.title}</span>
            </SidebarMenuButton>
          </SidebarMenuButton>
        </Link>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
  )
}