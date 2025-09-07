interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

export async function login(email: string, password: string) {
  const response = await fetch(
    `${import.meta.env.API_BASE_URL}/api/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    }
  );
  const data = await response.json();
  console.log(data, "login data");
  return data;
}

export async function signup(userData: UserData) {
  const response = await fetch(
    `${import.meta.env.API_BASE_URL}/api/auth/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(userData),
    }
  );
  const data = await response.json();
  console.log(data, "signup data");
  return data;
}
