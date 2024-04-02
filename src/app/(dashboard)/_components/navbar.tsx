import { NavbarRoutes } from "@/components/navbar-routes"
import { MobileSidebar } from "./mobile-sidebar"

export const Navbar = () => {
  return (
    <div className="bg-slate-900 p-4 border-b h-full flex items-center shadow-sm">
      <MobileSidebar/>
      <NavbarRoutes/>
    </div>
  )
}