import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const Search = () => {
  const router = useRouter();
  const query = router.query.q as string;

  const handleSearch = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      if (query.trim()) {
        router.push(`/blog?q=${encodeURIComponent(query)}`);
      }
    },
    [query, router]
  );

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;

    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, undefined, {
      shallow: true,
      scroll: false,
    });
  };
  return (
    <form className="relative group">
      <SearchIcon
        className={cn(
          "absolute text-gray-300 left-3 top-1/2 -translate-y-1/2 h-6 w-6 transition-colors duration-200 group-focus-within:text-blue-300",
          query ? "text-blue-300" : ""
        )}
      />
      <input
        onChange={handleQueryChange}
        onSubmit={handleSearch}
        type="text"
        className=" h-10 w-72 
                bg-transparent border border-gray-400
                pl-9 text-gray-100 rounded-md text-body-sm
                outline-none transition-all duration-200
                focus-within:border-blue-300 
                focus-within:ring-1 focus-within:ring-blue-300
                placeholder:text-gray-300 
                placeholder:text-body-sm"
        placeholder="Buscar"
      />
    </form>
  );
};
