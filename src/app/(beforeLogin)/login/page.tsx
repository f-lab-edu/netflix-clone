import Image from "next/image";
import Login from "@/components/login/login";
import LoginFooter from "@/components/login/login-footer";

function LoginPage({ searchParams }: { searchParams: { email: string } }) {
  const email = searchParams?.email ?? "";
  return (
    <>
      <Image
        className={"hero h-80vh opacity-60 absolute"}
        src={
          "https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
        }
        alt={"background"}
        width={500}
        height={500}
      />
      <div className={"flex h-80vh justify-center items-center"}>
        <div className="card max-w-sm bg-black">
          <Login email={email} />
          <LoginFooter />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
