"use client";

import React from "react";
import { CabinFilters } from "../_types/enums";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleFilter = (filter: CabinFilters) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="border border-primary-800 flex">
      <button
        className="px-5 py-2 hover:bg-primary-700 [&:not(:last-child)]:border-r border-primary-800"
        onClick={() => handleFilter(CabinFilters.All)}
      >
        All cabins
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700 [&:not(:last-child)]:border-r border-primary-800"
        onClick={() => handleFilter(CabinFilters.Small)}
      >
        1 - 3 guests
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700 [&:not(:last-child)]:border-r border-primary-800"
        onClick={() => handleFilter(CabinFilters.Medium)}
      >
        4 - 7 guests
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700 [&:not(:last-child)]:border-r border-primary-800"
        onClick={() => handleFilter(CabinFilters.Large)}
      >
        8 - 12 guests
      </button>
    </div>
  );
}

export default Filter;
