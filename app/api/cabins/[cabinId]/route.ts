import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(
  req: Request,
  { params }: { params: { cabinId: string } }
) {
  const { cabinId } = params;

  try {
    const [cabins, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return Response.json({
      cabins,
      bookedDates,
    });
  } catch {
    return Response.json({ message: "Failed to fetch data." });
  }
}
