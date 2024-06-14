
export const loginUser = async (formData: { [key: string]: string }) => {
  const response = await fetch('http://localhost:8080/auth/log-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('Error al iniciar sesión');
  }
};