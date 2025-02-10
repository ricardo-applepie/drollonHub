
'use client';

import Image from "next/image";
import "./navbar.scss";
import Link from "next/link";

interface NavbarProps {
  type: string;
}

export default function Navbar(props: NavbarProps) {
   console.log(props);
  return (
    <div className="flex justify-between px-3 py-7 navbar">
      <div className="w-1/3 font-semibold text-2xl">
        <Link className="pl-1" href={"/"}>DrollonHub</Link>
      </div>
      <div> 
      <div className="flex justify-between gap-6">

      </div>
      </div>
    </div>
  );
};
