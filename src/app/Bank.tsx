import React from "react";

import { useAuth } from "../context/AuthContext";

const Bank: React.FC = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <div>
      <p>This is the Bank.</p>
    </div>
  );
};

export default Bank;
