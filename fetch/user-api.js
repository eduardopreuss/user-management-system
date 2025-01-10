const BASE_URL = '/api/users';

export async function fetchUsers() {
  const res = await fetch(BASE_URL, { method: 'GET' });
  if (!res.ok) throw new Error((await res.json()).message);
  return res.json();
}

export async function addUser(data) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error((await res.json()).message);
  return res.json();
}

export async function deleteUser(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });

  if (!res.ok) throw new Error((await res.json()).message);
}

export async function changePassword(id, data) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error((await res.json()).message);
}
