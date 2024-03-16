import NavBar from "@/components/navbar/navbar";

const LayoutNav = ({ children }: any) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};
export default LayoutNav;
