import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { fetchUsers } from "../api";
import { User } from "../Types";

type AppContextType = {
  users: User[];
};

const AppContext = createContext<AppContextType>({ users: [] });

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers().then((data: User[]) => setUsers(data));
  }, []);

  return (
    <AppContext.Provider value={{ users }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
