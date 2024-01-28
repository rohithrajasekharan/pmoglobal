"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

interface IconProps {
  className?: string;
}

interface ComponentProps {
  selected?: string;
}

export default function Navbar(props: ComponentProps) {
  return (
    <nav className="py-4 flex justify-between items-center bg-black bg-opacity-50 px-[10%]">
      <div className="block sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent
            side="top"
            className="bg-black bg-opacity-50 text-white"
          >
            <SheetHeader>
              <SheetDescription>
                <ul>
                  <li className="my-8 text-lg text-white">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="my-8 text-lg text-white">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="my-8 text-lg text-white">
                    <Link href="/expertise">Our Expertise</Link>
                  </li>
                  <li className="my-8 text-lg text-white">
                    <Link href="/projects">Our Projects</Link>
                  </li>
                  <li className="my-8 text-lg text-white">
                    <Link href="/spotlight">Spotlight</Link>
                  </li>
                  
                  <li className="my-8 text-lg text-white">
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
            <SheetFooter></SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <ul className="sm:flex flex-wrap items-center space-x-2 lg:space-x-4 text-white hidden">
        <li className={props.selected=="home"?"border-b-2 border-white ":""}>
          <Link className="text-sm lg:text-base" href="/">
            Home
          </Link>
        </li>
        <li>|</li>
        <li className={props.selected=="about"?"border-b-2 border-white ":""}>
          <Link className="text-sm lg:text-base" href="/about">
            About Us
          </Link>
        </li>
        <li>|</li>
        <li className={props.selected=="expertise"?"border-b-2 border-white ":""}>
          <Link className="text-sm lg:text-base" href="/expertise">
            Our Expertise
          </Link>
        </li>
        <li>|</li>
        <li className={props.selected=="projects"?"border-b-2 border-white ":""}>
          <Link className="text-sm lg:text-base" href="/projects">
            Our Projects
          </Link>
        </li>
        <li>|</li>
        <li className={props.selected=="spotlight"?"border-b-2 border-white ":""}>
          <Link className="text-sm lg:text-base" href="/spotlight">
            Spotlight
          </Link>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <Link href="#">
          <InstagramIcon className="w-5 h-5 text-white" />
        </Link>
        <Link href="#">
          <FacebookIcon className="w-5 h-5 text-white" />
        </Link>
        <Link href="#">
          <LinkedinIcon className="w-5 h-5 text-white" />
        </Link>
        <Link href="/contact">
        <Button className="text-sm lg:text-base bg-red-600 text-white px-4 py-2 rounded">
          Contact Us
        </Button></Link>
      </div>
    </nav>
  );
}

function LinkedinIcon(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.441 0.290833H2.23491C1.34938 0.290833 0.575684 0.927997 0.575684 1.80312V18.0452C0.575684 18.9251 1.34938 19.7092 2.23491 19.7092H18.4362C19.3265 19.7092 19.994 18.9199 19.994 18.0452V1.80312C19.9992 0.927997 19.3265 0.290833 18.441 0.290833ZM6.59494 16.477H3.81309V7.82758H6.59494V16.477ZM5.30024 6.51251H5.2803C4.39 6.51251 3.81352 5.84977 3.81352 5.02016C3.81352 4.17537 4.40518 3.52824 5.31541 3.52824C6.22565 3.52824 6.78262 4.1706 6.80256 5.02016C6.80213 5.84977 6.22565 6.51251 5.30024 6.51251ZM16.7618 16.477H13.98V11.7477C13.98 10.6146 13.5751 9.84051 12.5687 9.84051C11.7998 9.84051 11.3446 10.3606 11.1422 10.8673C11.0664 11.0494 11.046 11.2973 11.046 11.5504V16.477H8.26414V7.82758H11.046V9.03126C11.4508 8.45478 12.0832 7.62517 13.5548 7.62517C15.3809 7.62517 16.7623 8.82884 16.7623 11.4239L16.7618 16.477Z"
        fill="white"
      />
    </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.2454 2.03218C15.3424 2.03533 16.3936 2.4561 17.1694 3.20258C17.9451 3.94907 18.3824 4.96062 18.3857 6.0163V13.9837C18.3824 15.0394 17.9451 16.0509 17.1694 16.7974C16.3936 17.5439 15.3424 17.9647 14.2454 17.9678H5.96561C4.86854 17.9647 3.81734 17.5439 3.04158 16.7974C2.26583 16.0509 1.82857 15.0394 1.82529 13.9837V6.0163C1.82857 4.96062 2.26583 3.94907 3.04158 3.20258C3.81734 2.4561 4.86854 2.03533 5.96561 2.03218H14.2454ZM14.2454 0.438782H5.96561C2.77765 0.438782 0.169434 2.9486 0.169434 6.0163V13.9837C0.169434 17.0514 2.77765 19.5612 5.96561 19.5612H14.2454C17.4333 19.5612 20.0415 17.0514 20.0415 13.9837V6.0163C20.0415 2.9486 17.4333 0.438782 14.2454 0.438782Z"
        fill="white"
      />
      <path
        d="M15.4876 6.01643C15.242 6.01643 15.0018 5.94634 14.7976 5.81502C14.5933 5.68369 14.4341 5.49703 14.3401 5.27865C14.2461 5.06026 14.2215 4.81996 14.2695 4.58812C14.3174 4.35628 14.4357 4.14333 14.6094 3.97618C14.7831 3.80904 15.0044 3.69521 15.2453 3.64909C15.4862 3.60298 15.736 3.62665 15.9629 3.71711C16.1898 3.80756 16.3838 3.96075 16.5203 4.15729C16.6568 4.35383 16.7296 4.5849 16.7296 4.82128C16.73 4.97833 16.6981 5.13389 16.6358 5.27905C16.5735 5.4242 16.482 5.55609 16.3666 5.66714C16.2512 5.77818 16.1142 5.8662 15.9633 5.92615C15.8125 5.98609 15.6508 6.01677 15.4876 6.01643ZM10.1057 6.81292C10.7608 6.81292 11.4012 6.99985 11.9459 7.35006C12.4905 7.70028 12.9151 8.19805 13.1658 8.78044C13.4165 9.36283 13.482 10.0037 13.3542 10.6219C13.2264 11.2402 12.911 11.8081 12.4478 12.2538C11.9846 12.6996 11.3944 13.0031 10.7519 13.1261C10.1094 13.2491 9.44343 13.186 8.83821 12.9447C8.23299 12.7035 7.7157 12.295 7.35176 11.7709C6.98781 11.2467 6.79356 10.6305 6.79356 10.0001C6.7945 9.15511 7.14376 8.34495 7.76471 7.74743C8.38565 7.14991 9.22757 6.81382 10.1057 6.81292ZM10.1057 5.21952C9.12314 5.21952 8.16262 5.4999 7.34564 6.0252C6.52865 6.5505 5.89188 7.29713 5.51587 8.17067C5.13985 9.04421 5.04146 10.0054 5.23316 10.9328C5.42485 11.8601 5.89801 12.712 6.5928 13.3805C7.28759 14.0491 8.17281 14.5044 9.13651 14.6889C10.1002 14.8733 11.0991 14.7787 12.0069 14.4168C12.9147 14.055 13.6906 13.4423 14.2365 12.6561C14.7824 11.8699 15.0738 10.9456 15.0738 10.0001C15.0738 8.73224 14.5503 7.51627 13.6186 6.61973C12.687 5.72319 11.4233 5.21952 10.1057 5.21952Z"
        fill="white"
      />
    </svg>
  );
}

function FacebookIcon(props: IconProps) {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5759 10.0578C20.5759 4.74701 15.9786 0.440887 10.3087 0.440887C4.63883 0.440887 0.0415039 4.74701 0.0415039 10.0578C0.0415039 14.8576 3.79545 18.8362 8.70446 19.5583V12.8385H6.09687V10.0578H8.70446V7.93904C8.70446 5.52924 10.2377 4.19705 12.5826 4.19705C13.7061 4.19705 14.8813 4.38509 14.8813 4.38509V6.75196H13.586C12.3113 6.75196 11.9125 7.49297 11.9125 8.2546V10.0578H14.7598L14.3051 12.8385H11.913V19.5591C16.822 18.8375 20.5759 14.8589 20.5759 10.0578Z"
        fill="white"
      />
    </svg>
  );
}

function MenuIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="white"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
      />
    </svg>
  );
}
