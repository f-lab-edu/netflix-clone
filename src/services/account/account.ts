import { options } from "@/config/config";

export const login = async (data: { email: string; password: string }) => {
  return await fetch("http://115.85.181.186:8000/v1/auth/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return alert("로그인에 실패하였습니다.");
    })
    .catch((err) => console.error(err));
};

export const signup = async (data: { email: string; password: string }) => {
  const formData = {
    email: data.email,
    password: data.password,
    userName: "users",
  };
  console.log(formData);
  const fetchData = await fetch("http://115.85.181.186:8000/v1/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
  }).then((data) => data.json());
  console.log(fetchData.id);

  const { request_token } = await fetch(
    "https://api.themoviedb.org/3/authentication/token/new",
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  console.log(request_token);

  const response = await fetch(
    `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&username=eodnjs467&password=123123&request_token=${request_token}`,
  ).then((data) => data.json());
  console.log("??", response);

  const sessionId = await fetch(
    `https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&request_token=${request_token}`,
  ).then((data) => data.json());
  console.log("sessionId: ", sessionId);

  // ㅎㅐ당 계정에 sessionId 저장
  //TODO: API 추가
  await fetch(``, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ id: fetchData.id, sessionId: sessionId }),
  }).then((data) => data.json());

  return {
    id: fetchData.id,
    sessionId: sessionId.session_id,
    token: request_token,
  };
};
