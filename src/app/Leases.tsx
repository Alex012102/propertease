import React from "react";

import { useAuth } from "../context/AuthContext";

const Leases: React.FC = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <div>
      <p>This is the Leases.</p>
    </div>
  );
};

export default Leases;
