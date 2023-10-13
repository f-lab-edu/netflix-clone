import Login from "../../components/login/login";
import LoginFooter from "../../components/login/login-footer";

function LoginPage() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black">
          <Login />
          <LoginFooter />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
