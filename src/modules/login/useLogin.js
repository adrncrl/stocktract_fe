import { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "api/auth";

const useLogin = (login) => {
  const [error, setError] = useState("");

  const handleLogin = async (data, role) => {
    try {
      const { token, userData } = await loginUser({ ...data, role });
      login(token, userData);

      toast.success("Login successfully!");
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return { handleLogin, error };
};

export default useLogin;
