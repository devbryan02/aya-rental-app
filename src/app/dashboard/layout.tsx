import MenuDashboard from "@/components/dashboard/MenuDashboard";

function LayoutDashBoard({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <MenuDashboard />
      {children}
    </>
  );
}

export default LayoutDashBoard;
