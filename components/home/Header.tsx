import Image from "next/image";
import Link from "next/link";

interface IconProps {
  className?: string;
}

export default function Component() {
  return (
    <header className="flex justify-between items-center py-2 bg-[#2B2B2B] px-[10%]">
      <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
        <Link href="/">
          <Image width={120} height={72} src="/pmo.svg" alt="" priority />
        </Link>
      </div>
      <nav className="flex space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-[#DC1E00] rounded-full flex items-center justify-center">
            <MailIcon className="w-4 h-4 text-white stroke-1" />
          </div>
          <div className="hidden sm:flex flex-col">
            <p className="font-semibold text-white">Email</p>
            <a className="text-white" href="#">
            enquiries@pmo-global.com
            </a>
          </div>
        </div>
        {/* <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-[#DC1E00] rounded-full flex items-center justify-center">
            <PhoneIcon className="w-4 h-4 text-white stroke-1" />
          </div>
          <div className="hidden sm:flex flex-col">
            <p className="font-semibold text-white">Call Us</p>
            <a className="text-white" href="#">
              123-456-7890
            </a>
          </div>
        </div> */}
      </nav>
    </header>
  );
}

function MailIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
