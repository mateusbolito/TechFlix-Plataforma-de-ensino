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

  return <button onClick={handleLogout}>Sair da Conta</button>;
};

export default Logout;
