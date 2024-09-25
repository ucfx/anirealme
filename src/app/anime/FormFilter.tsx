"use client";

import { useState } from "react";
import { FilterStateType } from "./generateSearchParams";
import { updateFilter } from "./actions";
import { Button } from "@/components/ui/button";
import { ChevronRight, SlidersHorizontal } from "lucide-react";
import {
  animeStatus,
  animeTypes,
  order_by,
  rating,
  sort,
} from "@/constant/animeFilter";
import { GenreType } from "@/types/genre";
import MultiSelect from "@/components/MultiSelect";
import Select from "@/components/Select";
export default function FormFilter({
  searchParams,
  genres,
}: {
  searchParams: FilterStateType;
  genres: GenreType[];
}) {
  const [q, setQuery] = useState(searchParams.q || "");
  const [open, setOpen] = useState(false);
  const [genresSelected, setGenresSelected] = useState<string[]>(
    searchParams.genres?.split(",") ?? []
  );
  const [minScore, setMinScore] = useState(searchParams.min_score || "");
  const [maxScore, setMaxScore] = useState(searchParams.max_score || "");

  const reset = () => {
    setQuery("");
    setGenresSelected([]);
    setMinScore("");
    setMaxScore("");
  };
  return (
    <form
      action={updateFilter}
      className="flex flex-col items-center justify-center"
    >
      <div className="relative w-full max-w-[500px] mx-auto">
        <input
          type="text"
          name="q"
          value={q}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search anime..."
          className="w-full h-full p-2 pr-10 my-6 transition-colors bg-transparent border-b-2 border-foreground/50 focus:border-primary text-foreground outline-none"
        />

        <Button
          variant={"ghost"}
          onClick={() => setOpen((_) => !_)}
          size={"icon"}
          asChild
          className="absolute right-0 top-1/2 p-2 transform -translate-y-1/2 cursor-pointer"
        >
          <SlidersHorizontal size={24} />
        </Button>
      </div>
      <div
        className={`w-full grid grid-rows-[0fr] transition-[grid-template-rows] ${
          open ? "grid-rows-[1fr]" : ""
        }`}
      >
        <div className="overflow-hidden">
          <div className="w-full max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <FilterInput
              data={animeTypes}
              label="Anime Type"
              name="type"
              defaultValue={searchParams.type}
            />

            <FilterInput
              data={animeStatus}
              label="Status"
              name="status"
              defaultValue={searchParams.status}
            />

            <FilterInput
              data={rating}
              label="Rating"
              name="rating"
              defaultValue={searchParams.rating}
            />

            <FilterInput
              data={order_by}
              label="Order By"
              name="order_by"
              defaultValue={searchParams.order_by}
            />

            <FilterInput
              data={sort}
              label="Sort"
              name="sort"
              defaultValue={searchParams.sort}
            />

            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Genres
              </label>
              <input
                type="hidden"
                name="genres"
                value={genresSelected.join(",")}
              />
              <MultiSelect
                name="genres"
                options={genres.map((genre) => ({
                  label: genre.name,
                  value: genre.mal_id.toString(),
                }))}
                defaultValue={searchParams.genres?.split(",")}
                onValueChange={(value) => {
                  setGenresSelected(value);
                }}
                maxCount={2}
              />
            </div>

            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Score
              </label>
              <div className="flex justify-between items-center gap-4">
                <input
                  type="number"
                  name="min_score"
                  value={minScore}
                  min={1}
                  max={10}
                  onChange={(e) => setMinScore(e.target.value)}
                  placeholder="Min Score"
                  className="w-1/2 h-10 p-2 border rounded-md bg-transparent focus:border-primary outline-none"
                />
                <ChevronRight size={24} className="text-gray-700" />

                <input
                  type="number"
                  name="max_score"
                  value={maxScore}
                  min={1}
                  max={10}
                  onChange={(e) => setMaxScore(e.target.value)}
                  placeholder="Max Score"
                  className="w-1/2 h-10 p-2 border rounded-md bg-transparent focus:border-primary outline-none"
                />
              </div>
            </div>

            <div className="flex gap-4 justify-self-center justify-between sm:justify-center sm:col-span-2 lg:col-span-3">
              <div className="flex justify-end mt-4">
                <Button
                  variant={"outline"}
                  onClick={() => {
                    reset();
                    updateFilter(new FormData());
                  }}
                  type="reset"
                  className="w-28"
                >
                  Clear All
                </Button>
              </div>
              <div className="flex justify-start mt-4">
                <Button className="w-28" type="submit">
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

const FilterInput = ({
  data,
  name,
  defaultValue,
  label,
}: {
  data: { label: string; value: string }[];
  name: string;
  defaultValue: string;
  label: string;
}) => {
  return (
    <div className="w-full">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <Select data={data} name={name} defaultValue={defaultValue} />
    </div>
  );
};
