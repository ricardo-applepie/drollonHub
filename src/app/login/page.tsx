'use client';

import './login.scss';
import Form from "../components/form/form";

export default function Login() {

  return (
    <div className="w-full h-full	font-[family-name:var(--font-geist-sans)] login-page">
      <main className="flex flex-col h-full	">
        <div className=" mt-10">
          <Form type="login" />
        </div>
      </main>
    </div>
  );
}