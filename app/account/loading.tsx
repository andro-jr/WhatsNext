import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      {/* test ssh commit */}
      <p className="text-xl text-primary-200">Loading</p>
    </div>
  );
}
