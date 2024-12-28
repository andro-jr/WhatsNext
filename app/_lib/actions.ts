"use server";

import { auth, signIn, signOut } from "./auth";
import supabase from "./supabase";

export async function updateProfile(formData: FormData) {
  const session = await auth();

  if (!session) throw new Error("You must be logged in!");

  const nationalId = formData.get("nationalId");

  // Regex to validate an alphanumeric string between 6 and 12 characters
  const nationalIdRegex = /^[a-zA-Z0-9]{6,12}$/;

  if (nationalId && !nationalIdRegex.test(nationalId as string)) {
    throw new Error(
      "Invalid national ID. It must be alphanumeric and 6-12 characters long."
    );
  }

  const [nationality, countryFlag] = (
    formData.get("nationality") as string
  ).split("%");

  const updateData = { nationality, countryFlag, nationalId };
  const { error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user?.id);

  if (error) {
    throw new Error("Guest could not be updated");
  }
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
