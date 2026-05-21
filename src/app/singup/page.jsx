

// "use client";


// import { FcGoogle } from "react-icons/fc";
// import React from "react";
// import {
//   Button,
//   Description,
//   FieldError,
//   Form,
//   Input,
//   Label,
//   Separator,
//   TextField,
// } from "@heroui/react";

// import { authClient } from "@/lib/auth-client";
// import { useRouter } from "next/navigation";

// const SingupPage = () => {
//   const router = useRouter();

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);
//     const user = Object.fromEntries(formData.entries());

//     const { data, error } = await authClient.signUp.email({
//       email: user.email,
//       password: user.password,
//       name: user.name,
//       image: user.image,
//     });

//     console.log("data:", data);
//     console.log("error:", error);

//     // signup success হলে login page এ redirect
//     if (data) {
//       router.push("/login");
//     }
//   };

//   const handleGoogleSingIn = async () =>{
//     await authClient.signIn.social({
//       provider:"google"
//     })

//   }

//   return (
//     <div className="max-w-7xl mx-auto">
//       <div className="text-center my-5">
//         <h1 className="text-2xl font-semibold">
//           Create Account
//         </h1>
//       </div>

//       <div className="border p-5 w-fit mx-auto rounded-lg">

//         <Form
//           className="flex w-96 flex-col gap-4"
//           onSubmit={onSubmit}
//         >
//           <TextField
//             isRequired
//             name="email"
//             type="email"
//             validate={(value) => {
//               if (
//                 !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
//               ) {
//                 return "Please enter a valid email";
//               }
//               return null;
//             }}
//           >
//             <Label>Email</Label>
//             <Input placeholder="john@example.com" />
//             <FieldError />
//           </TextField>

//           <TextField
//             isRequired
//             name="name"
//             type="text"
//           >
//             <Label>Name</Label>
//             <Input placeholder="Enter your name" />
//             <FieldError />
//           </TextField>

//           <TextField
//             isRequired
//             name="image"
//             type="url"
//           >
//             <Label>Image URL</Label>
//             <Input placeholder="Enter image URL" />
//             <FieldError />
//           </TextField>

//           <TextField
//             isRequired
//             name="password"
//             type="password"
//             minLength={8}
//             validate={(value) => {
//               if (value.length < 8) {
//                 return "Password must be at least 8 characters";
//               }
//               return null;
//             }}
//           >
//             <Label>Password</Label>
//             <Input placeholder="Enter password" />
//             <Description>
//               Must be at least 8 characters
//             </Description>
//             <FieldError />
//           </TextField>

//           <Button
//             type="submit"
//             className="w-full rounded-none"
//           >
//             Create Account
//           </Button>
//         </Form>
//         <div className=" flex justify-center items-center">
//           <Separator />
//           <div>
//           or 
//           </div>
//           <Separator/>
//         </div>
//         <div>
//           <Button variant="outline" className="w-full rounded-none" onClick={handleGoogleSingIn}>
//           <FcGoogle />  sign in with Google
//           </Button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default SingupPage;





"use client";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });
    console.log("data:", data);
    console.log("error:", error);
    if (data) router.push("/login");
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({ provider: "google" });
  };

  return (
    <>
      <style>{`
        .signup-page {
          min-height: calc(100vh - 64px);
          width: 100%;
          display: flex !important;
          align-items: center;
          justify-content: center;
          background-color: #f9fafb;
          padding: 16px;
          box-sizing: border-box;
        }
        .signup-box {
          width: 100%;
          max-width: 780px;
          display: flex !important;
          flex-direction: row !important;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e5e7eb;
          box-shadow: 0 2px 8px rgba(0,0,0,0.07);
        }
        .signup-left {
          width: 42% !important;
          min-width: 42% !important;
          max-width: 42% !important;
          background-color: #1D9E75 !important;
          padding: 48px 36px !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;
          box-sizing: border-box;
        }
        .signup-right {
          width: 58% !important;
          min-width: 58% !important;
          background-color: #ffffff !important;
          padding: 40px !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
          box-sizing: border-box;
        }
        .signup-input {
          width: 100% !important;
          height: 44px !important;
          border: 1px solid #e5e7eb !important;
          border-radius: 10px !important;
          padding: 0 14px !important;
          font-size: 14px !important;
          color: #111827 !important;
          background-color: #f9fafb !important;
          outline: none !important;
          box-sizing: border-box !important;
          display: block !important;
        }
        .signup-input:focus {
          border-color: #1D9E75 !important;
        }
        .signup-label {
          font-size: 11px !important;
          font-weight: 600 !important;
          color: #6b7280 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.06em !important;
          display: block !important;
          margin-bottom: 6px !important;
        }
        .signup-btn-google {
          width: 100% !important;
          height: 44px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 10px;
          border: 1px solid #e5e7eb !important;
          border-radius: 10px !important;
          background-color: #ffffff !important;
          font-size: 14px;
          color: #374151;
          cursor: pointer;
          box-sizing: border-box;
        }
        .signup-btn-google:hover {
          background-color: #f9fafb !important;
        }
        .signup-btn-submit {
          width: 100% !important;
          height: 44px !important;
          background-color: #1D9E75 !important;
          color: #ffffff !important;
          border: none !important;
          border-radius: 10px !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          cursor: pointer !important;
          display: block !important;
          box-sizing: border-box;
        }
        .signup-btn-submit:hover {
          background-color: #0F6E56 !important;
        }
        .signup-divider {
          display: flex !important;
          align-items: center;
          gap: 12px;
          margin: 16px 0;
        }
        .signup-divider-line {
          flex: 1;
          height: 1px;
          background-color: #f3f4f6;
        }
      `}</style>

      <div className="signup-page">
        <div className="signup-box">

          {/* LEFT GREEN PANEL */}
          <div className="signup-left">
            <div>
              <div style={{ fontSize: "22px", fontWeight: "700", color: "#fff" }}>
                TutorHub
              </div>
              <div style={{ fontSize: "13px", color: "#9FE1CB", marginTop: "6px" }}>
                Find your perfect tutor
              </div>
            </div>

            {/* Steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { n: "1", t: "Create account", s: "Fill in your details" },
                { n: "2", t: "Find a tutor", s: "Browse by subject" },
                { n: "3", t: "Book a session", s: "Pick your time slot" },
              ].map((step) => (
                <div key={step.n} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{
                    width: "32px", height: "32px", borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "13px", fontWeight: "700", color: "#fff", flexShrink: 0,
                  }}>
                    {step.n}
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "600", color: "#fff" }}>{step.t}</div>
                    <div style={{ fontSize: "12px", color: "#9FE1CB" }}>{step.s}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div style={{ fontSize: "13px", color: "#5DCAA5" }}>
                Already have an account?
              </div>
              <a href="/login" style={{ fontSize: "13px", color: "#fff", fontWeight: "600", textDecoration: "none" }}>
                Sign in →
              </a>
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="signup-right">
            <div style={{ fontSize: "24px", fontWeight: "600", color: "#111827", marginBottom: "4px" }}>
              Create account
            </div>
            <div style={{ fontSize: "13px", color: "#9ca3af", marginBottom: "24px" }}>
              Join TutorHub and start learning today
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

              {/* Name */}
              <div>
                <label className="signup-label">Full Name</label>
                <input
                  className="signup-input"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="signup-label">Email</label>
                <input
                  className="signup-input"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="signup-label">Image URL</label>
                <input
                  className="signup-input"
                  name="image"
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>

              {/* Password */}
              <div>
                <label className="signup-label">Password</label>
                <input
                  className="signup-input"
                  name="password"
                  type="password"
                  required
                  minLength={8}
                  placeholder="Min. 8 characters"
                />
              </div>

              {/* Submit */}
              <button type="submit" className="signup-btn-submit" style={{ marginTop: "4px" }}>
                Create Account
              </button>

            </form>

            {/* Divider */}
            <div className="signup-divider">
              <div className="signup-divider-line" />
              <span style={{ fontSize: "12px", color: "#9ca3af" }}>or</span>
              <div className="signup-divider-line" />
            </div>

            {/* Google Button */}
            <button type="button" onClick={handleGoogleSignIn} className="signup-btn-google">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;