import MenuDashboard from "@/components/dashboard/MenuDashboard";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Dashboard admin",
  description: "XDXDXDXDX"
}

function LayoutDashBoard({children,}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <MenuDashboard />
      {children}
    </>
  );
}

export default LayoutDashBoard;
