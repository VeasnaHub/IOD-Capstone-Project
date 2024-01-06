import { useState, useContext, createContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = (props) => {
  const storedUser = JSON.parse(localStorage.getItem('user')) || {};

  const [currentUser, setCurrentUser] = useState(storedUser);

  const handleUpdateUser = (user) => {
    setCurrentUser(user);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <UserContext.Provider value={{ currentUser, handleUpdateUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
