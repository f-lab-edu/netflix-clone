import { options } from "@/app/(afterLogin)/_lib/tmdb-config";

export const getToken = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/authentication/token/new",
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  if (!response.success) return;
  return response.request_token;
};

export const confirmToken = async (token: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&username=${process.env.NEXT_PUBLIC_TMDB_USERNAME}&password=${process.env.NEXT_PUBLIC_TMDB_PASSWORD}&request_token=${token}`,
  ).then((data) => data.json());
  if (!response.success) return;
  return response.success;
};

export const getSessionId = async (token: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&request_token=${token}`,
  ).then((data) => data.json());
  if (!response.success) return;
  return response.session_id;
};
