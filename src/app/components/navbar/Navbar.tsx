
'use client';

import "./navbar.scss";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';

interface NavbarProps {
  type?: string;
}

export default function Navbar(props: NavbarProps) {

  return (
    <div className="navbar">
      <div className="max-w-7xl mx-auto flex justify-between text-white py-7 px-5 md:px-10">
        <Link className="pl-1 navbar__link  font-semibold text-1xl md:text-4xl mr-5" href={"/"}>DrollonHub</Link>
        <div className="flex justify-between gap-6 px-3 hidden md:flex">
          <Link className="pl-1 navbar__link" href={"/search"}>Search</Link>
          <Link className="pl-1 navbar__link" href={"/"}>Work</Link>
          <Link className="pl-1 navbar__link" href={"/"}>Finance</Link>
          <Link className="pl-1 navbar__link" href={"/list-your-place"}>Add listing</Link>
        </div>

        <div className="flex justify-between gap-6 hidden md:block">
          <Link href={"/login"}>Login</Link>
        </div>
        <div className="block md:hidden">
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};
