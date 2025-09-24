import React from "react";

import { useAuth } from "../context/AuthContext";

const Receipts: React.FC = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <div>
      <p>This is the Receipts.</p>
    </div>
  );
};

export default Receipts;
