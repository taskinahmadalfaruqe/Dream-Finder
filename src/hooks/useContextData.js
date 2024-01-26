import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";

const useContextData = () => {
  const providedData = useContext(AuthContext);
  return providedData;
};

export default useContextData;
