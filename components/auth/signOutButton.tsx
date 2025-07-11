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
      className="rounded-2xl border-2 border-dashed border-black bg-black lg:bg-[#fabb20] px-6 py-3 font-semibold uppercase text-white lg:text-black cursor-pointer lg:hover:text-white lg:hover:bg-black transition-all duration-300 translate-x-[-4px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] translate-y-[-4px] lg:translate-y-[0px] hover:rounded-md shadow-[4px_4px_0px_#fabb20] lg:shadow-[0px_0px_0px_#fabb20] hover:shadow-[4px_4px_0px_#fabb20] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none w-full"
      disabled={loading}
      onClick={handleSignOut}
    >
      {children || "SignOut"}
    </button>
  );
};

export default SignOutButton;
