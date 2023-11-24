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
