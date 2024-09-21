import { PaginationType } from "./pagination";

export type DataResponse<T> = {
  pagination: PaginationType;
  data: T;
};

type ErrorStatusResponse = {
  ok: false;
  message: string;
};

type SuccessStatusResponse<T> = {
  ok: true;
  pagination: PaginationType;
  data: T;
};

export type APIResponse<T> = ErrorStatusResponse | SuccessStatusResponse<T>;
