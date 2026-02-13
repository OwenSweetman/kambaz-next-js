"use client";
import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Signin() {
  return (
    <div id="wd-signin-screen" className="p-5" style={{ maxWidth: "400px" }}>
      <h1 className="mb-4">Sign in</h1>
      <FormControl id="wd-username"
        placeholder="username"
        className="mb-2" />
      <FormControl id="wd-password"
        placeholder="password"
        type="password"
        className="mb-3" />
      <Link id="wd-signin-btn"
        href="/account/profile"
        className="btn btn-primary w-100 mb-2">
        Sign in
      </Link>
      <Link id="wd-signup-link"
        href="/account/signup">
        Sign up
      </Link>
    </div>
  );
}
