import React from "react";

import { useAuth } from "../context/AuthContext";

const Properties: React.FC = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <div>
      <p>This is the Properties.</p>
    </div>
  );
};

export default Properties;
