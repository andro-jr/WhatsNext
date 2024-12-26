import React from "react";
import { auth } from "../_lib/auth";

export const metadata = {
  title: "Accounts",
};

const page: React.FC = async () => {
  const session = await auth();
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {session?.user?.name?.split(" ")[0]}
    </h2>
  );
};

export default page;
