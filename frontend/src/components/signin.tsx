import { Input } from "./input";
import { Heading } from "./heading";
import { Button } from "./button";

const Signin = ():React.ReactNode => 
{
    return (
        <div className="h-screen flex w-screen">
      {/* Login Form Section */}
      <div className="flex flex-col justify-center p-4 h-full w-full md:w-1/2 text-center bg-white rounded-2xl shadow-lg">
        <div className="md:text-4xl mb-8">
          <Heading label="Login" />
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-3/4 mb-6 text-left font-semibold">
            Email
            <Input label="Enter your email" />
          </div>
          <div className="w-3/4 mb-6 text-left font-semibold">
            Password
            <Input label="Enter your password" />
          </div>
          <div className="w-3/4 mb-6 text-left font-semibold">
            Confirm Password
            <Input label="Confirm your password" />
          </div>
          <div className="w-1/2 mb-6">
            <Button label="Login" />
          </div>
          <div className="w-3/4 text-right underline underline-offset-2 font-normal text-black text-sm">
            Forgot Password?
          </div>
        </div>
      </div>

      {/* Second Div Section with Subtle Gradient */}
      <div className="hidden sm:flex h-full w-1/2 bg-gradient-to-r from-black via-gray-950 to-gray-900 justify-center items-center">
        <div className="flex flex-col text-center text-white">
          <div className="text-6xl font-extrabold mb-4">
            Destion Innovations
          </div>
          <div className="text-xl font-light italic">
            Login to your account <br /> We're happy to see you again!
          </div>
        </div>
      </div>
    </div>
    )
}

export default Signin;  