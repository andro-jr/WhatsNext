import React from "react";

const page: React.FC = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log("res :", await res.json());

  return <div>Cabins Page</div>;
};

export default page;
