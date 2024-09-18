import { Pagination } from "./pagination";

export type DataResponse<T> = {
  pagination: Pagination;
  data: T;
};

type ErrorStatusResponse = {
  ok: false;
  message: string;
};

type SuccessStatusResponse<T> = {
  ok: true;
  pagination: Pagination;
  data: T;
};

export type APIResponse<T> = ErrorStatusResponse | SuccessStatusResponse<T>;
