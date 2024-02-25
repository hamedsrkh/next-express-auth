export async function login({
  email,
  password,
}: {
  email: string
  password: string
}) {
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
}

export async function register({
  email,
  password,
  name,
}: {
  email: string
  password: string
  name: string
}) {
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  })
}
