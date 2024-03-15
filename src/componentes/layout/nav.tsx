import NavBar from "@/componentes/navbar/navbar";

const Layout = ({ children }: any) => {
  return (
    <div>
      <NavBar />
      <main>{children} </main>
    </div>
  );
};
export default Layout;
