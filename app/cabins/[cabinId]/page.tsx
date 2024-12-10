import CabinDetails from "@/app/_components/CabinDetails";
import CabinReservation from "@/app/_components/CabinReservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

interface PageParamType {
  params: {
    cabinId: string;
  };
}

export const generateMetadata = async ({ params }: PageParamType) => {
  const { name } = await getCabin(params.cabinId);

  return {
    title: `Cabin ${name}`,
  };
};

export const generateStaticParams = async () => {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));
  return ids;
};

export default async function Page({ params }: PageParamType) {
  const { cabinId } = params;
  const cabin = await getCabin(cabinId);
  const { name } = cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <CabinDetails cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {name} today. Pay on arrival.
        </h2>
        <Suspense key={params.cabinId} fallback={<Spinner />}>
          <CabinReservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
