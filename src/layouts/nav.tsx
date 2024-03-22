import NavBar from "@/components/NavBar/navbar";
import Navigate from "@/components/Navigate/Navigate";

const LayoutNav = ({ children }: any) => {
  return (
    <div>
      <NavBar />
      <Navigate />
      {children}
    </div>
  );
};
export default LayoutNav;
