import { getCabins } from "../_lib/data-service";
import { Cabin } from "../_types";
import CabinCard from "./CabinCard";

interface CabinListProps {
  filter: string;
}

export default async function CabinList({ filter }: CabinListProps) {
  const cabins: Cabin[] = await getCabins();

  if (cabins.length === 0) return null;

  let filteredCabins: Cabin[] = [];

  if (filter === "all") {
    filteredCabins = cabins;
  } else if (filter === "small") {
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  } else if (filter === "medium") {
    filteredCabins = cabins.filter(
      (cabin) => cabin.maxCapacity > 3 && cabin.maxCapacity < 8
    );
  } else if (filter === "large")
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filteredCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
