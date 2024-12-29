"use client";
import { updateReservation } from "@/app/_lib/actions";
import React, { useTransition } from "react";

interface EditReservationFormProps {
  numGuests: number;
  maxCapacity: number;
  observations: string;
  bookingId: string;
}

const EditReservationForm = ({
  numGuests,
  maxCapacity,
  observations,
  bookingId,
}: EditReservationFormProps) => {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    // Add bookingId
    formData.append("bookingId", bookingId);

    startTransition(() => updateReservation(formData));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label htmlFor="numGuests">How many guests?</label>
        <select
          name="numGuests"
          id="numGuests"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          required
          defaultValue={numGuests}
        >
          <option value="" key="">
            Select number of guests...
          </option>
          {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
            <option value={x} key={x}>
              {x} {x === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="observations">
          Anything we should know about your stay?
        </label>
        <textarea
          name="observations"
          defaultValue={observations}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <button
          disabled={isPending}
          className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
        >
          {isPending ? "Updating..." : "Update reservation"}
        </button>
      </div>
    </form>
  );
};

export default EditReservationForm;
