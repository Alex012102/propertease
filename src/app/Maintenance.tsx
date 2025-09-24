import React from "react";

import { useAuth } from "../context/AuthContext";

const Maintenance: React.FC = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <div>
      <p>This is the Maintenance.</p>
    </div>
  );
};

export default Maintenance;
