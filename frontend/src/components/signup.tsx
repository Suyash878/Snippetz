import React, {useState} from "react"
import { Input } from "./input";
import { Heading } from "./heading";
import { Button } from "./button";

// Define the shape of the errors object
interface Errors {
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }
  
  export const Signup = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [errors, setErrors] = useState<Errors>({});
  
    const validateForm = () => {
      const newErrors: Errors = {};
      // Username validation
      if (!username) {
        newErrors.username = "Username is required.";
      }
      // Email validation
      if (!email) {
        newErrors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = "Email address is invalid.";
      }
      // Password validation
      if (!password) {
        newErrors.password = "Password is required.";
      } else if (password.length < 6) {
        newErrors.password = "Password must be at least 6 characters.";
      }
      // Confirm password validation
      if (password !== confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match.";
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0; // Return true if no errors
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // Prevent default form submission
      if (validateForm()) {
        // Handle successful validation (e.g., submit form)
        console.log("Form submitted:", { username, email, password });
      }
    };
  
    return (
      <div className="h-screen flex w-screen">
        {/* Signup Form Section */}
        <div className="flex flex-col justify-center p-4 h-full w-full md:w-1/2 text-center bg-white rounded-2xl shadow-lg">
          <div className="md:text-4xl mb-8">
            <Heading label="Sign Up" />
          </div>
          <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
            <div className="w-3/4 mb-6 text-left font-semibold">
              Username
              <Input
                label="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && <p className="text-red-500 text-xs">{errors.username}</p>}
            </div>
            <div className="w-3/4 mb-6 text-left font-semibold">
              Email
              <Input
                label="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>
            <div className="w-3/4 mb-6 text-left font-semibold">
              Password
              <Input
                label="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
            </div>
            <div className="w-3/4 mb-6 text-left font-semibold">
              Confirm Password
              <Input
                label="Confirm your password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
            </div>
            <div className="w-1/2 mb-6">
              <Button label="Sign Up" type="submit" />
            </div>
            <div className="w-3/4 text-right">
              <span className="font-normal text-black text-sm">
                Already have an account?{" "}
                <a href="/signin" className="text-blue-500 underline">
                  Signin
                </a>
              </span>
            </div>
          </form>
        </div>
  
        {/* Background Section (Optional) */}
        <div className="hidden sm:flex h-full w-1/2 bg-gradient-to-r from-black via-gray-950 to-gray-900 justify-center items-center">
          <div className="flex flex-col text-center text-white">
            <div className="text-6xl font-extrabold mb-4">Destion Innovations</div>
            <div className="text-xl font-light italic">
              Join us today <br /> Create your account now!
            </div>
          </div>
        </div>
      </div>
    );
  };