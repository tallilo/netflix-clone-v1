import useSWR from "swr";
import featcher from "@/lib/fetcher";

function useMovie(id?: string) {
  const { data, error, isLoading, mutate } = useSWR(
    id ? `/api/movies/${id}` : "",
    featcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { data, error, isLoading, mutate };
}

export default useMovie;
