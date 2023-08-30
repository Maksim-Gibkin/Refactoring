import {useEffect, useState} from "react";

export const useFetch = <T>(url: string, requestParam?: any): {
  isLoading: boolean;
  error: string | null;
  data: T | null
} => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url, requestParam)
      if (!response.ok) {
        const message = `Произошла ошибка ${response.status}`;
        throw new Error(message);
      }

      const res = await response.json()
      setData(res)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url]);

  return {data, isLoading, error}
}