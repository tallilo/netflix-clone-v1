import useSWR from "swr";

import featcher from "@/lib/fetcher";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/current", featcher);

  return { data, error, isLoading, mutate };
};

export default useCurrentUser;
