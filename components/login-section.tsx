import { useState } from "react";

export default function LoginSection() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <section className="py-16 bg-[#000c2a]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl flex flex-col md:flex-row">
          {/* Left side - Replaced with Image */}
          <div className="w-full md:w-1/2 p-2 relative">
          <div className="flex flex-col h-full">
            <img
              src="/images/login1.jpg"
              alt="Skill Assessment"
              className="w-10/4 h-[500px] " // Reduces image to 75% of its container
            />
          </div>
        </div>

          {/* Right side */}
          <div className="w-full md:w-1/2 bg-[#00418d] p-8 flex items-center">
            <div className="w-full">
              <h2 className="text-xl font-bold text-white mb-6">
                {isSignUp ? "Sign up for SkillKwiz" : "Sign in to SkillKwiz"}
              </h2>

              <form className="space-y-4">
                {isSignUp && (
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-gray-200 text-gray-800 p-3 rounded-md focus:ring-2 focus:ring-[#00a8e8] outline-none"
                    />
                  </div>
                )}

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-gray-200 text-gray-800 p-3 rounded-md focus:ring-2 focus:ring-[#00a8e8] outline-none"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-gray-200 text-gray-800 p-3 rounded-md focus:ring-2 focus:ring-[#00a8e8] outline-none"
                  />
                </div>

                {!isSignUp && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center text-white">
                      <input type="checkbox" className="h-4 w-4 mr-2" />
                      Remember me
                    </label>
                    <a
                      href="#"
                      className="text-white hover:underline cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsSignUp(true);
                      }}
                    >
                      Forgot Password?
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#f73e5d] text-white p-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
                >
                  {isSignUp ? "Sign Up" : "Sign In"}
                </button>

                <div className="text-center text-white mt-4">
                  <p className="mb-2">— Or continue with —</p>
                  <div className="flex justify-center space-x-4">
                    {/* Google */}
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 533.5 544.3" width="20" height="20">
                        <path
                          d="M533.5 278.4c0-17.7-1.5-35.4-4.7-52.4H272v99h146.7c-6.3 34.1-25.1 62.9-53.4 82.3v68h86.5c50.6-46.6 81.7-115.4 81.7-196.9z"
                          fill="#4285F4"
                        />
                        <path
                          d="M272 544.3c72.6 0 133.6-24 178.1-64.7l-86.5-68c-23.9 16.1-54.4 25.4-91.6 25.4-70.4 0-130-47.6-151.3-111.7H32.9v70.3C77.3 476.6 167.5 544.3 272 544.3z"
                          fill="#34A853"
                        />
                        <path
                          d="M120.7 325.3c-10.3-30.1-10.3-62.5 0-92.6v-70.3H32.9c-37.5 75-37.5 158.1 0 233.1l87.8-70.2z"
                          fill="#FBBC04"
                        />
                        <path
                          d="M272 107.6c39.6-.6 77.7 14.3 106.6 41.3l79.5-79.5C411.5 24.1 344.3-1.7 272 0 167.5 0 77.3 67.7 32.9 158.1l87.8 70.3C142 155.2 201.6 107.6 272 107.6z"
                          fill="#EA4335"
                        />
                      </svg>
                    </button>

                    {/* Apple */}
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 384 512" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill="black"
                          d="M318.7 268.7c-.2-57.2 46.6-84.7 48.7-86-26.5-38.7-67.6-44-82.3-44.7-35.1-3.6-68.4 20.7-86.1 20.7-17.6 0-44.9-20.2-74-19.6-37.9.5-72.9 22-92.4 55.7-39.4 68.3-10 169.4 28.4 224.7 18.8 27.3 41.2 58 70.6 56.8 28.1-1.1 38.8-18.3 72.8-18.3 33.9 0 43.1 18.3 72.8 17.7 29.9-.5 48.8-27.9 67.4-55.3 21.1-30.7 29.8-60.5 30.1-62.1-.7-.3-57.3-21.9-57.6-86.7zM259.4 76.3c15.5-18.7 25.9-44.7 23-70.7-22.2.9-49.1 14.8-64.8 33.4-14.2 16.5-26.6 43-23.3 68.2 24.6 1.9 49.6-12.5 65.1-30.9z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <p className="text-white mt-6 text-center">
                  {isSignUp ? (
                    <>
                      Already have an account?{" "}
                      <button
                        type="button"
                        className="underline"
                        onClick={() => setIsSignUp(false)}
                      >
                        Sign In
                      </button>
                    </>
                  ) : (
                    <>
                      Don't have an account?{" "}
                      <button
                        type="button"
                        className="underline"
                        onClick={() => setIsSignUp(true)}
                      >
                        Sign Up
                      </button>
                    </>
                  )}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}