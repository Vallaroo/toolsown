"use client"

import * as React from "react"

import { BookOpen, Calculator, ChevronsUpDown, EarthLock, Flag, GalleryVerticalEnd, Settings2, } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar"

import { NavMain } from "@/components/ui/nav-main"

// Menu items.
const data = {
  toolsown: {
    name: "ToolsOwn",
    logo: GalleryVerticalEnd,
    subTitle: "Simplified Finance Calculator Hub",
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
          url: "#",
        },
        {
          title: "EMI Calculator",
          url: "#",
        },
        {
          title: "Mutual Fund Calculatore",
          url: "#",
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
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Finance",
          url: "#",
        },
        {
          title: "Crypto",
          url: "#",
        },
        {
          title: "Wealth",
          url: "#",
        },
        {
          title: "Fin-tech",
          url: "#",
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
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
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
      <SidebarMenuButton asChild>
  <a href="#">Home</a>
</SidebarMenuButton>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
  )
}
