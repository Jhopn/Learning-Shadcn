import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="">
        <h2 className="text-center text-3xl uppercase">Login</h2>
        <LoginForm/>
      </div>
    </div>
  );
}
