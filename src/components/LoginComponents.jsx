import { FaGithub, FaGoogle } from "react-icons/fa";

export default function LoginComponents() {
  return (
    <div className="*:w-full flex flex-col gap-2 space-y-2">
      <p className="text-[20px] font-semibold">Login with</p>
      <button className="flex items-center justify-center btn">
        <FaGoogle />
        <p>Login with Google</p>
      </button>
      <button className="flex items-center justify-center btn">
        <FaGithub />
        <p>Login with Github</p>
      </button>
    </div>
  );
}
