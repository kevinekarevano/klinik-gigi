import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-teal-100 to-slate-100 flex px-4 justify-center text-center items-center">
      <div className="w-full max-w-sm space-y-5">
        <div>
          <img src="https://res.cloudinary.com/du6yvy7yw/image/upload/v1752743605/logo_ahliGigiBintaro_qj4db6.webp" alt="logo ahli gigi bintaro" className="w-1/3 mx-auto" />
          <h1 className="text-accent-900 text-xl font-semibold">
            Welcome to, Ahli Gigi Bintaro <span>👋</span>
          </h1>
        </div>
        <div    className="mt-7">
          <Label htmlFor={"username"} className={"text-accent-900 font-semibold mb-1"}>
            Username
          </Label>

          <Input id="username" placeholder="Enter your username here..." className={" border-accent-900 focus:border-accent-900 selection:bg-accent-900 border-2 w-full  shadow-none"} />
        </div>
        <div>
          <Label htmlFor={"password"} className={"text-accent-900 font-semibold mb-1"}>
            Password
          </Label>

          <Input id="password" type={"password"} placeholder="Enter your password here..." className={" border-accent-900 focus:border-accent-900 selection:bg-accent-900 border-2 w-full  shadow-none"} />
        </div>
        <Button className={"w-full bg-accent-900 font-semibold text-lg py-5 cursor-pointer hover:bg-accent-800"}>Login</Button>
      </div>
    </div>
  );
};

export default LoginPage;
