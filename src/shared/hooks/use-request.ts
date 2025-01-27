import { useState, useEffect } from "react";
import { AxiosError, AxiosRequestConfig } from "axios";
import { $api } from "../api";

export const generateQuery =
  (url: string, isLazy = false) =>
  <Response, Params>(params?: Params) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Response | undefined>(undefined);
    const [error, setError] = useState<any | undefined>(undefined);

    const query = async () => {
      setIsLoading(true);
      setError(undefined);

      const config: AxiosRequestConfig = {
        url,
        method: "get",
        params,
      };

      try {
        const response = await $api(config);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
      if (!isLazy) query();
    }, []);

    if (!isLazy) return { isLoading, data, setData, error };
    return [query, { isLoading, data, setData, error }];
  };

export interface UseRequestOptions<Params, Body> {
  params?: Params;
  body?: Body;
}

export const generateMutation =
  <Response, Params, Body>(url: string, method: "post" | "put" | "delete") =>
  () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Response | undefined>(undefined);
    const [error, setError] = useState<any | undefined>(undefined);

    const query = async (options?: UseRequestOptions<Params, Body>) => {
      setIsLoading(true);
      setError(undefined);

      const config: AxiosRequestConfig = {
        url,
        method,
        params: options?.params,
        data: ["post", "put"].includes(method) ? options?.body : undefined,
      };

      try {
        const response = await $api(config);
        setData(response.data);
        return response;
      } catch (err) {
        setError(err);
        return err as AxiosError;
      } finally {
        setIsLoading(false);
      }
    };

    return [query, { isLoading, data, setData, error }] as const;
  };
