import { useCallback, useEffect, useState } from 'react';
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from '../api/users';

export function useUsers(initialParams = {}) {
  const [users, setUsers] = useState([]);
  const [params, setParams] = useState(initialParams);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = useCallback(
    async (overrideParams = {}) => {
      setLoading(true);
      setError(null);
      try {
        const data = await getUsers({ ...params, ...overrideParams });
        setUsers(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [params],
  );

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const addUser = useCallback(async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const newUser = await createUser(userData);
      setUsers((prev) => [...prev, newUser]);
      return newUser;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const editUser = useCallback(async (id, userData) => {
    setLoading(true);
    setError(null);
    try {
      const updatedUser = await updateUser(id, userData);
      setUsers((prev) =>
        prev.map((user) => (user.id === updatedUser.id ? updatedUser : user)),
      );
      return updatedUser;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const removeUser = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      await deleteUser(id);
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    users,
    loading,
    error,
    refetch: fetchUsers,
    setParams,
    addUser,
    editUser,
    removeUser,
  };
}


