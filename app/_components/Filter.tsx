"use client";

import React from "react";
import { CabinFilters } from "../_types/enums";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  const handleFilter = (filter: CabinFilters) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="border border-primary-800 flex">
      <FilterButton
        filter={CabinFilters.All}
        activeFilter={activeFilter}
        filterHandler={() => handleFilter(CabinFilters.All)}
        filterText="All guests"
      />
      <FilterButton
        filter={CabinFilters.Small}
        activeFilter={activeFilter}
        filterHandler={() => handleFilter(CabinFilters.Small)}
        filterText="1 - 3 guests"
      />
      <FilterButton
        filter={CabinFilters.Medium}
        activeFilter={activeFilter}
        filterHandler={() => handleFilter(CabinFilters.Medium)}
        filterText="4 - 7 guests"
      />
      <FilterButton
        filter={CabinFilters.Large}
        activeFilter={activeFilter}
        filterHandler={() => handleFilter(CabinFilters.Large)}
        filterText="8 - 12 guests"
      />
    </div>
  );
}

function FilterButton({
  filter,
  activeFilter,
  filterText,
  filterHandler,
}: {
  filter: CabinFilters;
  activeFilter: string;
  filterText: string;
  filterHandler: () => void;
}) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 [&:not(:last-child)]:border-r border-primary-800 ${activeFilter === filter ? "bg-primary-700" : ""}`}
      onClick={filterHandler}
    >
      {filterText}
    </button>
  );
}

export default Filter;
