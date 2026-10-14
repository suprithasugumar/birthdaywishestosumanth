import { queryOptions } from "@tanstack/react-query";
import { readScrapbookPhotos } from "./scrapbook.functions";

export const scrapbookPhotosQuery = queryOptions({
  queryKey: ["scrapbook-photos"],
  queryFn: () => readScrapbookPhotos(),
  staleTime: 25 * 60 * 1000,
});