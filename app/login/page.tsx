"use client";
import { Lock, Mail } from "lucide-react";
import React, { FormEvent, useEffect, useState } from "react";
import Input from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "@/lib/Redux/features/auth/authSlice";
import { showToast } from "@/components/ui/toasts";
import { useRouter } from "next/navigation";
import { RootState } from "@/lib/Redux/store";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userPassword = "1234";
  const userEmail = "example@example.com";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) router.push("/profile");
  }, [isLoggedIn, router]);
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (email === userEmail && password === userPassword) {
        dispatch(logIn({ name: "John Doe", email: userEmail }));
        router.push("/profile");
        showToast({
          description: "Login was successful.",
          variant: "success",
        });
      } else if (email === "" || password === "")
        showToast({
          description: "Please fill the inputs.",
          variant: "warning",
        });
      else
        showToast({
          description: "Email or password is wrong.",
          variant: "error",
        });
    } catch (error) {
      if (error instanceof Error)
        showToast({
          description: error.message,
          variant: "error",
        });
      else
        showToast({
          description: "Something went wrong.",
          variant: "error",
        });
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="backdrop-blur-2xl bg-black/50 w-5/6 max-w-[600px] h-[340px] relative">
          <h2 className="text-purple-100 my-5 text-3xl text-center">Login</h2>
          <form onSubmit={handleLogin}>
            <Input
              text="email"
              icon={<Mail />}
              type="email"
              value={email}
              setValue={setEmail}
              id="email"
            />
            <Input
              text="password"
              icon={<Lock />}
              type="password"
              value={password}
              setValue={setPassword}
              id="password"
            />
            <div className="flex justify-center">
              <Button type="submit">Sign In</Button>
            </div>
          </form>
          <Image
            src={"/ninja.png"}
            alt="ninja"
            height={200}
            width={200}
            className="absolute -top-32 -right-9 -z-10"
          />
          <div className="text-purple-100 mt-5 text-xs md:text-sm flex flex-col justify-center items-center">
            <span>Email: example@example.com</span>
            <span>password: 1234</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
