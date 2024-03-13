// Logout.tsx
import { useRouter } from "next/navigation";
import { logOut } from "@/firebase/authService";

const Logout: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    logOut()
      .then(() => {
        router.push("/Login");
      })
      .catch((error) => {
        console.error("Erro ao fazer logout:", error);
      });
  };

  return (
    <button
      className=" text-green-300 bg-red-800 w-[200px] h-[40px] rounded-lg "
      onClick={handleLogout}
    >
      Sair
    </button>
  );
};

export default Logout;
