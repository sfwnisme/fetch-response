export interface IFetchResponse<T> {
  data?: T | T[] | { [key: string]: T } | {} | null | undefined;
  isEmpty?: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string | string[] | { [key: string]: string[] } | {} | null;
}
export type TFetchStatus = "success" | "error"
