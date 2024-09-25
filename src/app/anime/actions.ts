"use server";

import { redirect } from "next/navigation";
import { generateSearchParams } from "./generateSearchParams";

export const updateFilter = async (formData: FormData) => {
  console.log("formData", formData);
  const q = (formData.get("q") as string)?.trim();
  const page = Number(formData.get("page")) || 1;
  const type = formData.get("type") as string;
  const status = formData.get("status") as string;
  const rating = formData.get("rating") as string;
  const order_by = formData.get("order_by") as string;
  const sort = formData.get("sort") as string;
  const genres = formData.getAll("genres") as string[];
  const min_score = formData.get("min_score") as string;
  const max_score = formData.get("max_score") as string;

  redirect(
    `/anime${generateSearchParams({
      q,
      page,
      type,
      status,
      rating,
      order_by,
      sort,
      genres: genres.join(","),
      min_score,
      max_score,
    })}`
  );
};
