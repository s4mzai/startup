"use client";

import React, { useState, ReactNode } from "react";
import { signOut } from "next-auth/react";

interface SignOutButtonProps {
  children?: ReactNode;
}

const SignOutButton: React.FC<SignOutButtonProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    await signOut();
    setLoading(false);
    window.location.href = "/";

  };

  return (
    <button
      className="text-white bg-black p-2 hover:bg-gray-900 cursor-pointer rounded-full"
      disabled={loading}
      onClick={handleSignOut}
    >
      {children || "SignOut"}
    </button>
  );
};

export default SignOutButton;
