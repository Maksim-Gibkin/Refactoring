import {useEffect, useState} from "react";
import {IUser} from "../models/User";

export const useFetchUsers = (url: string): { isLoading: boolean; error: string | null; users: IUser[] } => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        const message = `Произошла ошибка ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json()
      setUsers(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url]);

  return {users, isLoading, error}
}