import { apiClient } from './client';

const USERS_BASE = '/users';

export async function getUsers(params = {}) {
  const response = await apiClient.get(USERS_BASE, { params });
  return response.data;
}

export async function getUserById(id) {
  const response = await apiClient.get(`${USERS_BASE}/${id}`);
  return response.data;
}

export async function createUser(payload) {
  const response = await apiClient.post(USERS_BASE, payload);
  return response.data;
}

export async function updateUser(id, payload) {
  const response = await apiClient.put(`${USERS_BASE}/${id}`, payload);
  return response.data;
}

export async function deleteUser(id) {
  await apiClient.delete(`${USERS_BASE}/${id}`);
  return true;
}


