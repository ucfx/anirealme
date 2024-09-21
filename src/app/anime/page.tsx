import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import AnimeList from "./AnimeList";

export default function AnimePage() {
  return (
    <div className="container">
      <CustomBreadcrumb />
      <AnimeList />
    </div>
  );
}
