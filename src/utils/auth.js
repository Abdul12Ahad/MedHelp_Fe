const API_URL = "http://localhost:5000/api/auth";

/* REGISTER */
export const registerUser = async (formData) => {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Registration failed");
  }

  return data;
};

/* LOGIN */
export const loginUser = async (formData) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Login failed");
  }

  // Save token
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));

  return data;
};

/* LOGOUT */
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

/* CHECK AUTH */
export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};
