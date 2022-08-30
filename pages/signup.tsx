import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState({});

  const handleChange = (key: string, value: string) => {
    setUser({ ...user, [key]: value });
  };

  const handleSignUp = () => {
    console.log("user", user);
    axios
      .post("http://localhost:3000/api/signUp", user)
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="h-full gradient-form md:h-screen">
      <div className="container mx-auto py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-2xl rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="text-4xl lg:w-6/12 flex items-center justify-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 uppercase">
                  codeswear.com
                </div>
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="mx-auto w-24 overflow-hidden rounded-full p-1 bg-pink-500">
                      <img
                        className=" object-cover"
                        src="/images/logo-circle.webp"
                        alt="logo"
                      />
                    </div>
                    <form>
                      <p className="text-xl font-semibold text-center mt-4 mb-10">
                        Sign Up to your account
                      </p>
                      <div className="mb-4">
                        <Input
                          label=""
                          type="text"
                          id="name"
                          placeholder="Name"
                          handleChange={(e) => {
                            // @ts-ignore
                            handleChange("name", e.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-4">
                        <Input
                          label=""
                          type="email"
                          id="email"
                          placeholder="Email"
                          handleChange={(e) => {
                            // @ts-ignore
                            handleChange("email", e.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-4">
                        <Input
                          label=""
                          type="password"
                          id="password"
                          placeholder="Passsword"
                          handleChange={(e) => {
                            // @ts-ignore
                            handleChange("password", e.target.value);
                          }}
                        />
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button
                          className="inline-block px-6 py-2.5 text-pink-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-500 hover:shadow-lg hover:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          onClick={handleSignUp}
                        >
                          Sign Up
                        </button>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Already have an account?</p>
                        <Button
                          title="Sign In"
                          disable={false}
                          variant="outline"
                          icon=""
                          handleClick={() => {
                            router.push("/login");
                          }}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
