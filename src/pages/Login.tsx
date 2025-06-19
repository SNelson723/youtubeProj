import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-800 text-white">
      <div className="text-3xl mb-4">Login to continue</div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default Login;